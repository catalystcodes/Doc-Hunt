import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import HeadLine from "../components/molecules/headeLine";
import PatientImage from "../components/molecules/PatientImage";
import PlusIcon from "../components/atoms/plusIcon";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const AddRecord = () => {
  return (
    <View>
      <HeadLine title="Add Records" />
      <View style={{ flexDirection: "row" }}>
        <PatientImage
          patientPhoto={require("../assets/man.jpg")}
          patientType={""}
        />
        <Pressable
          style={{
            width: wp(26.7),
            backgroundColor: "#86D8BB",
            height: hp(15.4),
            borderRadius: 6,
            justifyContent: "center",
          }}
        >
          <PlusIcon
            style={{ marginHorizontal: "auto", marginBottom: hp(1.4) }}
          />
          <Text
            style={{
              color: "#0EBE7F",
              fontSize: 16,
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            Add more images
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default AddRecord;
