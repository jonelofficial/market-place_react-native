import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import Constants from "expo-constants";

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]} forceInset={{ top: "never" }}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});
export default Screen;
