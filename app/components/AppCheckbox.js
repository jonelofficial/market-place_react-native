import CheckBox from "expo-checkbox";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

import defaultStyle from "../config/styles";
import AppText from "./AppText";

function AppCheckbox({ title, name }) {
  const [isChecked, setChecked] = useState(false);

  return (
    <View style={styles.checkboxWrap}>
      <CheckBox
        style={styles.checkbox}
        value={isChecked}
        onValueChange={() => {
          setChecked(!isChecked);
        }}
        color={isChecked ? defaultStyle.colors.black : undefined}
      />

      <AppText style={styles.subtext}>{title}</AppText>
    </View>
  );
}
const styles = StyleSheet.create({
  checkboxWrap: {
    flexDirection: "row",
    width: "50%",
    alignItems: "center",
  },
  checkbox: {
    borderRadius: 50,
    width: 15,
    height: 15,
    marginRight: 7,
  },
  subtext: {
    color: defaultStyle.colors.medium,
    fontSize: 15,
    fontWeight: "600",
  },
});

export default AppCheckbox;
