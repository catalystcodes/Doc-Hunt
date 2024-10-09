import React from "react";
import { StyleSheet, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUp from "../../screens/signUp";
import { MainStackParams } from "../../utils/types";
import Home from "../../screens/home";
import Appointment from "../../screens/appointment";
import AppointmentSchedule from "../../screens/appointmentSchedule";
import DocDetails from "../../screens/docDetails";
import FavoriteDocPage from "../../screens/favoriteDocPage";

// screen;

const Stack = createStackNavigator<MainStackParams>();

const FavStack = () => {
  const { Navigator, Screen } = Stack;

  return (
    <View style={styles.container}>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="favoriteDocPage" component={FavoriteDocPage} />
        <Screen name="appointmentPage" component={Appointment} />
        <Screen
          name="appointmentSchedulePage"
          component={AppointmentSchedule}
        />
        <Screen name="docdetails" component={DocDetails} />
      </Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});

export default FavStack;
