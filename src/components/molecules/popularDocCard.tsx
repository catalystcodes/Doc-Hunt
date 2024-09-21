import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const PopularDocCard = ({
  title,
  areaOfSpecialist,
  doctorImage,
  rateImage,
}: {
  title: string;
  areaOfSpecialist: string;
  doctorImage: any;
  rateImage: any;
}) => {
  return (
    <View style={styles.whole}>
      <Image source={doctorImage} />
      <Text
        style={{
          textAlign: "center",
          fontSize: 18,
          fontWeight: "700",
          marginTop: hp(1.7),
          marginBottom: hp(1.2),
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          color: "#677294",
          fontSize: 12,
          fontWeight: "light",
          textAlign: "center",
          marginBottom: hp(1.7),
        }}
      >
        {areaOfSpecialist}
      </Text>
      <Image style={{ marginLeft: wp(14.7) }} source={rateImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  whole: {
    height: hp(32.5),
    width: wp(50.7),
    backgroundColor: "white",
    borderRadius: 6,
    marginLeft: wp(4),
  },
});

export default PopularDocCard;
