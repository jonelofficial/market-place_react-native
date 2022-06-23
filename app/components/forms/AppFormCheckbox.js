import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import CheckBox from "expo-checkbox";

import AppText from "../AppText";
import defaultStyle from "../../config/styles";
import { Controller, useFormContext } from "react-hook-form";

function AppFormCheckbox({ title, name }) {
  const [isChecked, setChecked] = useState(false);

  const {
    control,
    formState: { errors },
    value,
  } = useFormContext();
  return (
    <View style={styles.checkboxWrap}>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value: checkValue } }) => (
          <CheckBox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={() => {
              setChecked(!isChecked), onChange(!isChecked);
            }}
            color={isChecked ? defaultStyle.colors.black : undefined}
          />
        )}
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

export default AppFormCheckbox;
