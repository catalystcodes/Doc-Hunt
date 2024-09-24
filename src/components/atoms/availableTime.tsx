import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

const AvailableTime = ({ time }: { time: string }) => {
  return (
    <View style={styles.circle}>
      <Text style={{ fontSize: 13, textAlign: "center", color: "#0EBE7F" }}>
        {time}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    justifyContent: "center",
    height: heightPercentageToDP(7.4),
    width: widthPercentageToDP(16),
    borderRadius: 100,
    paddingHorizontal: widthPercentageToDP(2.9),
    paddingVertical: heightPercentageToDP(1.8),
    backgroundColor: "#CAF3E5",
  },
});

export default AvailableTime;
