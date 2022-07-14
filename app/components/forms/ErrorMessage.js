import React from "react";
import { StyleSheet } from "react-native";
import colors from "../../config/colors";
import AppText from "../AppText";

function ErrorMessage({ message, style }) {
  return <AppText style={[styles.error, style]}>{message}</AppText>;
}

const styles = StyleSheet.create({
  error: {
    color: colors.danger,
    fontSize: 14,
    marginLeft: 15,
  },
});

export default ErrorMessage;
