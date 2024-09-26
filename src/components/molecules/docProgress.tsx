import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const DocProgress = ({
  running,
  ongoing,
  patient,
}: {
  running: number;
  ongoing: number;
  patient: number;
}) => {
  return (
    <View style={styles.whole}>
      <View style={styles.subWhole}>
        <Text style={styles.text}>{running}</Text>
        <Text style={{ color: "#677294" }}>Running</Text>
      </View>
      <View style={styles.subWhole}>
        <Text style={styles.text}>{ongoing}</Text>
        <Text style={{ color: "#677294" }}>Ongoing</Text>
      </View>
      <View style={styles.subWhole}>
        <Text style={styles.text}>{patient}</Text>
        <Text style={{ color: "#677294" }}>Patient</Text>
      </View>
    </View>
  );
};

export default DocProgress;
const styles = StyleSheet.create({
  whole: {
    width: wp(81.3),
    height: hp(10.3),
    backgroundColor: "white",
    flexDirection: "row",
    columnGap: wp(2.1),
    alignItems: "center",
    borderRadius: 10,
    marginHorizontal: wp(9.3),
    paddingHorizontal: wp(2.7),
  },
  subWhole: {
    width: wp(24),
    height: hp(7.9),
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    alignItems: "center",
    borderRadius: 10,
    paddingVertical: hp(1.4),
  },
  text: {
    color: "#333333",
    fontWeight: "500",
    fontSize: 18,
    marginBottom: hp(0.5),
  },
});
