import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { heightPercentageToDP } from "react-native-responsive-screen";

const HelpCenterCard = ({ text }: { text: string }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        marginBottom: heightPercentageToDP(4.3),
        alignItems: "center",
      }}
    >
      <Text
        style={{
          flexGrow: 1,
          fontSize: 18,
          fontWeight: "200",
          color: "#677294",
        }}
      >
        {text}
      </Text>
      <Image source={require("../../assets/arrowRightPics2.png")} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default HelpCenterCard;
