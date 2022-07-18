import * as Notifications from "expo-notifications";
import { useEffect } from "react";

import expoPushTokenApi from "../api/expoPushToken";
import navigation from "../navigation/rootNavigation";

export default useNotifications = (notificationListener) => {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    }),
  });
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
    navigation.navigate(notificationListener);
  };

  useEffect(() => {
    registerForPushNotifications();

    Notifications.addNotificationResponseReceivedListener(handleNotification);
  }, []);
};
