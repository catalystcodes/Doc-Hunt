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
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  socialButton: {
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#0EBE7F",
    borderRadius: 12,
    paddingHorizontal: wp("30.7"),
    paddingVertical: hp("2.2"),
    width: wp("78.7"),
    marginLeft: wp(10.7),
    // marginTop: hp(6.7),
  },

  view: {},
  text: {
    color: "white",
    fontWeight: "700",
    // fontSize: 18,
  },
});

export default ConfirmationButton;
