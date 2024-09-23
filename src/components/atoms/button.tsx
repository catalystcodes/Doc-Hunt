import React, { ReactElement, ReactNode, ReactSVGElement } from "react";
import {
  ButtonProps,
  Image,
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
type AppButtonProps = PressableProps & { Icon: ReactNode; text: string };

const OAuthButton = (props: AppButtonProps) => {
  const { Icon, text, ...otherProps } = props;
  return (
    <Pressable {...otherProps} style={[styles.socialButton]}>
      {Icon}
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  socialButton: {
    flexDirection: "row",
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 12,
    height: hp(6.7),
    columnGap: wp("3.2"),
  },
  text: {
    color: "#677294",
  },
});

export default OAuthButton;
