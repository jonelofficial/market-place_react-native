import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { StyleSheet } from "react-native";

import AppButton from "../components/AppButton";
import FormField from "../components/forms/FormField";
import FormImagePicker from "../components/forms/FormImagePicker";
import FormPicker from "../components/forms/FormPicker";
import SubmitButton from "../components/forms/SubmitButton";
import Screen from "../components/Screen";
import { listingEditSchema } from "../config/schema";
import listingApi from "../api/listings";
import useLocation from "../hooks/useLocation";
import routes from "../navigation/routes";
import UploadScreen from "./UploadScreen";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Camera", value: 3 },
];

function ListingEditScreen({ navigation }) {
  const location = useLocation(); // Get location a custom hook
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  // Method for fom
  const methods = useForm({
    resolver: yupResolver(listingEditSchema),
    mode: "onSubmit",
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
  // End

  // Handle submit on form
  const onSubmit = async (listing) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await listingApi.addListing(
      { ...listing, location },
      (progress) => setProgress(progress)
    );

    if (!result.ok) {
      setUploadVisible(false);
      return alert("Could not save the listings: Max image file 3");
    } else {
      setCategory(null);
      reset();
    }
  };
  // End

  return (
    <Screen style={styles.screen}>
      <UploadScreen
        onDone={() => setUploadVisible(false)}
        progress={progress}
        visible={uploadVisible}
      />
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
const styles = StyleSheet.create({
  screen: {
    padding: 10,
  },
});

export default ListingEditScreen;
