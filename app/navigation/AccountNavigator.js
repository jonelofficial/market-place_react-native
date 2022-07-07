import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AccountScreen from "../screens/AccountScreen";
import MessagesScreen from "../screens/MessagesScreen";

const Stack = createNativeStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      animation: "slide_from_bottom",
      headerTitleAlign: "center",
      presentation: "modal",
    }}
  >
    <Stack.Screen name="Account Details" component={AccountScreen} />
    <Stack.Screen name="Messages" component={MessagesScreen} />
  </Stack.Navigator>
);

export default AccountNavigator;
