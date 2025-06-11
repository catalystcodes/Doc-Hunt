import React, { useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Google from "../components/atoms/icons/google";
import Facebook from "../components/atoms/icons/facebook";
import KeyboardAvoidView from "../components/molecules/KeyboardAvoidView";
import InputText from "../components/atoms/inputText";
import Checkbox from "expo-checkbox";
import OAuthButton from "../components/atoms/button";
import { Formik } from "formik";
import * as Yup from "yup";
import { addNewUser } from "../utils/auth.helper";

const SignUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Please input your full name"),
  password: Yup.string()
    .min(2, "Too Short!")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      "Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, and one number"
    )
    .required("Required"),
  email: Yup.string()
    .email("Please enter your valid email")
    .required("Required"),
});
const defaultForm = {
  username: "",
  email: "",
  password: "",
};

const SignUp = ({ navigation }: any) => {
  const [isChecked, setChecked] = useState(false);
  const [form, setForm] = useState(defaultForm);

  const disableButton =
    form.username?.trim() === "" ||
    form.email?.trim() === "" ||
    form.password?.trim() === "";

  const handleSignUp = async () => {
    if (disableButton) return;
    const { email, ...otherFormFields } = form;
    try {
      const data = await addNewUser(otherFormFields);
      if (data) {
        navigation.navigate("login");
      }
    } catch (e) {}
  };
  return (
    <KeyboardAvoidView>
      <Formik
        onSubmit={() => {}}
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={SignUpSchema}
      >
        {({ errors, touched, isValid, setFieldTouched }) => (
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
                You can search course, apply course and find scholarship for
                abroad studies
              </Text>
            </View>
            <View style={styles.subIntro}>
              <View style={styles.button}>
                <OAuthButton text="Google" Icon={<Google />} />
                <OAuthButton text="Facebook" Icon={<Facebook />} />
              </View>
              <View style={styles.inputSection}>
                <InputText
                  placeholder="Name"
                  placeholderTextColor="#a4a4a4"
                  value={form.username}
                  onChangeText={(text) => setForm({ ...form, username: text })}
                  onBlur={() => setFieldTouched("name")}
                />
                {touched.name && errors.name && (
                  <Text style={{ color: "red", fontSize: 12 }}>
                    {errors.name}
                  </Text>
                )}
                <InputText
                  placeholder="Email"
                  placeholderTextColor="#a4a4a4"
                  keyboardType="email-address"
                  value={form.email}
                  onChangeText={(text) => setForm({ ...form, email: text })}
                  onBlur={() => setFieldTouched("email")}
                />
                {touched.email && errors.email && (
                  <Text style={{ color: "red", fontSize: 12 }}>
                    {errors.email}
                  </Text>
                )}
                <InputText
                  placeholder="Password"
                  type="password"
                  placeholderTextColor="#a4a4a4"
                  value={form.password}
                  onChangeText={(text) => setForm({ ...form, password: text })}
                  onBlur={() => setFieldTouched("password")}
                />

                {touched.password && errors.password && (
                  <Text
                    style={{
                      color: "red",
                      fontSize: 12,
                    }}
                  >
                    {errors.password}
                  </Text>
                )}
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

            <TouchableOpacity
              onPress={handleSignUp}
              disabled={disableButton}
              style={[
                styles.submitBtn,
                { backgroundColor: isValid ? "#90e6c8" : "#0EBE7F" },
              ]}
            >
              <Text>Sign up</Text>
            </TouchableOpacity>
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
                  navigation.navigate("login");
                }}
              >
                <Text style={styles.doYouHaveAcc}>Log in</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
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
    rowGap: hp(1),
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
  submitBtn: {
    marginTop: hp(2.1),
    width: wp(73.7),
    marginHorizontal: "auto",
    backgroundColor: "#0EBE7F",
    padding: wp(2.9),
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
