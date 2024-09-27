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
import { RootStackParams } from "../../utils/types";

const DrawerContent = (props: any) => {
  const navigation = useNavigation();

  const handleSideNav = (path: keyof RootStackParams) => {
    navigation.navigate(path);
  };
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
              userName={favorite.userName}
              userPhoneNumber={favorite.userPhoneNumber}
            />
          </Fragment>
        ))}
        <View style={{ marginTop: hp(8.9), marginLeft: wp(5.3) }}>
          {drawerItems.map((favorite: any, favoriteIndex) => (
            <Pressable
              onPress={() => handleSideNav(favorite.path)}
              key={favoriteIndex}
            >
              <DrawerCards title={favorite.name} icon={favorite.icon} />
            </Pressable>
          ))}
          <Pressable
            style={{ flexDirection: "row", marginTop: hp(9.4) }}
            onPress={() => {
              navigation.navigate("login");
            }}
          >
            <Image source={require("../../assets/logoutpics.png")} />
            <Text
              style={{
                marginLeft: wp(6.1),
                fontSize: 16,
                color: "white",
              }}
            >
              LogOut
            </Text>
          </Pressable>
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
