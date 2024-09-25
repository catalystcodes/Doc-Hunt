import React, { Fragment, ReactNode, useState } from "react";
import { Image, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import HeadLine from "../components/molecules/headeLine";
import CalendarScreen from "../components/organisms/calenderScreen";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { availableTime } from "../constantData";
import AvailableTime from "../components/atoms/availableTime";
import { ScrollView } from "react-native-gesture-handler";
import AppButton from "../components/atoms/confirmationButton";
import Thumb from "../components/atoms/icons/thumb";

const AppointmentSchedule = ({ navigation }: any) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

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
      <HeadLine title="Appointment" />
      <View style={{ paddingHorizontal: wp(5.3) }}>
        <CalendarScreen />
      </View>
      <View style={styles.timeSection}>
        <Text style={styles.availableTime}>Available Time</Text>
        <View
          style={{
            flexDirection: "row",
            columnGap: wp(2.4),
          }}
        >
          {availableTime.map((detail, detailIndex) => (
            <Fragment key={detailIndex}>
              <AvailableTime time={detail.time} />
            </Fragment>
          ))}
        </View>

        <Text style={styles.availableTime}>Reminder Me Before </Text>
        <View
          style={{
            flexDirection: "row",
            columnGap: wp(2.4),
          }}
        >
          {availableTime.map((detail, detailIndex) => (
            <Fragment key={detailIndex}>
              <AvailableTime time="30 Mint" />
            </Fragment>
          ))}
        </View>
        <View
          style={{
            width: wp(78.7),
            marginHorizontal: "auto",
            marginTop: hp(2.5),
          }}
        >
          <AppButton text="Confirm" onPress={() => setIsModalVisible(true)} />
        </View>
      </View>
      <Modal transparent={false} visible={isModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.thumb}>
            <Image source={require("../assets/thumb.png")} />
          </View>
          <Text
            style={{
              fontSize: 38,
              color: "#333333",
              fontWeight: "500",
              textAlign: "center",
              marginTop: hp(1.5),
              marginBottom: hp(0.6),
            }}
          >
            Thank You !
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: "#677294",
              fontWeight: "regular",
              textAlign: "center",
              marginTop: hp(1.5),
              marginBottom: hp(3.6),
            }}
          >
            Your Appointment Successful
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: "#677294",
              fontWeight: "regular",
              textAlign: "center",
              marginTop: hp(1.5),
              marginBottom: hp(3.6),
              paddingHorizontal: wp(9.3),
            }}
          >
            You booked an appointment with Dr. Pediatrician Purpieson on
            February 21, at 02:00 PM
          </Text>
          <View style={{ width: wp(78.7), marginHorizontal: "auto" }}>
            <AppButton text="Done" onPress={() => setIsModalVisible(false)} />
          </View>
          <Text
            style={{
              color: "#677294",
              fontSize: 14,
              textAlign: "center",
              marginTop: hp(2.2),
            }}
            onPress={() => navigation.navigate("appointmentPage")}
          >
            Edit your appointment
          </Text>
        </View>
      </Modal>
    </View>
  );
};

export default AppointmentSchedule;

const styles = StyleSheet.create({
  tinyLogo: {
    position: "absolute",
  },
  tinyLogo2: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  timeSection: {
    backgroundColor: "white",
    marginTop: hp(3.4),
    flexGrow: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingHorizontal: wp(5.3),
  },
  availableTime: {
    marginTop: hp(4.3),
    marginBottom: hp(3.3),
    fontSize: 16,
    fontWeight: "500",
  },
  modalContainer: {
    height: hp(64),
    width: wp(89.3),
    backgroundColor: "white",
    marginVertical: hp(18),
    marginHorizontal: wp(5.3),
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 5 },
    // shadowOpacity: 0.2,
    // elevation: 2,
    // borderStyle: "solid",

    // paddingHorizontal: wp(8.8),
  },
  thumb: {
    backgroundColor: "#E7F8F2",
    height: hp(19.2),
    width: wp(41.6),
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginTop: hp(3.2),
    marginLeft: wp(25.6),
  },
});
