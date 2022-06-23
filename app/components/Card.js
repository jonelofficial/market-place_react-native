import React from "react";
import { Image, StyleSheet, View } from "react-native";
import colors from "../config/colors";
import AppHeading from "./AppHeading";
import AppText from "./AppText";
import Screen from "./Screen";
import Spacer from "./Spacer";

function Card({ image, title, subTitle }) {
  return (
    <Screen>
      <View style={styles.container}>
        <Image style={styles.image} source={image} />
        <View style={styles.details}>
          <AppHeading style={styles.title} size="h3">
            {title}
          </AppHeading>
          <Spacer style={{ height: 10 }} />
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 20,
    overflow: "hidden",
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
