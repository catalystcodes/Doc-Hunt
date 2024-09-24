import React, { ReactNode, useState } from "react";
import { StyleSheet, View } from "react-native";
import HeadLine from "../components/molecules/headeLine";
import CalendarScreen from "../components/organisms/calenderScreen";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const AppointmentSchedule = () => {
  return (
    <View>
      <HeadLine title="Appointment" />
      <View style={{ paddingHorizontal: wp(5.3) }}>
        <CalendarScreen />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default AppointmentSchedule;
