import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import HeadLine from "../components/molecules/headeLine";
import InputText from "../components/atoms/inputText";
import SearchArea from "../components/atoms/searchArea";

const MyDoctors = () => {
  return (
    <View style={{ flexGrow: 1 }}>
      <Image
        source={require("../assets/backgroundImage1.png")}
        style={styles.tinyLogo1}
      />
      <Image
        source={require("../assets/backgroundImage2.png")}
        style={styles.tinyLogo2}
      />
      <HeadLine title="My Doctors" />
      <View>
        <SearchArea placeholder="Search" />
      </View>
    </View>
  );
};

export default MyDoctors;

const styles = StyleSheet.create({
  tinyLogo1: {
    position: "absolute",
  },
  tinyLogo2: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
});
