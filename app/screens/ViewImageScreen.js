import React from "react";
import { Image, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Constants from "expo-constants";

import Screen from "../components/Screen";

import defaultStyle from "../config/styles";

function ViewImageScreen(props) {
  return (
    <Screen style={styles.screen}>
      <MaterialCommunityIcons
        name="trash-can-outline"
        color="#fff"
        size={40}
        style={styles.trash}
      />
      <MaterialCommunityIcons
        name="close"
        color="#fff"
        size={40}
        style={styles.close}
      />
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require("../assets/products/redjacket.jpg")}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    backgroundColor: defaultStyle.colors.black,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  close: {
    position: "absolute",
    right: 10,
    paddingTop: Constants.statusBarHeight,
  },
  trash: {
    position: "absolute",
    left: 10,
    paddingTop: Constants.statusBarHeight,
  },
});
export default ViewImageScreen;
