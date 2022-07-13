import React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "react-native-expo-image-cache";

import AppHeading from "../components/AppHeading";
import AppText from "../components/AppText";
import ListItem from "../components/lists/ListItem";
import Screen from "../components/Screen";
import Spacer from "../components/Spacer";
import colors from "../config/colors";

function ListingDetailsScreen({ route }) {
  const item = route.params;
  return (
    <>
      <Image
        style={styles.image}
        preview={{ uri: item.images[0].thumbnailUrl }}
        uri={item.images[0].url}
        tint="light"
      />
      <View style={styles.details}>
        <AppHeading style={styles.title}>{item.title}</AppHeading>
        <Spacer style={{ height: 10 }} />
        <AppText style={styles.subTitle}>{item.price}</AppText>
        <Spacer style={{ height: 20 }} />

        <View style={styles.userDetails}>
          <ListItem
            title="jonel ignacio"
            subTitle="5 listings"
            image={require("../assets/profile.jpg")}
          />
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  image: { height: 300, width: "100%" },
  details: { padding: 15 },
  title: { textTransform: "capitalize" },
  subTitle: {
    textTransform: "capitalize",
    fontSize: 20,
    fontWeight: "bold",
    color: colors.primary,
  },
});

export default ListingDetailsScreen;
