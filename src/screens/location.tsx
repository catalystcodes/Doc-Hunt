import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import HeadLine from "../components/molecules/headeLine";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import AppButton from "../components/atoms/confirmationButton";
import { useNavigation } from "@react-navigation/native";

const Location = () => {
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
      <HeadLine title="Enable Location Services" />
      <View
        style={{
          backgroundColor: "#C6EFE5",
          borderRadius: 150,
          height: hp(26.4),
          width: wp(57.1),
          alignItems: "center",
          justifyContent: "center",
          marginHorizontal: wp(21.9),
          marginTop: hp(11.6),
        }}
      >
        <Image source={require("../assets/locationPics.png")} />
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
        Location
      </Text>
      <Text
        style={{
          textAlign: "center",
          fontSize: 14,
          fontWeight: "regular",
          marginBottom: hp(4.4),
          color: "#677294",
          paddingHorizontal: wp(12),
        }}
      >
        Your location services are switched off. Please enable location, to help
        us serve better.
      </Text>
      <View style={{ width: wp(72), margin: "auto" }}>
        <AppButton
          text="Enable Location"
          onPress={() => navigation.navigate("medicineOrderMainPage")}
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

export default Location;
