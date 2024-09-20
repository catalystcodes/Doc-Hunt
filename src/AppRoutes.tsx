import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { RootStackParams } from "./utils/types";
import { SafeAreaProvider } from "react-native-safe-area-context";

//screen
import SignUp from "./screens/signUp";
import Login from "./screens/logIn";
import Home from "./screens/home";
import AppBottomTabs from "./components/molecules/bottomTab";

const Stack = createStackNavigator<RootStackParams>();

const AppRoutes = () => {
  const { Navigator, Screen } = Stack;
  return (
    <View style={[styles.container, styles.statusBarHeight]}>
      <StatusBar backgroundColor={"black"} />
      <Navigator
        screenOptions={{ headerShown: false }}
        // initialRouteName="bottomTab"
      >
        <Screen name="signUp" component={SignUp} />
        <Screen name="login" component={Login} />
        <Screen name="bottomTab" component={AppBottomTabs} />
        {/* <Screen name="homepage" component={Home} /> */}
      </Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  statusBarHeight: {},
});

export default AppRoutes;
