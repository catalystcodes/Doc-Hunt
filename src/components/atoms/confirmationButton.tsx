import React, { ReactElement, ReactNode, ReactSVGElement } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const AppButton = ({
  text,
  Icon,
  onPress,
}: {
  text: string;
  Icon?: ReactNode;
  onPress?: () => void;
}) => {
  return (
    <Pressable style={styles.socialButton} onPress={onPress}>
      {Icon}
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  socialButton: {
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#0EBE7F",
    borderRadius: 12,
    paddingVertical: hp("2.2"),
    width: "100%",
  },

  text: {
    color: "white",
    fontWeight: "700",
    // fontSize: 18,
  },
});

export default AppButton;
