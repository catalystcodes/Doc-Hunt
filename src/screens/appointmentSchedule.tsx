import React, { ReactNode, useState } from "react";
import { StyleSheet, View } from "react-native";
import HeadLine from "../components/molecules/headeLine";
import CalendarScreen from "../components/organisms/calenderScreen";

const AppointmentSchedule = () => {
  return (
    <View>
      <HeadLine title="Appointment" />
      <CalendarScreen />
    </View>
  );
};

const styles = StyleSheet.create({});

export default AppointmentSchedule;
