import React from "react";
import { StyleSheet, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParams } from "./utils/types";

//screen
import SignUp from "./screens/signUp";
import Login from "./screens/logIn";
import AppBottomTabs from "./components/molecules/bottomTab";
import PopularDoc from "./screens/popularDoc";

const Stack = createStackNavigator<RootStackParams>();

const AppRoutes = () => {
  const { Navigator, Screen } = Stack;

  return (
    <View style={styles.container}>
      <Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="signUp"
      >
        <Screen name="signUp" component={SignUp} />
        <Screen name="login" component={Login} />
        <Screen name="bottomTab" component={AppBottomTabs} />
        <Screen name="popularDocFullPage" component={PopularDoc} />
      </Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});

export default AppRoutes;
