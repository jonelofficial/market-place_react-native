import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../config/colors";

function AppButton({ title, onPress, color = "primary", style, textStyle }) {
  return (
    <View
      style={{ width: "100%", justifyContent: "center", alignItems: "center" }}
    >
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: colors[color],
          },
          style,
        ]}
        onPress={onPress}
      >
        <Text style={[styles.text, textStyle]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "capitalize",
  },
});

export default AppButton;
