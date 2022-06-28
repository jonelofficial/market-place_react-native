import { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Button, Image } from "react-native";

import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";
import Card from "./app/components/Card";
import ListItem from "./app/components/lists/ListItem";
import ListItemDeleteAction from "./app/components/lists/ListItemDeleteAction";
import Screen from "./app/components/Screen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ListingScreen from "./app/screens/ListingScreen";
import LoginScreen from "./app/screens/LoginScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";

export default function App() {
  const [imageUris, setImageUris] = useState([]);
  const handleAdd = (uri) => {
    setImageUris([...imageUris, uri]);
  };
  const handleRemove = (uri) => {
    setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  };
  return (
    <Screen>
      {/* <LoginScreen /> */}
      {/* <WelcomeScreen /> */}
      {/* <ViewImageScreen /> */}
      {/* <ListingScreen /> */}
      {/* <ListingDetailsScreen /> */}
      {/* <AccountScreen /> */}
      {/* <MessagesScreen /> */}

      {/* <ListingEditScreen /> */}
      {/* <RegisterScreen /> */}
      {/* <Button title="Select Image" onPress={selectImage} />
      <Image
        source={{ uri: imageUri }}
        style={{ width: "100%", height: 300 }}
      /> */}
      {/* <ImageInput
        imageUri={imageUri}
        onChangeImage={(uri) => setImageUri(uri)}
      /> */}
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImag={handleRemove}
      />
    </Screen>
  );
}
