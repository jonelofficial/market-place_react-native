import Constants from "expo-constants";

const setting = {
  dev: {
    apiUrl: "http://10.10.8.22:9000/api",
  },
  staging: {
    apiUrl: "http://10.10.8.22:9000/api",
  },
  prod: {
    apiUrl: "http://10.10.8.22:9000/api",
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return setting.dev;
  if (Constants.manifest.releaseChannel === "staging ") return setting.staging;
  return setting.prod;
};

export default getCurrentSettings();
