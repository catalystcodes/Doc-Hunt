import React, { Fragment } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
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

const Setting = () => {
  const navigation = useNavigation();

  const handleSideNav = (path: keyof RootStackParams) => {
    navigation.navigate(path);
  };
  return (
    <>
      <HeadLine title="Settings" />
      <View style={{ paddingHorizontal: wp(5.3) }}>
        <Text style={styles.header}>Account Settings </Text>
        {settingMenuItems.map((items, itemMenu) => (
          <Fragment key={itemMenu}>
            <Pressable onPress={() => handleSideNav(items.path)}>
              <SettingCard icon={items.icon} title={items.title} />
            </Pressable>
          </Fragment>
        ))}
        <Text style={styles.header}>More Options</Text>
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
          <Text>Drop Down</Text>
        </View>
        <View style={styles.view1}>
          <Text style={styles.text}>Currency </Text>
          <Text> Dropo Down</Text>
        </View>
        <View style={styles.view1}>
          <Text style={styles.text}>Linked accounts </Text>
          <Text> Dropo Down</Text>
        </View>
      </View>
    </>
  );
};

export default Setting;

const styles = StyleSheet.create({
  header: {
    marginBottom: hp(1.3),
  },
  view1: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: hp(2.2),
    borderBottomColor: "#0EBE7F",
    borderBottomWidth: 0.3,
  },
  text: {
    flexGrow: 1,
    fontSize: 16,
    fontWeight: "light",
  },
});
