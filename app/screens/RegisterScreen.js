import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";

import { registerSchema } from "../config/schema";
import AppButton from "../components/AppButton";
import FormField from "../components/forms/FormField";
import SubmitButton from "../components/forms/SubmitButton";
import colors from "../config/colors";
import regApi from "../api/register";
import useAuth from "../auth/useAuth";
import auth from "../api/auth";
import ActivityIndicator from "../components/ActivityIndicator";

function RegisterScreen({ navigation }) {
  const { logIn } = useAuth();
  const [loading, setLoading] = useState(false);

  const methods = useForm({
    resolver: yupResolver(registerSchema),
    mode: "onTouched",
  });

  const onSubmit = async (userInfo) => {
    setLoading(true);
    const result = await regApi.register(userInfo);
    if (!result.ok) {
      if (result.data) {
        alert(result.data.error);
      } else {
        alert("An unexpected error: ", result);
      }
      setLoading(false);
      return;
    }

    const { data: authToken } = await auth.login(
      userInfo.email,
      userInfo.password
    );

    logIn(authToken);
    setLoading(false);
  };
  return (
    <>
      <ActivityIndicator visible={loading} />
      <View style={styles.screen}>
        <FormProvider {...methods} onSubmit={onSubmit}>
          <FormField name="name" icon="account" placeholder="Name" />
          <FormField name="email" icon="email" placeholder="Email" />
          <FormField
            name="password"
            icon="lock"
            placeholder="Password"
            secureTextEntry
          />

          <SubmitButton title="Register" isLoading={loading} />
        </FormProvider>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  screen: { backgroundColor: colors.white, flex: 1, padding: 10 },
});

export default RegisterScreen;
