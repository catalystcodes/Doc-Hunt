import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Button from "../components/atoms/button";
import Google from "../components/atoms/google";
import Facebook from "../components/atoms/facebook";
import ConfirmationButton from "../components/atoms/confirmationButton";
import KeyboardAvoidView from "../components/molecules/KeyboardAvoidView";
import InputText from "../components/atoms/inputText";
import Checkbox from "expo-checkbox";

const Login = () => {
  const [isChecked, setChecked] = useState(false);

  return (
    <KeyboardAvoidView>
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
          <View style={styles.inputSection}>
            <InputText placeholder="Name" />
            <InputText placeholder="Email" />
            <InputText placeholder="Password" />
          </View>
          <View style={styles.teamsAndCondition}>
            <Checkbox
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? "#677294" : undefined}
            />
            <Text style={styles.teamsText}>
              I agree with the Terms of Service & Privacy Policy
            </Text>
          </View>
        </View>
        <ConfirmationButton text="Sign up" />
        <Text>Have an account? Log in</Text>
      </View>
    </KeyboardAvoidView>
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
    marginBottom: hp("4.2"),
  },
  checkbox: {
    borderRadius: 50,
    marginRight: wp(2.9),
  },
  teamsText: {
    color: "#677294",
  },
  inputSection: {
    marginBottom: hp(1.7),
  },
  teamsAndCondition: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Login;
