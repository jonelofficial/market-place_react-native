import React from "react";
import { Image, StyleSheet, View } from "react-native";
import AppHeading from "../components/AppHeading";
import AppText from "../components/AppText";
import ListItem from "../components/lists/ListItem";
import Screen from "../components/Screen";
import Spacer from "../components/Spacer";
import colors from "../config/colors";

function ListingDetailsScreen(props) {
  return (
    <Screen>
      <Image
        style={styles.image}
        source={require("../assets/products/Offwhite.jpg")}
      />
      <View style={styles.details}>
        <AppHeading style={styles.title}>J1 high x off-white</AppHeading>
        <Spacer style={{ height: 10 }} />
        <AppText style={styles.subTitle}>$100</AppText>
        <Spacer style={{ height: 20 }} />

        <View style={styles.userDetails}>
          <ListItem
            title="jonel ignacio"
            subTitle="5 listings"
            image={require("../assets/profile.jpg")}
          />
        </View>
      </View>
    </Screen>
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
