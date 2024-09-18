import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
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

const SignUp = ({ navigation }: any) => {
  const [isChecked, setChecked] = useState(false);

  return (
    <KeyboardAvoidView>
      <View style={styles.whole}>
        <Image
          style={styles.tinyLogo}
          source={require("../assets/backgroundImage1.png")}
        />
        <Image
          style={styles.tinyLogo2}
          source={require("../assets/backgroundImage2.png")}
        />
        {/* <ImageBackground
          source={require("../assets/backgroundImage.jpg")}
          resizeMode="cover"
          style={styles.backgroundImage}
        /> */}
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
            <InputText placeholder="Email" name="email-address" />
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
        <Text style={styles.doYouHaveAcc}>
          Have an account?{" "}
          <Text
            onPress={() => {
              navigation.navigate("login");
            }}
          >
            Log in
          </Text>
        </Text>
      </View>
    </KeyboardAvoidView>
  );
};

const styles = StyleSheet.create({
  whole: {
    flex: 1,
    paddingTop: hp(3.3),

    // backgroundImage:
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
  doYouHaveAcc: {
    textAlign: "center",
    marginTop: hp(2.1),
    color: "#0EBE7F",
    fontSize: 14,
  },
  // backgroundImage: {
  //   color: "white",
  //   fontSize: 42,
  //   lineHeight: 84,
  //   fontWeight: "bold",
  //   textAlign: "center",
  //   backgroundColor: "#000000c0",
  // },
  tinyLogo: {
    position: "absolute",
  },
  tinyLogo2: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
});

export default SignUp;
