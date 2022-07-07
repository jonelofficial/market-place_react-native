import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import AppButton from "../components/AppButton";
import FormField from "../components/forms/FormField";
import SubmitButton from "../components/forms/SubmitButton";
import Screen from "../components/Screen";
import colors from "../config/colors";
import { registerSchema } from "../config/schema";

function RegisterScreen(props) {
  const methods = useForm({
    resolver: yupResolver(registerSchema),
    mode: "onTouched",
  });

  const { reset } = methods;

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <View style={styles.screen}>
      <FormProvider {...methods} onSubmit={onSubmit}>
        <FormField name="name" icon="account" placeholder="Name" />
        <FormField name="email" icon="email" placeholder="Email" />
        <FormField name="password" icon="lock" placeholder="Password" />

        <SubmitButton title="Register" />
        <AppButton title="back" color="black" />
      </FormProvider>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: { backgroundColor: colors.white, flex: 1, padding: 10 },
});

export default RegisterScreen;
