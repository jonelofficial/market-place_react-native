import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      animation: "none",
      presentation: "transparentModal",
      headerTitleAlign: "center",
    }}
  >
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{ headerShown: false, animation: "slide_from_bottom" }}
    />
    <Stack.Screen
      name="Register"
      component={RegisterScreen}
      options={{ animation: "slide_from_bottom" }}
    />
  </Stack.Navigator>
);

export default AuthNavigator;
