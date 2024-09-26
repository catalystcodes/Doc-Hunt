import React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ArrowRight from "../atoms/icons/arrowRight";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const DrawerCards = ({
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
          marginLeft: wp(6.1),
          fontSize: 16,
          color: "white",
          flexGrow: 1,
        }}
      >
        {title}
      </Text>
      <View>
        <Image source={require("../../assets/arrowRightpics.png")} />
      </View>
    </View>
  );
};

export default DrawerCards;
const styles = StyleSheet.create({
  whole: {
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "blue",
    height: hp(7.5),
    width: wp(56.5),
  },
});
