import React, { useCallback, useMemo, useRef, useState } from "react";

import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import HeadLine from "../components/molecules/headeLine";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import AppButton from "../components/atoms/confirmationButton";
import { useNavigation } from "@react-navigation/native";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import CameraIcon from "../components/atoms/camera";
import UploadPics from "../components/atoms/uploadPics";
import UploadFile from "../components/atoms/uploadFile";

const MedicalRecord = () => {
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ["31"], []);

  // callbacks

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  const navigation: any = useNavigation();

  return (
    <BottomSheetModalProvider>
      <View style={{ flexGrow: 1 }}>
        <Image
          style={styles.tinyLogo}
          source={require("../assets/backgroundImage1.png")}
        />
        <Image
          style={styles.tinyLogo2}
          source={require("../assets/backgroundImage2.png")}
        />
        <HeadLine title="Medical Records" />
        <View
          style={{
            backgroundColor: "#C6EFE5",
            borderRadius: 150,
            height: hp(26.4),
            width: wp(57.1),
            alignItems: "center",
            justifyContent: "center",
            marginHorizontal: wp(21.9),
            marginTop: hp(10.9),
          }}
        >
          <Image source={require("../assets/medicalRecords.png")} />
        </View>
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            fontWeight: "500",
            marginTop: hp(5),
            marginBottom: hp(1.6),
          }}
        >
          Add a medical record.
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 14,
            fontWeight: "regular",
            color: "#677294",
            paddingHorizontal: wp(9.6),
            marginBottom: hp(4.1),
          }}
        >
          A detailed health history helps a doctor diagnose you btter.
        </Text>
        <View style={{ width: wp(72), marginHorizontal: "auto" }}>
          <AppButton text="Add a record" onPress={handlePresentModalPress} />
        </View>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          handleIndicatorStyle={{ backgroundColor: "#C4C4C4", width: wp(34.7) }}
          enablePanDownToClose={true}
          style={styles.designSheet}
        >
          <BottomSheetView>
            <View style={styles.bottomSheetStyle}>
              <Text style={styles.record}>Add a record</Text>
              <Pressable style={{ flexDirection: "row", marginTop: hp(2.8) }}>
                <CameraIcon />
                <Text style={styles.sheetText}>Take a photo</Text>
              </Pressable>
              <Pressable style={{ flexDirection: "row", marginTop: hp(2.8) }}>
                <UploadPics />
                <Text style={styles.sheetText}>Upload from gallery</Text>
              </Pressable>
              <Pressable style={{ flexDirection: "row", marginTop: hp(2.8) }}>
                <UploadFile />
                <Text style={styles.sheetText}>Upload files</Text>
              </Pressable>
              <Text
                style={{ textAlign: "center" }}
                onPress={() => navigation.navigate("addRecordPage")}
              >
                Move
              </Text>
            </View>
          </BottomSheetView>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    position: "absolute",
  },
  tinyLogo2: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  bottomSheetStyle: {
    paddingLeft: wp(5.3),
  },
  record: {
    fontSize: 22,
    fontWeight: "500",
    marginTop: hp(2),
    marginBottom: hp(0.4),
  },
  designSheet: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: "blue",
  },
  sheetText: {
    color: "#677294",
    fontSize: 16,
    fontWeight: "regular",
  },
});

export default MedicalRecord;
