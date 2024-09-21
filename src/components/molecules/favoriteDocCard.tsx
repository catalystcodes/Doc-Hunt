import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import FavIcon from "../atoms/icons/favIcon";
import FavBigIcon from "../atoms/icons/favBigIcon";

const FavoriteDocCard = ({
  docAvatar,
  title,
  areaofspecialist,
}: {
  docAvatar: any;
  title: string;
  areaofspecialist: string;
}) => {
  return (
    <View style={styles.whole}>
      <View style={styles.header}>
        <Text></Text>
        <FavBigIcon />
      </View>
      <Image source={docAvatar} style={{ marginLeft: wp(10.1) }} />
      <Text
        style={{
          textAlign: "center",
          marginTop: hp(1.4),
          marginBottom: hp(0.5),
          fontWeight: "500",
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          textAlign: "center",
          color: "#0EBE7E",
        }}
      >
        {areaofspecialist}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  whole: {
    height: hp(22.2),
    width: wp(42.7),
    backgroundColor: "white",
    borderRadius: 6,
    marginLeft: wp(4),
    marginBottom: hp(1.8),

    // paddingHorizontal: wp(6.9),
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: hp(1.2),
    marginRight: wp(2.6),
  },
});

export default FavoriteDocCard;
