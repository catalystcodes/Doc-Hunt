import React, { useCallback, useMemo, useRef, useState } from "react";
import {
  Image,
  ImageBackground,
  // Modal,
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
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import BottomSheet from "@gorhom/bottom-sheet";

const Login = ({ navigation }: any) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ["1%", "45%"], []);
  const handleClosePress = () => bottomSheetModalRef.current?.close();
  const handleOpenPress = () => bottomSheetModalRef.current?.expand();

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={1}
        disappearsOnIndex={0}
        {...props}
      />
    ),
    []
  );

  return (
    <BottomSheetModalProvider>
      <View>
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
            <ConfirmationButton text="Login" />
            <Text
              style={{
                textAlign: "center",
                color: "#0EBE7F",
                marginTop: hp(2.3),
                marginBottom: hp(15.1),
              }}
              onPress={() => {
                handleOpenPress();
              }}
            >
              Forgot password
            </Text>
            <Text style={styles.doYouHaveAcc}>
              Don’t have an account?
              <Text
                onPress={() => {
                  navigation.navigate("signUp");
                }}
              >
                Join us
              </Text>
            </Text>
          </View>

          <BottomSheet
            ref={bottomSheetModalRef}
            index={0}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
            handleIndicatorStyle={{
              backgroundColor: "#C4C4C4",
              height: hp("0.6"),
              width: wp("34.7"),
            }}
            backdropComponent={renderBackdrop}
          >
            <BottomSheetView style={styles.contentContainer}>
              <Text
                onPress={() => {
                  handleClosePress();
                }}
              >
                Awesome 🎉
              </Text>
            </BottomSheetView>
          </BottomSheet>
        </KeyboardAvoidView>
      </View>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  whole: {
    flex: 1,
    paddingTop: hp(3.3),
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
    paddingBottom: hp(5.7),
  },

  tinyLogo: {
    position: "absolute",
  },
  tinyLogo2: {
    flexGrow: 1,
    // backgroundColor: "red",
    position: "absolute",

    bottom: 0,
    right: 0,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});

export default Login;
