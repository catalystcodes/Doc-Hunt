import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import FavIcon from "../atoms/icons/favIcon";
import BigFavIcon from "../atoms/icons/bigFavIcon";

const DocCategoryCard = () => {
  return (
    <View style={styles.whole}>
      <View style={styles.subWhole}>
        <Image source={require("../../assets/Dr. Pediatrician.png")} />
        <View>
          <View style={styles.subWhole1}>
            <Text>Dr. Pediatrician</Text>
            <BigFavIcon />
          </View>
          <Text>Specialist Cardiologist </Text>
          <View style={styles.subWhole1}>
            <Image source={require("../../assets/star.png")} />
            <Text>
              24<Text>(2474 views)</Text>
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  whole: {
    backgroundColor: "white",
    height: hp(12.8),
    width: wp(89.3),
    borderRadius: 8,
    paddingVertical: hp(1.4),
    paddingHorizontal: wp(2.7),
  },
  subWhole: {
    flexDirection: "row",
    alignItems: "center",
  },
  subWhole1: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default DocCategoryCard;
