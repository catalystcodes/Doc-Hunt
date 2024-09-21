import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import ArrowBack from "../components/atoms/icons/arrowback";
import SearchArea from "../components/atoms/searchArea";
import KeyboardAvoidView from "../components/molecules/KeyboardAvoidView";

const FavoriteDocPage = () => {
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
      <KeyboardAvoidView>
        <View style={styles.header}>
          <ArrowBack />
          <Text
            style={{ marginLeft: wp(5.1), fontSize: 18, fontWeight: "700" }}
          >
            Favorite Doctors
          </Text>
        </View>
        <SearchArea placeholder="Search" />
      </KeyboardAvoidView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: hp(5.6),
    marginBottom: hp(4.7),
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp(5.3),
  },
  tinyLogo: {
    position: "absolute",
  },
  tinyLogo2: {
    flexGrow: 1,
    position: "absolute",
    bottom: 0,
    right: 0,
  },
});

export default FavoriteDocPage;
