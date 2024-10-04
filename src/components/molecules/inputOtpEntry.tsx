import React from "react";
import { StyleSheet, View } from "react-native";
import { OtpInput } from "react-native-otp-entry";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const InputOtpEntry = () => {
  return (
    <OtpInput
      numberOfDigits={4}
      focusColor="green"
      focusStickBlinkingDuration={500}
      onTextChange={(text) => console.log(text)}
      onFilled={(text) => console.log(`OTP is ${text}`)}
      textInputProps={{
        accessibilityLabel: "One-Time Password",
      }}
      theme={{
        containerStyle: styles.container,
        pinCodeContainerStyle: styles.pinCodeContainer,
        pinCodeTextStyle: styles.pinCodeText,
        focusStickStyle: styles.focusStick,
        focusedPinCodeContainerStyle: styles.activePinCodeContainer,
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp(71.2),
    marginLeft: wp(9.1),
  },
  pinCodeContainer: {
    width: wp(14.4),
  },
  pinCodeText: {
    color: "#0EBE7F",
    fontSize: 26,
    fontWeight: "bold",
  },
  focusStick: {},
  activePinCodeContainer: {},
});

export default InputOtpEntry;
