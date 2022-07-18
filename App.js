import React, { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { LogBox } from "react-native";

import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigation from "./app/navigation/AuthNavigation";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
import navigationTheme from "./app/navigation/navigationTheme";
import OfflineNotice from "./app/components/OfflineNotice";
import { navigationRef } from "./app/navigation/rootNavigation";
import logger from "./app/utility/logger";

LogBox.ignoreLogs(["exported from 'deprecated-react-native-prop-types'."]);

logger.start();

export default function App() {
  logger.log(new Error("Error in app"));
  const [user, setUser] = useState();

  useEffect(() => {
    restoreUser();
  }, []);

  const restoreUser = async () => {
    try {
      SplashScreen.preventAutoHideAsync();

      const user = await authStorage.getUser();
      if (user) setUser(user);
    } catch (e) {
      console.warn(e);
    } finally {
      SplashScreen.hideAsync();
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigation />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
