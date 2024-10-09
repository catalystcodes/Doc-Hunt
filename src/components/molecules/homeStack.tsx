import React from "react";
import { StyleSheet, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUp from "../../screens/signUp";
import { HomeStackParams } from "../../utils/types";
import Home from "../../screens/home";
import Appointment from "../../screens/appointment";
import AppointmentSchedule from "../../screens/appointmentSchedule";
import DocDetails from "../../screens/docDetails";
import Location from "../../screens/location";
import MedicineOrderPage from "../../screens/medicineOrderPage";
import AddRecord from "../../screens/addRecord";

// screen;
const Stack = createStackNavigator<HomeStackParams>();

const HomeStack = () => {
  const { Navigator, Screen } = Stack;

  return (
    <View style={styles.container}>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="homepage" component={Home} />
        <Screen name="appointmentPage" component={Appointment} />
        <Screen
          name="appointmentSchedulePage"
          component={AppointmentSchedule}
        />
        <Screen name="docdetails" component={DocDetails} />
        <Screen name="location" component={Location} />
        <Screen name="medicineOrderMainPage" component={MedicineOrderPage} />
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
