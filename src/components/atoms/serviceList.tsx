import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const ServiceList = ({
  number,
  serviceList,
}: {
  number: number;
  serviceList: string;
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        columnGap: wp(1),
        paddingVertical: hp(2.1),
        // backgroundColor: "green",
      }}
    >
      <Text style={{ color: "#0EB67A", fontSize: 14, fontWeight: "500" }}>
        {number}.
      </Text>
      <Text style={{ color: "#677294", fontSize: 13 }}>{serviceList}.</Text>
    </View>
  );
};

export default ServiceList;

const styles = StyleSheet.create({});
