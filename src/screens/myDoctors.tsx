import React, { Fragment } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import HeadLine from "../components/molecules/headeLine";
import SearchArea from "../components/atoms/searchArea";
import MyDoctorCard from "../components/molecules/myDoctorCard";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { myDoctorDetails } from "../constantData";
import KeyboardAvoidView from "../components/molecules/KeyboardAvoidView";

const MyDoctors = () => {
  return (
    <KeyboardAvoidView>
      <View style={{ flexGrow: 1 }}>
        <Image
          source={require("../assets/backgroundImage1.png")}
          style={styles.tinyLogo1}
        />
        <Image
          source={require("../assets/backgroundImage2.png")}
          style={styles.tinyLogo2}
        />
        <HeadLine title="My Doctors" />
        <SearchArea placeholder="Search" />
        <View style={{ marginTop: hp(3), paddingHorizontal: wp(5.3) }}>
          {myDoctorDetails.map((detail, detailIndex) => (
            <Fragment key={detailIndex}>
              <MyDoctorCard
                image={detail.image}
                likeIcon={detail.likeIcon}
                name={detail.name}
                nextAvailableTime={detail.nextAvailableTime}
                patientStories={detail.patientStories}
                percentage={detail.percentage}
                specialty={detail.specialty}
                yearOfExperience={detail.yearOfExperience}
              />
            </Fragment>
          ))}
        </View>
      </View>
    </KeyboardAvoidView>
  );
};

export default MyDoctors;

const styles = StyleSheet.create({
  tinyLogo1: {
    position: "absolute",
  },
  tinyLogo2: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
});
