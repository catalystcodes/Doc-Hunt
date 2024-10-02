import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  Modal,
  TouchableOpacity,
} from "react-native";
import React, { Fragment, useEffect, useState } from "react";
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
  const navigation: any = useNavigation();

  const handleSideNav = (path: keyof RootStackParams) => {
    navigation.navigate(path);
  };

  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  useEffect(() => {
    setIsModalVisible(false);
  }, [navigation]);

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
            onPress={() => setIsModalVisible(true)}
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
      <Modal transparent={true} animationType="fade" visible={isModalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.subModalContainer}>
            <Text style={styles.logOut}>Log Out</Text>
            <Text style={styles.logConfirm}>
              Are you sure you what to logout?
            </Text>
            <View style={styles.okNCancel}>
              <Text style={styles.text} onPress={toggleModal}>
                Cancel
              </Text>
              <TouchableOpacity onPress={toggleModal}>
                <Text
                  onPress={() => navigation.navigate("login")}
                  style={styles.text}
                >
                  Ok
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
  modalContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    flexGrow: 1,
  },
  subModalContainer: {
    backgroundColor: "white",
    width: wp(89.3),
    height: hp(20.6),
    borderRadius: 8,
    paddingHorizontal: wp(7.5),
    paddingVertical: hp(3),
    marginTop: hp(41),
    marginLeft: wp(5.3),
  },
  logOut: {
    fontSize: 26,
    fontWeight: "500",
    marginBottom: hp(0.5),
  },
  logConfirm: {
    fontSize: 16,
    fontWeight: "regular",
    color: "#677294",
  },
  okNCancel: {
    flexDirection: "row",
    justifyContent: "flex-end",
    columnGap: wp(8.3),
    marginTop: hp(4.2),
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
    color: "#0EBE7F",
  },
});
