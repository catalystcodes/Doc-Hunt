import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import BigFavIcon from "../atoms/icons/bigFavIcon";

const MyDoctorCard = () => {
  return (
    <View style={styles.whole}>
      <View style={styles.subWhole1}>
        <Image source={require("../../assets/Dr Tranguilli.png")} />
        <View>
          <Text>Dr. Tranquilli</Text>
          <Text>Specilist medicine</Text>
          <Text>6 Years experience </Text>
          <View style={styles.subWhole2}>
            <Image source={require("../../assets/dot.png")} />
            <Text>87%</Text>
          </View>
          <View style={styles.subWhole2}>
            <Image source={require("../../assets/dot.png")} />
            <Text>69 Patient Stories</Text>
          </View>
        </View>
        <BigFavIcon />
      </View>
    </View>
  );
};

export default MyDoctorCard;

const styles = StyleSheet.create({
  whole: {
    width: wp(89.3),
    height: hp(20.9),
    backgroundColor: "white",
    borderRadius: 8,
    paddingHorizontal: wp(5.3),
    // paddingVertical: hp(),
  },
  subWhole1: {
    flexDirection: "row",
    // alignItems: "center",
  },
  subWhole2: {
    flexDirection: "row",
    alignItems: "center",
  },
  subWhole3: {},
});
