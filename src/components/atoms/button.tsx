import React, { ReactElement, ReactNode, ReactSVGElement } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const Button = ({ text, Icon }: { text: string; Icon?: ReactNode }) => {
  return (
    <View>
      <Pressable style={styles.socialButton}>
        {Icon}
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  socialButton: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 12,
    paddingHorizontal: wp("8"),
    paddingVertical: hp("2.1"),
    marginLeft: wp("4"),
  },
  text: {
    marginLeft: wp("3.2"),
    color: "#677294",
  },
});

export default Button;
