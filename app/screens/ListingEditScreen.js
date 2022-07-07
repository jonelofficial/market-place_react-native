import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import AppButton from "../components/AppButton";
import FormField from "../components/forms/FormField";
import FormImagePicker from "../components/forms/FormImagePicker";
import FormPicker from "../components/forms/FormPicker";
import SubmitButton from "../components/forms/SubmitButton";
import Screen from "../components/Screen";
import { listingEditSchema } from "../config/schema";
import useLocation from "../hooks/useLocation";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Camera", value: 3 },
];

function ListingEditScreen(props) {
  const location = useLocation();

  const methods = useForm({
    resolver: yupResolver(listingEditSchema),
    mode: "onTouched",
    defaultValues: {
      title: "",
      price: "",
      description: "",
      category: null,
      images: [],
    },
  });

  const [category, setCategory] = useState();

  const { reset } = methods;

  const onSubmit = (data) => {
    console.log(location);
    console.log(data);
    setCategory(null);
    reset();
  };

  return (
    <Screen>
      <FormProvider {...methods} onSubmit={onSubmit}>
        <FormImagePicker name="images" />

        <FormField name="title" placeholder="Title" maxLength={255} />

        <FormField
          name="price"
          placeholder="Price"
          keyboardType="numeric"
          maxLength={8}
        />

        <FormPicker
          items={categories}
          placeholder="Category"
          name="category"
          selectedItem={category}
          onSelectItem={(item) => setCategory(item)}
        />

        <FormField
          name="description"
          placeholder="Description"
          maxLength={255}
          numberOfLines={3}
          multiline
          textStyle={{ textAlignVertical: "top" }}
        />

        <SubmitButton title="Post" />
        <AppButton title="Back" color="black" />
      </FormProvider>
    </Screen>
  );
}

export default ListingEditScreen;
