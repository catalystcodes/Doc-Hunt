import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Dots from "../atoms/icons/3dots";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { TouchableOpacity } from "react-native-gesture-handler";

const AllRecordCard = ({
  date,
  name,
  numberOfPrescription,
}: {
  date: string;
  name: string;
  numberOfPrescription: number;
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        columnGap: wp(3.2),
        paddingHorizontal: wp(2.3),
        paddingVertical: hp(1.3),
        borderRadius: 7,
        marginBottom: hp(1.2),
      }}
    >
      <View>
        <TouchableOpacity
          style={{
            // paddingHorizontal: wp(3.7),
            // paddingVertical: hp(3.5),
            height: hp(7.4),
            width: wp(14.7),
            borderRadius: 6,
            backgroundColor: "#0EBE7F",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 14,
              fontWeight: "500",
              width: wp(8),
              textAlign: "center",
            }}
          >
            {date}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            // paddingHorizontal: wp(3.7),
            // paddingVertical: hp(3.5),
            height: hp(2.7),
            width: wp(14.7),
            borderRadius: 6,
            backgroundColor: "#B2E9D5",
            justifyContent: "center",
            alignItems: "center",
            marginTop: hp(0.6),
          }}
        >
          <Text
            style={{
              fontSize: 12,
              color: "#0EBE7F",
              fontWeight: "500",
            }}
          >
            NEW
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexGrow: 1 }}>
        <Text style={{ fontSize: 14, fontWeight: "500" }}>
          Records added by you
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: "light",
            marginTop: hp(0.6),
            marginBottom: hp(1.4),
            color: "#0EBE7F",
          }}
        >
          Record for {name}
        </Text>
        <Text style={{ fontSize: 12, fontWeight: "light", color: "#677294" }}>
          {numberOfPrescription} Prescription
        </Text>
      </View>
      <Dots />
    </View>
  );
};

const styles = StyleSheet.create({});

export default AllRecordCard;
