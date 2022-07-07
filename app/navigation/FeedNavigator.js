import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import ListingScreen from "../screens/ListingScreen";

const Stack = createNativeStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      animation: "slide_from_bottom",
      headerTitleAlign: "center",
      presentation: "modal",
      headerShown: false,
    }}
  >
    <Stack.Screen name="Listing" component={ListingScreen} />
    <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;
