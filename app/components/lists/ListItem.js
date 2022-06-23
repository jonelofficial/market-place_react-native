import React from "react";
import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import {
  Swipeable,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import colors from "../../config/colors";
import AppHeading from "../AppHeading";
import AppText from "../AppText";

function ListItem({
  renderRightActions,
  IconComponent,
  image,
  title,
  subTitle,
  onPress,
}) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
          <View style={styles.container}>
            {IconComponent}
            {image && <Image style={styles.image} source={image} />}
            <View style={styles.details}>
              <AppHeading style={styles.title} size="h3">
                {title}
              </AppHeading>
              {subTitle && (
                <AppText style={styles.subTitle}>{subTitle}</AppText>
              )}
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.white,
    padding: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  details: {
    justifyContent: "center",
    marginLeft: 10,
  },
  title: { textTransform: "capitalize" },
  subTitle: { color: colors.medium },
});
export default ListItem;
