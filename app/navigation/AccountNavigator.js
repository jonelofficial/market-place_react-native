import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AccountScreen from "../screens/AccountScreen";
import MessagesScreen from "../screens/MessagesScreen";

const Stack = createNativeStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerTitleAlign: "center",
      presentation: "modal",
    }}
  >
    <Stack.Screen name="Account Details" component={AccountScreen} />
    <Stack.Screen
      name="Messages"
      component={MessagesScreen}
      options={{ animation: "slide_from_right" }}
    />
  </Stack.Navigator>
);

export default AccountNavigator;
