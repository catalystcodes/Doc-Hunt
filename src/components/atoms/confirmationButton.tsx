import React, { ReactElement, ReactNode, ReactSVGElement } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const ConfirmationButton = ({
  text,
  Icon,
}: {
  text: string;
  Icon?: ReactNode;
}) => {
  return (
    <View style={styles.view}>
      <Pressable style={styles.socialButton}>
        {Icon}
        <Text>{text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  socialButton: {
    flexDirection: "row",
    backgroundColor: "#0EBE7F",
    borderRadius: 12,
    paddingHorizontal: wp("30.7"),
    paddingVertical: hp("2.2"),
    marginLeft: wp("4"),
  },

  view: {
    margin: "auto",
    width: wp("78.7"),
  },
});

export default ConfirmationButton;
