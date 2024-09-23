import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HeadLine from "../components/molecules/headeLine";
import PopularDocCard from "../components/molecules/popularDocCard";
import DocCategoryCard from "../components/molecules/docCategoryCard";
import InputText from "../components/atoms/inputText";
import OAuthButton from "../components/atoms/button";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const Appointment = () => {
  return (
    <View>
      <HeadLine title="Appointment" />
      <View style={{ paddingHorizontal: wp(5.3) }}>
        <DocCategoryCard
          doctorName="Dr. Pediatrician"
          doctorSpecialty="Specialist Cardiologist "
          imageSource={require("../assets/Dr. Pediatrician.png")}
          rating={2}
          views={"22k"}
        />
        <Text style={styles.text}>Appointment For</Text>
        <View
          style={{
            rowGap: hp(2.2),
          }}
        >
          <InputText placeholder="Patient Name" />
          <InputText placeholder="Contact Number" />
        </View>
        <Text style={styles.text}>Who is this patient?</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: "500",
    marginTop: hp(3.7),
    marginBottom: hp(2.5),
  },
});

export default Appointment;
