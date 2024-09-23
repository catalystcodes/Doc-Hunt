import React from "react";
import { StyleSheet, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUp from "../../screens/signUp";
import { RootStackParams } from "../../utils/types";
import Home from "../../screens/home";
import Appointment from "../../screens/appointment";

// screen;

const Stack = createStackNavigator<RootStackParams>();

const HomeStack = () => {
  const { Navigator, Screen } = Stack;

  return (
    <View style={styles.container}>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="homepage" component={Home} />
        <Screen name="appointmentPage" component={Appointment} />
      </Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});

export default HomeStack;
