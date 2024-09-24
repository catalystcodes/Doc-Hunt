import React, { Fragment, ReactNode, useState } from "react";
import { Image, Modal, StyleSheet, Text, View } from "react-native";
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

const AppointmentSchedule = () => {
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
      <Modal transparent={true} visible={isModalVisible} animationType="slide">
        <View style={styles.modalContainer}></View>
        {/* onPress={() => setIsModalVisible(false)} */}
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
    backgroundColor: "blue",
  },
});
