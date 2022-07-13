import React from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { Image } from "react-native-expo-image-cache";

import colors from "../config/colors";
import AppHeading from "./AppHeading";
import AppText from "./AppText";
import Spacer from "./Spacer";

function Card({ imageUrl, title, subTitle, onPress, thumbnailUrl }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image
          tint="light"
          style={styles.image}
          preview={{ uri: thumbnailUrl }}
          uri={imageUrl}
        />
        <View style={styles.details}>
          <AppHeading style={styles.title} size="h3">
            {title}
          </AppHeading>
          <Spacer style={{ height: 10 }} />
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 20,
    overflow: "hidden",
    marginVertical: 10,
    marginHorizontal: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    padding: 15,
  },
  title: {
    textTransform: "capitalize",
  },
  subTitle: {
    fontWeight: "bold",
    color: colors.primary,
  },
});
export default Card;
