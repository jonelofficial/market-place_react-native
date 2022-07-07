import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Controller, useFormContext } from "react-hook-form";

import defaultStyle from "../../config/styles";
import ErrorMessage from "./ErrorMessage";

function FormField({ name, icon, style, textStyle, ...otherProps }) {
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
              style={[defaultStyle.text, textStyle]}
              {...otherProps}
            />
          )}
        />
      </View>
      {errors[name] && <ErrorMessage message={errors[name].message} />}
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
  errorBox: {
    borderWidth: 2,
    borderColor: defaultStyle.colors.danger,
  },
});

export default FormField;
