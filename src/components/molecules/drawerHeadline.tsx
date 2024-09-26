import React from "react";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import CallIcon from "../atoms/icons/callIcon";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { DrawerActions, useNavigation } from "@react-navigation/native";

const DrawerHeadline = ({
  userAvatar,
  userName,
  userPhoneNumber,
}: {
  userAvatar: ImageSourcePropType;
  userName: string;
  userPhoneNumber: number | string;
}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: wp(5.3),
      }}
    >
      <Image source={userAvatar} />
      <View style={styles.separator1}></View>
      <View>
        <Text style={{ color: "white", fontSize: 16, fontWeight: "500" }}>
          {userName}
        </Text>
        <View style={{ flexDirection: "row", marginTop: hp(0.7) }}>
          <CallIcon />
          <Text style={{ color: "white", fontSize: 12 }}>
            {userPhoneNumber}
          </Text>
        </View>
      </View>
      <View style={styles.separator2}></View>

      <Pressable
        style={styles.cancel}
        onPress={() => {
          navigation.dispatch(DrawerActions.closeDrawer());
        }}
      >
        <Text style={{ color: "white", fontSize: 18 }}>X</Text>
      </Pressable>
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
  separator1: {
    paddingHorizontal: wp(3.1),
  },
  separator2: {
    paddingHorizontal: wp(16.6),
  },
});
