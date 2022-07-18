import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ListingEditScreen from "../screens/ListingEditScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import NewListingButton from "./NewListingButton";
import routes from "./routes";
import { KeyboardAvoidingView, Platform } from "react-native";
import useNotifications from "../hooks/useNotifications";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  useNotifications();
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
