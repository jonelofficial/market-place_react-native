import { Image, ImageBackground, StyleSheet, View } from "react-native";
import AppButton from "../components/AppButton";

import Screen from "../components/Screen";
import defaultStyle from "../config/styles";
import routes from "../navigation/routes";

function WelcomeScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <ImageBackground
        source={require("../assets/ImgBg.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.overlay} />

        <Image
          resizeMode="contain"
          style={styles.logo}
          source={require("../assets/logo.png")}
        />
        <View style={styles.container}>
          <AppButton
            title="Login"
            color="black"
            textStyle={styles.loginText}
            onPress={() => navigation.navigate("Login")}
          />
          <AppButton
            title="Register"
            style={styles.register}
            textStyle={styles.registerText}
            onPress={() => navigation.navigate(routes.REGISTER)}
          />
        </View>
      </ImageBackground>
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    paddingTop: 0,
  },
  logo: {
    marginTop: "20%",
    height: 91,
    width: "100%",
  },
  image: {
    flex: 1,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    opacity: 0.8,
    backgroundColor: defaultStyle.colors.black,
  },
  container: {
    justifyContent: "flex-end",
    flex: 1,
    marginHorizontal: 10,
  },
  loginText: {
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  registerText: {
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  register: {
    backgroundColor: "#4ecdc4",
  },
});

export default WelcomeScreen;
