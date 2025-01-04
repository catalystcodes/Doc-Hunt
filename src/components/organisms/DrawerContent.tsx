import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Alert,
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
import { useAuthContext } from "../../context";

const DrawerContent = (props: any) => {
  const navigation: any = useNavigation();
  const { userInfo: user, clearAuthData } = useAuthContext();

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

  // const logoutConfirmationAlert = () => {
  //   Alert.alert(
  //     "Logout",
  //     "Are you sure you want to logout?",
  //     [
  //       {
  //         text: "Cancel",
  //         style: "destructive",
  //       },
  //       {
  //         text: "Logout",
  //         onPress: () => {
  //           clearAuthData();
  //         },
  //       },
  //     ],
  //     { cancelable: true }
  //   );
  // };

  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require("../../assets/drawerImage.png")}
        style={styles.drawerImage}
      />
      <DrawerContentScrollView
        {...props}
        style={{
          display: "flex",
        }}
      >
        {userInfo.map(
          (
            favorite: { userName: string; userPhoneNumber: string | number },
            favoriteIndex: React.Key | null | undefined
          ) => (
            <Fragment key={favoriteIndex}>
              <DrawerHeadline
                userAvatar={require("../../assets/userAvater.png")}
                userName={favorite.userName}
                userPhoneNumber={favorite.userPhoneNumber}
              />
            </Fragment>
          )
        )}
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
              setIsModalVisible(true);
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
      <Modal transparent={true} animationType="fade" visible={isModalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.subModalContainer}>
            <Text style={styles.logOut}>Log Out</Text>
            <Text style={styles.logConfirm}>
              Are you sure you what to logout?
            </Text>
            <View style={styles.okNCancel}>
              <TouchableOpacity onPress={toggleModal}>
                <Text style={styles.text}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => clearAuthData()}>
                <Text style={styles.text}>Ok</Text>
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
  drawerImage: {
    position: "absolute",
    left: 293,
    top: 165,
  },
});
