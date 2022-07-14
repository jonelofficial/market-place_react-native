import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Notifications from "expo-notifications";

import expoPushTokenApi from "../api/expoPushToken";
import ListingEditScreen from "../screens/ListingEditScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import NewListingButton from "./NewListingButton";
import routes from "./routes";
import { KeyboardAvoidingView, Platform } from "react-native";
import navigation from "./rootNavigation";

const Tab = createBottomTabNavigator();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

const AppNavigator = () => {
  const registerForPushNotifications = async () => {
    const permission = await Notifications.getPermissionsAsync();
    if (!permission.granted) alert("Please allow notification");

    try {
      const token = await Notifications.getExpoPushTokenAsync();
      console.log(token.data);
      expoPushTokenApi.register(token.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleNotification = (notif) => {
    navigation.navigate("Account");
  };

  useEffect(() => {
    registerForPushNotifications();

    Notifications.addNotificationResponseReceivedListener(handleNotification);
  }, []);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled={false}
    >
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          // tabBarHideOnKeyboard: true,
          // tabBarStyle: { elevation: 0, borderTopWidth: 0 },
        }}
      >
        <Tab.Screen
          name="Feed"
          component={FeedNavigator}
          options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="ListingEdit"
          component={ListingEditScreen}
          options={({ navigation }) => ({
            tabBarButton: () => (
              <NewListingButton
                onPress={() => navigation.navigate(routes.LISTING_EDIT)}
              />
            ),
          })}
        />
        <Tab.Screen
          name="Account"
          component={AccountNavigator}
          options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons
                name="account"
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </KeyboardAvoidingView>
  );
};

export default AppNavigator;
