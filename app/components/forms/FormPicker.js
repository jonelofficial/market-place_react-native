import { useState } from "react";

import { useFormContext } from "react-hook-form";
import AppPicker from "../AppPicker";

function FormPicker({
  icon,
  style,
  placeholder,
  items,
  name,
  onSelectItem,
  selectedItem,
  ...otherProps
}) {
  const {
    formState: { errors },
    control,
  } = useFormContext();
  return (
    <>
      <AppPicker
        selectedItem={selectedItem}
        onSelectItem={onSelectItem}
        items={items}
        name={name}
        placeholder={placeholder}
        control={control}
        errors={errors}
      />
    </>
  );
}

export default FormPicker;
