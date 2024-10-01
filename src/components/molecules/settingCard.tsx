import React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import ArrowLeftSetting from "../atoms/arrowLeftSetting";

const SettingCard = ({
  title,
  icon,
}: {
  title: string;
  icon: ImageSourcePropType;
}) => {
  return (
    <View style={styles.whole}>
      <Image source={icon} />
      <Text
        style={{
          flexGrow: 1,
          marginLeft: wp(5.3),
          fontSize: 16,
          fontWeight: "light",
          color: "#677294",
        }}
      >
        {title}
      </Text>
      <Image source={require("../../assets/arrowRightPics2.png")} />
    </View>
  );
};

export default SettingCard;
const styles = StyleSheet.create({
  whole: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: hp(1.2),
    borderBottomColor: "#0EBE7F",
    borderBottomWidth: 0.3,
  },
});
