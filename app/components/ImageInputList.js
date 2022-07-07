import { useEffect, useRef } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import ImageInput from "./ImageInput";

function ImageInputList({ imageUris, onAddImage, onRemoveImage, value }) {
  const scrollView = useRef();

  return (
    <View>
      <ScrollView
        horizontal
        ref={scrollView}
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        <View style={styles.container}>
          {imageUris.map((uri) => (
            <View key={uri}>
              <ImageInput
                imageUri={uri}
                onChangeImage={() => onRemoveImage(uri, value)}
              />
            </View>
          ))}
          <ImageInput onChangeImage={(uri) => onAddImage(uri, value)} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});

export default ImageInputList;
