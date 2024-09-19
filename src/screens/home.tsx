import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import InputText from "../components/atoms/inputText";
import SearchArea from "../components/atoms/searchArea";

const Home = () => {
  return (
    <View style={{ flexGrow: 1 }}>
      <View>
        <Image
          source={require("../assets/backgroundImage3.png")}
          style={styles.tinyLogo}
        />
        <Image
          source={require("../assets/backgroundImage1.png")}
          style={styles.tinyLogo1}
        />
        <Image
          source={require("../assets/backgroundImage2.png")}
          style={styles.tinyLogo2}
        />
      </View>
      <View style={styles.header}>
        <View>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "light" }}>
            Hi Handwerker!
          </Text>
          <Text style={{ color: "white", fontSize: 25, fontWeight: "bold" }}>
            Find Your Doctor
          </Text>
        </View>
        <Image source={require("../assets/avater.png")} />
      </View>
      <SearchArea />
    </View>
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    position: "absolute",
    width: "100%",
    // borderRadius: 12,
  },
  tinyLogo1: {
    position: "absolute",
    top: 145,
  },
  tinyLogo2: {
    flexGrow: 1,
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  header: {
    paddingHorizontal: wp(5.3),
    marginTop: hp(5.6),
    marginBottom: hp(1.5),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
});

export default Home;
