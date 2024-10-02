import React, { useState } from "react";
import { Image, Modal, StyleSheet, Text, View } from "react-native";
import HeadLine from "../components/molecules/headeLine";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import AppButton from "../components/atoms/confirmationButton";
import { useNavigation } from "@react-navigation/native";

const MedicineOrder = () => {
  const navigation: any = useNavigation();
  return (
    <View style={{ flexGrow: 1 }}>
      <Image
        style={styles.tinyLogo}
        source={require("../assets/backgroundImage1.png")}
      />
      <Image
        style={styles.tinyLogo2}
        source={require("../assets/backgroundImage2.png")}
      />
      <HeadLine title="Medicine Orders" />
      <View
        style={{
          backgroundColor: "#C6EFE5",
          borderRadius: 150,
          height: hp(26.4),
          width: wp(57.1),
          alignItems: "center",
          justifyContent: "center",
          marginHorizontal: wp(21.9),
          marginTop: hp(10.9),
        }}
      >
        <Image source={require("../assets/medicineOrderPics.png")} />
      </View>
      <Text
        style={{
          textAlign: "center",
          fontSize: 20,
          fontWeight: "500",
          marginTop: hp(5),
          marginBottom: hp(1.6),
        }}
      >
        No orders placed yet
      </Text>
      <Text
        style={{
          textAlign: "center",
          fontSize: 14,
          fontWeight: "regular",
          marginBottom: hp(4.4),
          color: "#677294",
        }}
      >
        Place your first order now.
      </Text>
      <View style={{ width: wp(72), margin: "auto" }}>
        <AppButton
          text="Order medicines"
          onPress={() => navigation.navigate("location")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    position: "absolute",
  },
  tinyLogo2: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
});

export default MedicineOrder;
