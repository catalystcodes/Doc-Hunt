import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import FavIcon from "../atoms/icons/favIcon";
import RateIcon from "../atoms/icons/rateIcon";

const FeatureDoc = ({
  name,
  payPerHour,
  docAvatar,
  rating,
}: {
  name: string;
  payPerHour: string;
  docAvatar: any;
  rating: any;
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <View style={styles.whole}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <FavIcon
          isSelected={isFavorite}
          onPress={() => setIsFavorite(!isFavorite)}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          <RateIcon />
          <Text style={{ fontSize: 9, fontWeight: "600" }}>{rating}</Text>
        </View>
      </View>
      <Image style={{ marginLeft: wp(2.9) }} source={docAvatar} />
      <Text
        style={{
          fontSize: 12,
          fontWeight: "700",
          textAlign: "center",
          marginTop: hp(1.2),
          marginBottom: hp(0.4),
        }}
      >
        {name}
      </Text>
      <Text style={{ fontSize: 9, fontWeight: "light", textAlign: "center" }}>
        {payPerHour}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  whole: {
    height: hp(16),
    width: wp(25.6),
    paddingVertical: hp(1.1),
    paddingHorizontal: wp(2.7),
    backgroundColor: "white",
    borderRadius: 6,
    marginLeft: wp(4),
  },
});

export default FeatureDoc;
