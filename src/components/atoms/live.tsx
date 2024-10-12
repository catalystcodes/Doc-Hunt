import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Dot from "./dot";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const Live = () => {
  return (
    <View
      style={{
        backgroundColor: "red",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 7,
        paddingVertical: 5,
        borderRadius: 3,
        columnGap: hp(1),
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          height: hp(0.7),
          width: wp(1.5),
          borderRadius: 50,
        }}
      ></View>
      <Text style={{ fontSize: 7, fontWeight: "500", color: "white" }}>
        Live
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Live;
