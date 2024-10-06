import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import AppButton from "../components/atoms/confirmationButton";
import EditIcon from "../components/atoms/editIcon";
import InvoiceIcon from "../components/atoms/invoice";
import PlusIcon from "../components/atoms/plusIcon";
import PrescriptionIcon from "../components/atoms/prescribtion";
import ReportIcon from "../components/atoms/reportIcon";
import PatientImage from "../components/molecules/PatientImage";
import HeadLine from "../components/molecules/headeLine";
import { useNavigation } from "@react-navigation/native";

const AddRecord = () => {
  const navigation: any = useNavigation();
  return (
    <View style={{ flexGrow: 1 }}>
      <Image
        style={styles.tinyLogo}
        source={require("../assets/backgroundImage1.png")}
      />
      <Image
        style={styles.tinyLogo2}
        source={require("../assets/backgroundImage2.png")}
      />
      <HeadLine title="Add Records" />
      <View
        style={{
          flexDirection: "row",
          paddingLeft: wp(5.3),
          marginBottom: hp(11),
        }}
      >
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
      <View
        style={{
          backgroundColor: "white",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          flexGrow: 1,
          paddingHorizontal: wp(3.5),
          // shadowColor: "red",
          shadowColor: "#171717",
          shadowOffset: { width: -2, height: 10 },
          shadowOpacity: 1,
          shadowRadius: 8,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: hp(3.7),
            borderBottomColor: "#E5E5E5",
            borderBottomWidth: 1,
            paddingBottom: hp(3.3),
          }}
        >
          <View style={{ flexGrow: 1 }}>
            <Text style={styles.header}>Record for</Text>
            <Text style={styles.subHeader}>Abdullah Mamun</Text>
          </View>
          <EditIcon />
        </View>
        <View
          style={{
            // flexDirection: "row",
            // alignItems: "center",
            // marginTop: hp(3.7),
            borderBottomColor: "#E5E5E5",
            borderBottomWidth: 1,
            paddingBottom: hp(3.3),
          }}
        >
          <Text style={{ marginVertical: hp(2.2) }}>Type of Record </Text>
          <View style={styles.typeOfRecord}>
            <View style={{ alignItems: "center" }}>
              <ReportIcon />
              <Text>Report</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <PrescriptionIcon />
              <Text>Prescription</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <InvoiceIcon />
              <Text>Invoice</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: hp(3.7),
            borderBottomColor: "#E5E5E5",
            borderBottomWidth: 1,
            paddingBottom: hp(3.3),
          }}
        >
          <View style={{ flexGrow: 1 }}>
            <Text style={styles.header}>Record created on</Text>
            <Text style={styles.subHeader}>27 Feb, 2021</Text>
          </View>
          <EditIcon />
        </View>
        <View
          style={{
            width: wp(78),
            marginHorizontal: "auto",
            marginTop: hp(3.7),
          }}
        >
          <AppButton
            text="Upload record"
            onPress={() => navigation.navigate("allRecord")}
          />
        </View>
      </View>
    </View>
  );
};

export default AddRecord;

const styles = StyleSheet.create({
  tinyLogo: {
    position: "absolute",
  },
  tinyLogo2: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  header: {
    fontSize: 16,
    marginBottom: hp(1.6),
  },
  subHeader: { fontSize: 18, fontWeight: "500", color: "#0EBE7F" },
  typeOfRecord: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: wp(28),
  },
});
