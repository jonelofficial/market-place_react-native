import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Controller, useFormContext } from "react-hook-form";

import defaultStyle from "../../config/styles";
import AppText from "../../components/AppText";

function AppFormField({ name, icon, style, ...otherProps }) {
  const {
    formState: { errors },
    control,
  } = useFormContext();
  return (
    <>
      <View style={[styles.container, style, errors[name] && styles.errorBox]}>
        {icon && (
          <MaterialCommunityIcons
            style={styles.icon}
            name={icon}
            size={20}
            color={defaultStyle.colors.medium}
          />
        )}

        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={defaultStyle.text}
              {...otherProps}
            />
          )}
        />
      </View>
      {errors[name] && (
        <AppText style={styles.error}>{errors[name].message}</AppText>
      )}
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyle.colors.light,
    padding: 15,
    marginVertical: 10,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "transparent",
  },
  icon: {
    marginRight: 10,
  },
  error: {
    color: defaultStyle.colors.danger,
    fontSize: 14,
    marginLeft: 15,
  },
  errorBox: {
    borderWidth: 2,
    borderColor: defaultStyle.colors.danger,
  },
});

export default AppFormField;
