import React, { Fragment } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import HeadLine from "../components/molecules/headeLine";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { settingMenuItems } from "../constantData";
import { RootStackParams } from "../utils/types";
import { useNavigation } from "@react-navigation/native";
import SettingCard from "../components/molecules/settingCard";
import Toggle from "../components/molecules/toggle";
import DropDown from "../components/molecules/dropDown";
import KeyboardAvoidView from "../components/molecules/KeyboardAvoidView";
import LanguageDropDown from "../components/molecules/dropDown";
import CurrencyDropDown from "../components/molecules/currencyDropDown";
import LinkedAccountDropDown from "../components/molecules/linkedAccountDropDown";

const Setting = () => {
  const navigation: any = useNavigation();

  const handleSideNav = (path: keyof RootStackParams) => {
    navigation.navigate(path);
  };
  return (
    <KeyboardAvoidView>
      <Image
        style={styles.tinyLogo}
        source={require("../assets/backgroundImage1.png")}
      />
      <Image
        style={styles.tinyLogo2}
        source={require("../assets/backgroundImage2.png")}
      />
      <HeadLine title="Settings" />
      <View style={{ paddingHorizontal: wp(5.3) }}>
        <Text style={styles.header1}>Account Settings </Text>
        {settingMenuItems.map((items, itemMenu) => (
          <Fragment key={itemMenu}>
            <Pressable onPress={() => handleSideNav(items.path)}>
              <SettingCard icon={items.icon} title={items.title} />
            </Pressable>
          </Fragment>
        ))}
        <Text style={styles.header2}>More Options</Text>
        <View style={styles.view1}>
          <Text style={styles.text}>Text Messages </Text>
          <Toggle />
        </View>
        <View style={styles.view1}>
          <Text style={styles.text}>Phone Call </Text>
          <Toggle />
        </View>
        <View style={styles.view1}>
          <Text style={styles.text}>Languages </Text>
          <LanguageDropDown />
        </View>
        <View style={styles.view1}>
          <Text style={styles.text}>Currency </Text>
          <CurrencyDropDown />
        </View>
        <View style={styles.view1}>
          <Text style={styles.text}>Linked accounts </Text>
          <LinkedAccountDropDown />
        </View>
      </View>
    </KeyboardAvoidView>
  );
};

export default Setting;

const styles = StyleSheet.create({
  tinyLogo: {
    position: "absolute",
  },
  tinyLogo2: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  header1: {
    marginBottom: hp(1.3),
    fontSize: 16,
    fontWeight: "500",
    color: "#677294",
  },
  header2: {
    marginBottom: hp(1.3),
    fontSize: 16,
    fontWeight: "500",
    color: "#677294",
    marginTop: hp(3.3),
  },
  view1: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: hp(2.2),
    borderBottomColor: "rgba(0, 230, 71, 0.3)",
    borderBottomWidth: 0.3,
  },
  text: {
    flexGrow: 1,
    fontSize: 16,
    fontWeight: "200",
    color: "#677294",
  },
});
