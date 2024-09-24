import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import HeadLine from "../components/molecules/headeLine";
import PopularDocCard from "../components/molecules/popularDocCard";
import DocCategoryCard from "../components/molecules/docCategoryCard";
import InputText from "../components/atoms/inputText";
import OAuthButton from "../components/atoms/button";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import PatientImage from "../components/molecules/PatientImage";
import { ScrollView } from "react-native-gesture-handler";
import KeyboardAvoidView from "../components/molecules/KeyboardAvoidView";
import AppButton from "../components/atoms/confirmationButton";
import { useNavigation } from "@react-navigation/native";

const Appointment = ({ navigation }: any) => {
  return (
    <View>
      <KeyboardAvoidView>
        <View>
          <Image
            style={styles.tinyLogo}
            source={require("../assets/backgroundImage1.png")}
          />
          <Image
            style={styles.tinyLogo2}
            source={require("../assets/backgroundImage2.png")}
          />
        </View>
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
            <InputText
              placeholder="Contact Number"
              keyboardType="decimal-pad"
            />
          </View>
          <Text style={styles.text}>Who is this patient?</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.patientImageSection}>
              <PatientImage
                patientType="My Self"
                patientPhoto={require("../assets/man.jpg")}
              />
              <PatientImage
                patientType="My Child"
                patientPhoto={require("../assets/child.jpg")}
              />
              <PatientImage
                patientType="My Man"
                patientPhoto={require("../assets/man.jpg")}
              />
              <PatientImage
                patientType="My Child"
                patientPhoto={require("../assets/child.jpg")}
              />
            </View>
          </ScrollView>
          <View style={{ width: wp(78.7), marginHorizontal: "auto" }}>
            <AppButton
              onPress={() => {
                navigation.navigate("appointmentSchedulePage");
              }}
              text="Next"
            />
          </View>
        </View>
      </KeyboardAvoidView>
    </View>
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    position: "absolute",
  },
  tinyLogo2: {
    flexGrow: 1,
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
    marginTop: hp(3.7),
    marginBottom: hp(2.5),
  },
  patientImageSection: {
    flexDirection: "row",
    marginBottom: hp(2.2),
  },
});

export default Appointment;
