import { useContext } from "react";
import { Alert } from "react-native";
import jwtDecode from "jwt-decode";

import AuthContext from "./context";
import authStorage from "./storage";

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logout = () => {
    Alert.alert("Logout", "Are you sure to proceed?", [
      { text: "Cancel", style: "cancel" },

      {
        text: "OK",
        onPress: () => {
          authStorage.removeToken();
          setUser(null);
        },
      },
    ]);
  };

  const logIn = (authToken) => {
    const user = jwtDecode(authToken);
    setUser(user);
    authStorage.storeToken(authToken);
  };

  return { user, logout, logIn };
};
