import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import AppButton from "../components/AppButton";

import AppFormField from "../components/forms/AppFormField";
import AppFormPicker from "../components/forms/AppFormPicker";
import SubmitButton from "../components/forms/SubmitButton";
import Screen from "../components/Screen";
import { listingEditSchema } from "../config/schema";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Camera", value: 3 },
];

function ListingEditScreen(props) {
  const methods = useForm({
    resolver: yupResolver(listingEditSchema),
    mode: "onTouched",
  });

  const [category, setCategory] = useState();

  const { reset } = methods;

  const onSubmit = (data) => {
    console.log(data);
    setCategory(null);
    reset();
  };

  return (
    <Screen>
      <FormProvider {...methods} onSubmit={onSubmit}>
        <AppFormField name="title" placeholder="Title" maxLength={255} />

        <AppFormField
          name="price"
          placeholder="Price"
          keyboardType="numeric"
          maxLength={8}
        />

        <AppFormPicker
          items={categories}
          placeholder="Category"
          name="category"
          selectedItem={category}
          onSelectItem={(item) => setCategory(item)}
        />

        <AppFormField
          name="description"
          placeholder="Description"
          maxLength={255}
          numberOfLines={3}
          multiline
        />

        <SubmitButton title="Post" />
        <AppButton title="Back" color="black" />
      </FormProvider>
    </Screen>
  );
}

export default ListingEditScreen;
