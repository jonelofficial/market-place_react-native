import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Screen from "./app/components/Screen";
import AppText from "./app/components/AppText";
import { Button } from "react-native";

const Link = () => {
  const navigation = useNavigation();
  return (
    <Button
      title="Go to tweet details"
      onPress={() => navigation.navigate("TweetDetails")}
    />
  );
};

const Tweets = ({ navigation }) => (
  <Screen>
    <AppText>Tweets</AppText>
    <Button
      title="View Tweet"
      onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
    />
    {/* <Link /> */}
  </Screen>
);

const TweetDetails = ({ route }) => (
  <Screen>
    <AppText>Tweet Details {route.params.id}</AppText>
  </Screen>
);

const Account = () => (
  <Screen>
    <AppText>Account</AppText>
  </Screen>
);

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Feed" component={Tweets} />
    <Tab.Screen name="Account" component={Account} />
  </Tab.Navigator>
);

const StackNavigator = () => (
  <Stack.Navigator screenOptions={{}}>
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen name="TweetDetails" component={TweetDetails} />
  </Stack.Navigator>
);
export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
