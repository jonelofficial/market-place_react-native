import React from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";

import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigation from "./app/navigation/AuthNavigation";
import navigationTheme from "./app/navigation/navigationTheme";

// import { LogBox } from "react-native";

// // Ignore log notification by message:
// LogBox.ignoreLogs(["Warning: ..."]);

// // Ignore all log notifications:
// LogBox.ignoreAllLogs();

import { LogBox } from "react-native";
import OfflineNotice from "./app/components/OfflineNotice";

LogBox.ignoreLogs(["exported from 'deprecated-react-native-prop-types'."]);

export default function App() {
  // const netInfo = useNetInfo();
  // console.log(netInfo);
  return (
    <>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        <AppNavigator />
      </NavigationContainer>
    </>
  );
}
