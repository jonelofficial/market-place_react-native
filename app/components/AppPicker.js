import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { Controller } from "react-hook-form";
import colors from "../config/colors";
import defaultStyle from "../config/styles";
import AppText from "./AppText";
import PickerItem from "./PickerItem";

function AppPicker({
  icon,
  style,
  placeholder,
  items,
  onSelectItem,
  selectedItem,
  name,
  control,
  errors,
  ...otherProps
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setIsOpen(!isOpen)}>
        <View
          style={[styles.container, style, errors[name] && styles.errorBox]}
        >
          {icon && (
            <MaterialCommunityIcons
              style={styles.icon}
              name={icon}
              size={20}
              color={defaultStyle.colors.medium}
            />
          )}

          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}

          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyle.colors.medium}
            style={{
              transform: isOpen
                ? [{ rotate: "-180deg" }]
                : [{ rotate: "0deg" }],
            }}
          />
        </View>
      </TouchableWithoutFeedback>
      {errors[name] && (
        <AppText style={styles.error}>{errors[name].message}</AppText>
      )}
      <Modal visible={isOpen} animationType="slide">
        <Button onPress={() => setIsOpen(!isOpen)} title="Close" />
        <View>
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <>
                <Controller
                  name={name}
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <PickerItem
                      label={item.label}
                      onPress={() => {
                        onSelectItem(item);
                        setIsOpen(!isOpen);
                        onChange(item);
                      }}
                      onBlur={onBlur}
                      value={value}
                    />
                  )}
                />
              </>
            )}
          />
        </View>
      </Modal>
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
  text: {
    flex: 1,
  },
  placeholder: {
    color: colors.medium,
    flex: 1,
  },
  error: {
    color: defaultStyle.colors.danger,
    fontSize: 14,
    marginLeft: 15,
  },
  errorBox: {
    borderWidth: 2,
    borderColor: defaultStyle.colors.danger,
  },
});

export default AppPicker;
