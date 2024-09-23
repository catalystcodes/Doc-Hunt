import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const PatientImage = ({
  patientType,
  patientPhoto,
}: {
  patientType: string;
  patientPhoto: any;
}) => {
  return (
    <View style={{ width: wp(26.7), height: hp(18.3) }}>
      <Image source={patientPhoto} />
      <Text
        style={{
          textAlign: "center",
          marginTop: 7,
          color: "#677294",
          fontSize: 14,
          fontWeight: "regular",
        }}
      >
        {patientType}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default PatientImage;
