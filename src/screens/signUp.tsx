import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Button from "../components/atoms/button";
import Google from "../components/atoms/icons/google";
import Facebook from "../components/atoms/icons/facebook";
import ConfirmationButton from "../components/atoms/confirmationButton";
import KeyboardAvoidView from "../components/molecules/KeyboardAvoidView";
import InputText from "../components/atoms/inputText";
import Checkbox from "expo-checkbox";
import OAuthButton from "../components/atoms/button";
import AppButton from "../components/atoms/confirmationButton";

const SignUp = ({ navigation }: any) => {
  const [isChecked, setChecked] = useState(false);

  return (
    <KeyboardAvoidView>
      <View style={styles.whole}>
        <View style={styles.absoluteWrapper}>
          <Image
            style={styles.tinyLogo}
            source={require("../assets/backgroundImage1.png")}
          />
          <Image
            style={styles.tinyLogo2}
            source={require("../assets/backgroundImage2.png")}
          />
        </View>
        <View style={styles.intro}>
          <Text style={styles.header}>Join us to start searching</Text>
          <Text style={styles.subHeader}>
            You can search course, apply course and find scholarship for abroad
            studies
          </Text>
        </View>
        <View style={styles.subIntro}>
          <View style={styles.button}>
            <OAuthButton text="Google" Icon={<Google />} />
            <OAuthButton text="Facebook" Icon={<Facebook />} />
          </View>
          <View style={styles.inputSection}>
            <InputText placeholder="Name" />
            <InputText placeholder="Email" keyboardType="email-address" />
            <InputText placeholder="Password" type="password" />
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
        <View style={{ width: wp(73.7), marginHorizontal: "auto" }}>
          <AppButton text="Sign up" />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: hp(2.1),
          }}
        >
          <Text style={styles.doYouHaveAcc}>Have an account? </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.replace("login");
            }}
          >
            <Text style={styles.doYouHaveAcc}>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  whole: {
    flex: 1,
    paddingTop: hp(3.3),
    paddingHorizontal: wp(5.3),
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
    // paddingHorizontal: wp("5.3"),
  },

  button: {
    flexDirection: "row",
    marginBottom: hp("4.2"),
    columnGap: wp(4),
  },
  teamsAndCondition: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: hp(6.7),
    columnGap: wp(2.9),
  },
  checkbox: {
    borderRadius: 50,
  },
  teamsText: {
    color: "#677294",
  },
  inputSection: {
    marginBottom: hp(1.7),
    rowGap: hp(2.2),
  },

  doYouHaveAcc: {
    color: "#0EBE7F",
    fontSize: 14,
  },
  absoluteWrapper: {
    position: "absolute",
    width: wp("100%"),
    height: hp("100%"),
  },
  tinyLogo: {},
  tinyLogo2: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
});
