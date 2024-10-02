import React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  heightPercentageToDP,
  heightPercentageToDP as hp,
  widthPercentageToDP,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const MedicineOrderCard = ({
  text,
  source,
}: {
  text: string;
  source: ImageSourcePropType;
}) => {
  return (
    <View style={styles.whole}>
      <Image source={source} />
      <Text
        style={{
          textAlign: "center",
          fontSize: 14,
          fontWeight: "500",
          color: "#677294",
          marginTop: heightPercentageToDP(1.6),
        }}
      >
        {text}
      </Text>
    </View>
  );
};

export default MedicineOrderCard;

const styles = StyleSheet.create({
  whole: {
    height: hp(19.7),
    width: wp(42.6),
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: widthPercentageToDP(3.7),
  },
});
