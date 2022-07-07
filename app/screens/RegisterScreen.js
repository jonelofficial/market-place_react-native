import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import AppButton from "../components/AppButton";
import FormField from "../components/forms/FormField";
import SubmitButton from "../components/forms/SubmitButton";
import Screen from "../components/Screen";
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
    <Screen>
      <FormProvider {...methods} onSubmit={onSubmit}>
        <FormField name="name" icon="account" placeholder="Name" />
        <FormField name="email" icon="email" placeholder="Email" />
        <FormField name="password" icon="lock" placeholder="Password" />

        <SubmitButton title="Register" />
        <AppButton title="back" color="black" />
      </FormProvider>
    </Screen>
  );
}

export default RegisterScreen;
