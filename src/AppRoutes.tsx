import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { RootStackParams } from "./utils/types";

//screen
import SignUp from "./screens/signUp";
import Login from "./screens/logIn";

const Stack = createStackNavigator<RootStackParams>();

const AppRoutes = () => {
  const { Navigator, Screen } = Stack;
  return (
    <View style={[styles.container, styles.statusBarHeight]}>
      <Navigator
        screenOptions={{ headerShown: false }}
        // initialRouteName=""
      >
        <Screen name="signUp" component={SignUp} />
        <Screen name="login" component={Login} />
      </Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    // backgroundColor: "#fff",
  },
  statusBarHeight: {
    paddingTop: hp(5.5),
  },
});

export default AppRoutes;
