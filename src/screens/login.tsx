import React, { useCallback, useMemo, useRef, useState } from "react";
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

import {
  Image,
  // Modal,
  Pressable,
  StyleSheet,
  Text,
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
import KeyboardAvoidView from "../components/molecules/KeyboardAvoidView";
import InputText from "../components/atoms/inputText";
import AppButton from "../components/atoms/confirmationButton";
import InputOtpEntry from "../components/molecules/inputOtpEntry";

const Login = ({ navigation }: any) => {
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ["50%", "60%"], []);
  const [bottomSheet, setBottomSheet] = useState(false);

  // callbacks

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <BottomSheetModalProvider>
      <View style={{ flexGrow: 1 }}>
        <KeyboardAvoidView>
          <View style={{ flex: 1, paddingTop: hp(3.3) }}>
            <Image
              style={styles.tinyLogo}
              source={require("../assets/backgroundImage1.png")}
            />
            <Image
              style={styles.tinyLogo2}
              source={require("../assets/backgroundImage2.png")}
            />

            <View style={styles.intro}>
              <Text style={styles.header}>Welcome back</Text>
              <Text style={styles.subHeader}>
                You can search course, apply course and find scholarship for
                abroad studies
              </Text>
            </View>
            <View style={styles.subIntro}>
              <View style={styles.button}>
                <Button text="Google" Icon={<Google />} />
                <Button text="Facebook" Icon={<Facebook />} />
              </View>
              <View style={styles.inputSection}>
                <InputText placeholder="Name" />
                <InputText placeholder="Password" />
              </View>
            </View>
            <Pressable
              style={{
                width: wp(78.7),
                height: hp(6.7),
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 12,
                marginTop: 50,
                marginLeft: wp(10.7),
                backgroundColor: "#0EBE7F",
              }}
              onPress={() => {
                navigation.replace("drawerTab");
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontSize: 18,
                  fontWeight: "medium",
                }}
              >
                Login
              </Text>
            </Pressable>

            <TouchableOpacity onPress={handlePresentModalPress}>
              <Text
                style={{
                  textAlign: "center",
                  color: "#0EBE7F",
                  marginTop: hp(2.3),
                }}
              >
                Forgot password
              </Text>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginTop: hp(13),
              }}
            >
              <Text style={styles.doYouHaveAcc}>Don’t have an account?</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("signUp");
                }}
              >
                <Text style={styles.doYouHaveAcc}>Join us</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidView>
      </View>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        handleIndicatorStyle={{ backgroundColor: "#C4C4C4", width: wp(34.7) }}
        enablePanDownToClose={true}
      >
        <KeyboardAvoidView>
          <BottomSheetView>
            {!bottomSheet && (
              <View style={styles.bottomSheetStyle}>
                <Text style={styles.forget}>Forgot password</Text>
                <Text style={styles.text}>
                  Enter your email for the verification process, we will send 4
                  digits code to your email.
                </Text>
                <InputText placeholder="Email" />
                <View
                  style={{
                    width: wp(78.7),
                    marginHorizontal: "auto",
                    marginTop: hp(3.7),
                  }}
                >
                  <AppButton
                    text="continue"
                    onPress={() => {
                      setBottomSheet(true);
                    }}
                  />
                </View>
              </View>
            )}
            {bottomSheet && (
              <View style={styles.bottomSheetStyle}>
                <Text style={styles.forget}>Enter 4 Digits Code</Text>
                <Text style={styles.text}>
                  Enter the 4 digits code that you received on your email.
                </Text>
                <InputOtpEntry />
                <View
                  style={{
                    width: wp(78.7),
                    marginHorizontal: "auto",
                    marginTop: hp(3.7),
                  }}
                >
                  <AppButton
                    text="continue"
                    onPress={() => {
                      setBottomSheet(true);
                    }}
                  />
                </View>
              </View>
            )}
          </BottomSheetView>
        </KeyboardAvoidView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

export default Login;

const styles = StyleSheet.create({
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
    columnGap: wp(4),
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
    rowGap: hp(2.2),
  },
  teamsAndCondition: {
    flexDirection: "row",
    alignItems: "center",
  },
  doYouHaveAcc: {
    color: "#0EBE7F",
    fontSize: 14,
  },

  tinyLogo: {
    position: "absolute",
  },
  tinyLogo2: {
    flexGrow: 1,
    position: "absolute",
    bottom: 0,
    right: 0,
  },

  input: {
    width: wp(89.3),
    height: hp(6.7),
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 12,
    paddingLeft: wp(6.7),
    borderColor: "#677294",
  },
  bottomSheetStyle: {
    paddingHorizontal: wp(5.3),
  },
  bottomSheetStyle1: {
    backgroundColor: "red",
  },
  forget: {
    fontSize: 24,
    fontWeight: "500",
    marginTop: hp(6.8),
    marginBottom: hp(1.5),
  },
  text: {
    color: "#677294",
    fontSize: 14,
    fontWeight: "regular",
    marginBottom: hp(4.4),
    width: wp(76.5),
  },
});
