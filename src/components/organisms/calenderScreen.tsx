import React, { useState } from "react";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { StyleSheet, View } from "react-native";

const CalenderScreen = () => {
  const [selected, setSelected] = useState("");

  return (
    <Calendar
      onDayPress={(day) => {
        setSelected(day.dateString);
      }}
      markedDates={{
        [selected]: {
          selected: true,
          disableTouchEvent: true,
          selectedDotColor: "orange",
        },
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default CalenderScreen;
