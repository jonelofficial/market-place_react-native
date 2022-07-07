import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";
import routes from "../navigation/routes";

const listings = [
  {
    id: 1,
    title: "J1 High Mocha",
    subTitle: "$100",
    image: require("../assets/products/Mocha.jpg"),
  },
  {
    id: 2,
    title: "J1 High X off-white",
    subTitle: "$200",
    image: require("../assets/products/Offwhite.jpg"),
  },
  {
    id: 3,
    title: "J1 High Retro Court Purple",
    subTitle: "$300",
    image: require("../assets/products/Purple.jpg"),
  },
];

function ListingScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listings) => listings.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.subTitle}
            image={item.image}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    paddingHorizontal: 10,
  },
});

export default ListingScreen;
