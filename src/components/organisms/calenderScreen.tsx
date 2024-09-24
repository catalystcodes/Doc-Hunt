import React, { useState } from "react";
import {
  Calendar,
  CalendarList,
  Agenda,
  LocaleConfig,
} from "react-native-calendars";
import { StyleSheet, Text, View } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

LocaleConfig.locales["fr"] = {
  monthNames: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  monthNamesShort: [
    "Jan.",
    "Feb.",
    "Mar.",
    "April.",
    "May.",
    "Jun.",
    "July.",
    "Aug.",
    "Sept.",
    "Oct.",
    "Nov.",
    "Dec.",
  ],
  dayNames: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  dayNamesShort: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
  today: "'Today",
};

LocaleConfig.defaultLocale = "fr";

const CalenderScreen = () => {
  const [selected, setSelected] = useState("");

  return (
    <Calendar
      //   customHeaderTitle={StyleShee}
      //   headerStyle={styles.headerStyle}
      // renderHeader={(props) => {
      //   console.log({ props });
      //   return (
      //     <View
      //       style={{
      //         backgroundColor: "red",
      //         position: "absolute",
      //         top: 0,
      //         left: 0,
      //         width: "100%",
      //         height: 100,
      //         zIndex: 50,
      //       }}
      //     >
      //       <Text>sdsdsdsds</Text>
      //     </View>
      //   );
      // }}
      hideArrows
      hideExtraDays
      onDayPress={(day) => {
        setSelected(day.dateString);
      }}
      markedDates={{
        [selected]: {
          selected: true,
          disableTouchEvent: true,
        },
      }}
      current={"2021-02-17"}
      style={styles.calenderStyle}
      theme={{
        backgroundColor: "#EDEDED",
        textSectionTitleColor: "#b6c1cd",
        selectedDayBackgroundColor: "#0EBE7F",
        dayTextColor: "#2d4150",
        selectedDayTextColor: "#EDEDED",
        weekVerticalMargin: 0,
      }}
    />
  );
};

export default CalenderScreen;

const styles = StyleSheet.create({
  calenderStyle: {
    height: hp(34.5),
    borderRadius: 9,
  },
  headerStyle: {
    // backgroundColor: "#0EBE7F",
    // color: "white",
    padding: 0,
  },
  customHeaderTitle: {
    backgroundColor: "red",
  },
});
