import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, TextInput, View } from "react-native";

import defaultStyle from "../config/styles";

function AppTextInput({ icon, style, ...otherProps }) {
  return (
    <>
      <View style={[styles.container, style]}>
        {icon && (
          <MaterialCommunityIcons
            style={styles.icon}
            name={icon}
            size={20}
            color={defaultStyle.colors.medium}
          />
        )}
        <TextInput style={defaultStyle.text} {...otherProps} />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyle.colors.light,
    padding: 15,
    marginVertical: 10,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "transparent",
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
