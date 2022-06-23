import { useState } from "react";
import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";
import Card from "./app/components/Card";
import ListItem from "./app/components/lists/ListItem";
import ListItemDeleteAction from "./app/components/lists/ListItemDeleteAction";
import Screen from "./app/components/Screen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ListingScreen from "./app/screens/ListingScreen";
import LoginScreen from "./app/screens/LoginScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return (
    <>
      <LoginScreen />
      {/* <WelcomeScreen /> */}
      {/* <ViewImageScreen /> */}
      {/* <ListingScreen /> */}
      {/* <ListingDetailsScreen /> */}
      {/* <AccountScreen /> */}
      {/* <MessagesScreen /> */}

      {/* <ListingEditScreen /> */}
      {/* <RegisterScreen /> */}
    </>
  );
}
