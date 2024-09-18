import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Button from "../components/atoms/button";
import Google from "../components/atoms/google";
import Facebook from "../components/atoms/facebook";
import ConfirmationButton from "../components/atoms/confirmationButton";

const Login = () => {
  return (
    <View style={styles.whole}>
      <View style={styles.intro}>
        <Text style={styles.header}>Join us to start searching</Text>
        <Text style={styles.subHeader}>
          You can search course, apply course and find scholarship for abroad
          studies
        </Text>
      </View>
      <View style={styles.subIntro}>
        <View style={styles.button}>
          <Button text="Google" Icon={<Google />} />
          <Button text="Facebook" Icon={<Facebook />} />
        </View>
      </View>
      <ConfirmationButton text="Sign up" />
    </View>
  );
};

const styles = StyleSheet.create({
  whole: {
    flex: 1,
  },
  header: {
    marginTop: hp("15.4"),
    marginBottom: hp("1.8"),
    fontSize: 24,
    fontWeight: "medium",
    textAlign: "center",
  },
  subHeader: {
    fontSize: 14,
    fontWeight: "medium",
    textAlign: "center",
    color: "#677294",
  },
  intro: {
    paddingHorizontal: wp("11.5"),
    marginBottom: hp("8.3"),
  },
  subIntro: {
    paddingHorizontal: wp("5.3"),
  },

  button: {
    flexDirection: "row",
  },
});

export default Login;
