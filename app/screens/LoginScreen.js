import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

import FormCheckbox from "../components/forms/FormCheckbox";
import AppHeading from "../components/AppHeading";
import AppText from "../components/AppText";
import FormField from "../components/forms/FormField";
import SubmitButton from "../components/forms/SubmitButton";
import Icon from "../components/Icon";
import Screen from "../components/Screen";
import Spacer from "../components/Spacer";
import { loginSchema } from "../config/schema";
import defaultStyle from "../config/styles";

function LoginScreen(props) {
  const methods = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onTouched",
    defaultValues: {
      email: "",
      password: "",
      rememberLogin: false,
    },
  });

  const { reset } = methods;

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.keyboardViewContainer}
      enabled={false}
    >
      <Screen style={styles.screen}>
        <View style={styles.container}>
          <AppHeading style={{ color: defaultStyle.colors.black }}>
            Welcome
          </AppHeading>
          <AppText style={styles.subtext}>
            Don't have an account?{" "}
            <AppText style={styles.subtextLink}>Register now</AppText>
          </AppText>

          <View style={styles.form}>
            <FormProvider {...methods} onSubmit={onSubmit}>
              <AppText style={styles.subtext}>Email</AppText>
              <FormField
                name="email"
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                textContentType="emailAddress" // for Ios
              />

              <Spacer style={{ height: 20 }} />

              <AppText style={styles.subtext}>Password</AppText>
              <FormField
                name="password"
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="password" // for Ios
                secureTextEntry
              />

              <Spacer style={{ height: 20 }} />

              <View style={styles.checkboxWrapper}>
                <FormCheckbox title="Remember me" name="rememberLogin" />
                <View style={styles.forgotPassword}>
                  <AppText style={styles.subtext}>Forgot password</AppText>
                </View>
              </View>

              <Spacer />

              <SubmitButton
                title="Login"
                color="black"
                style={{
                  width: "70%",
                  elevation: 2,
                }}
              />
            </FormProvider>

            <Spacer />

            <AppText style={styles.subtextDark}>or Login with</AppText>

            <Spacer style={{ height: 20 }} />

            <View style={styles.socWrapper}>
              <TouchableOpacity>
                <View
                  style={{
                    backgroundColor: "#4267B2",
                    paddingHorizontal: 8,
                    paddingVertical: 3,
                    borderRadius: 20,
                    marginHorizontal: 15,
                    elevation: 2,
                  }}
                >
                  <Icon
                    name="facebook"
                    backgroundColor="transparent"
                    iconColor="#fff"
                    size={30}
                  />
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View
                  style={{
                    backgroundColor: "#00acee",
                    paddingHorizontal: 8,
                    paddingVertical: 3,
                    borderRadius: 20,
                    marginHorizontal: 15,
                    elevation: 2,
                  }}
                >
                  <Icon
                    name="twitter"
                    backgroundColor="transparent"
                    iconColor="#fff"
                    size={30}
                  />
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View
                  style={{
                    backgroundColor: "#db4a39",
                    paddingHorizontal: 8,
                    paddingVertical: 3,
                    borderRadius: 20,
                    marginHorizontal: 15,
                    elevation: 2,
                  }}
                >
                  <Icon
                    name="google-plus"
                    backgroundColor="transparent"
                    iconColor="#fff"
                    size={30}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Screen>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  screen: {
    paddingTop: 0,
  },
  keyboardViewContainer: {
    flex: 1,
  },
  container: {
    position: "absolute",
    bottom: 0,
    height: "70%",
    width: "100%",
    backgroundColor: "#fff",
    padding: 30,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  form: {
    marginVertical: 30,
  },
  input: {
    backgroundColor: "transparent",
    marginHorizontal: 0,
    padding: 2,
    borderColor: defaultStyle.colors.medium,
    borderBottomWidth: 2,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderRadius: 0,
  },
  logo: {
    marginTop: "20%",
    height: 91,
    width: "100%",
  },
  image: {
    flex: 1,
  },
  heading: {
    color: defaultStyle.colors.black,
    fontWeight: "600",
  },
  subtext: {
    color: defaultStyle.colors.medium,
    fontSize: 15,
    fontWeight: "600",
  },
  subtextDark: {
    fontSize: 16,
    textAlign: "center",
  },
  subtextLink: {
    color: defaultStyle.colors.secondary,
    fontSize: 15,
    fontStyle: "italic",
    fontWeight: "bold",
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
  checkboxWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  socWrapper: {
    flexDirection: "row",
    alignSelf: "center",
  },
});

export default LoginScreen;
