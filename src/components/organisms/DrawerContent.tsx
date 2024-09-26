import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import React, { Fragment } from "react";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { DrawerActions } from "@react-navigation/native";
import { drawerItems, userInfo } from "../../constantData";
import DrawerHeadline from "../molecules/drawerHeadline";
import DrawerCards from "../molecules/drawerCards";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const DrawerContent = (props: any) => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        style={{
          display: "flex",
        }}
      >
        {userInfo.map((favorite, favoriteIndex) => (
          <Fragment key={favoriteIndex}>
            <DrawerHeadline
              userAvatar={require("../../assets/userAvater.png")}
              //   userAvatar={favorite.userAvatar}
              userName={favorite.userName}
              userPhoneNumber={favorite.userPhoneNumber}
            />
          </Fragment>
        ))}
        <View style={{ marginTop: hp(8.9), marginLeft: wp(5.3) }}>
          {drawerItems.map((favorite, favoriteIndex) => (
            <Fragment key={favoriteIndex}>
              <DrawerCards title={favorite.name} icon={favorite.icon} />
            </Fragment>
          ))}
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  signOutText: {
    textAlign: "center",
    marginTop: 326,
    fontWeight: "700",
    fontSize: 16,
    color: "#7D57F1",
  },
});
