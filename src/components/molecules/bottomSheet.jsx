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
import InputText from "../components/atoms/inputText";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import BottomSheet from "@gorhom/bottom-sheet";
import KeyboardAvoidView from "../components/molecules/KeyboardAvoidView";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

// const handleSheetChanges = useCallback((index:) => {
//   console.log("handleSheetChanges", index);
// }, []);

const renderBackdrop = useCallback(
  (props: any) => (
    <BottomSheetBackdrop appearsOnIndex={1} disappearsOnIndex={0} {...props} />
  ),
  []
);

const BottomSheet = () => {
  return (
    <BottomSheetModalProvider>
      <View>
        <KeyboardAvoidView>
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
              <View style={styles.modelView}>
                <Text
                  style={{
                    fontSize: 24,
                    marginTop: hp(6.8),
                    marginBottom: hp(2.5),
                    fontWeight: "medium",
                  }}
                >
                  Forgot password
                </Text>
                <Text
                  style={{
                    color: "#677294",
                  }}
                >
                  Enter your email for the verification process, we will send 4
                  digits code to your email.
                </Text>
              </View>
              <InputText
                placeholder="Email"
                name="email-address"
                // style={styles.modalInput}
              />
            </BottomSheetView>
          </BottomSheet>
        </KeyboardAvoidView>
      </View>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  modelView: {
    paddingLeft: wp(5.1),
    paddingRight: wp(24),
    backgroundColor: "red",
  },
  modalInput: {
    flexGrow: 1,
  },
});

export default BottomSheet;
