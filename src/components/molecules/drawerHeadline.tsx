import React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import CallIcon from "../atoms/icons/callIcon";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const DrawerHeadline = ({
  userAvatar,
  userName,
  userPhoneNumber,
}: {
  userAvatar: ImageSourcePropType;
  userName: string;
  userPhoneNumber: number | string;
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: wp(5.3),
        justifyContent: "space-between",
      }}
    >
      <Image source={userAvatar} />
      <View>
        <Text>{userName}</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <CallIcon />
          <Text>{userPhoneNumber}</Text>
        </View>
      </View>
      <View style={styles.cancel}>
        <Text style={{ color: "white", fontSize: 18 }}>X</Text>
      </View>
    </View>
  );
};

export default DrawerHeadline;
const styles = StyleSheet.create({
  cancel: {
    backgroundColor: "#FF0000",
    borderRadius: 50,
    height: hp(3.7),
    width: wp(8),
    justifyContent: "center",
    alignItems: "center",
  },
});
