import React, { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import ImageInputList from "../ImageInputList";
import ErrorMessage from "./ErrorMessage";

function FormImagePicker({ name }) {
  const {
    formState: { errors },
    control,
    setValue,
    clearErrors,
  } = useFormContext();

  const handleAdd = (uri, value) => {
    setValue(name, [...value, uri]);
    clearErrors(name);
  };
  const handleRemove = (uri, value) => {
    setValue(
      name,
      value.filter((imageUri) => imageUri !== uri)
    );
  };
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { value } }) => (
          <ImageInputList
            imageUris={value}
            onAddImage={handleAdd}
            onRemoveImage={handleRemove}
            value={value}
          />
        )}
      />
      {errors[name] && <ErrorMessage message={errors[name].message} />}
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default FormImagePicker;
