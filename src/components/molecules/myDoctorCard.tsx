import React, { ReactNode } from "react";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import BigFavIcon from "../atoms/icons/bigFavIcon";
import AppButton from "../atoms/confirmationButton";
import { useNavigation } from "@react-navigation/native";

interface DocCardProps {
  name: string;
  image: ImageSourcePropType;
  specialty: string;
  yearOfExperience: string;
  percentage: number;
  patientStories: number;
  nextAvailableTime: string;
  likeIcon: ImageSourcePropType;
}

const MyDoctorCard = ({
  name,
  image,
  specialty,
  yearOfExperience,
  percentage,
  patientStories,
  nextAvailableTime,
  likeIcon,
}: DocCardProps) => {
  const navigation = useNavigation();
  return (
    <View style={styles.whole}>
      <View style={styles.subWhole1}>
        <Image source={image} />
        <View style={{ flexGrow: 1, marginLeft: wp(3.7) }}>
          <Text style={{ fontSize: 18, fontWeight: "500" }}>{name}</Text>
          <Text style={styles.text3}>{specialty}</Text>
          <Text style={styles.text1}>{yearOfExperience}</Text>
          <View style={styles.subWhole3}>
            <View style={styles.subWhole2}>
              <Image source={require("../../assets/dot.png")} />
              <Text style={styles.text2}>{percentage}%</Text>
            </View>
            <View style={styles.subWhole2}>
              <Image source={require("../../assets/dot.png")} />
              <Text style={styles.text2}>{patientStories} Patient Stories</Text>
            </View>
          </View>
        </View>
        <Image source={likeIcon} />
      </View>
      <View style={styles.whole2}>
        <View style={{ rowGap: hp(0.6) }}>
          <Text style={{ fontSize: 13, color: "#0EBE7F", fontWeight: "500" }}>
            Next Available
          </Text>
          <Text style={{ color: "#677294", fontSize: 12, fontWeight: "light" }}>
            <Text style={{ fontWeight: "500" }}>{nextAvailableTime}</Text> AM
            tomorrow
          </Text>
        </View>
        <Pressable
          style={styles.buttonStyle}
          onPress={() => {
            navigation.navigate("appointmentPage");
          }}
        >
          <Text style={{ fontSize: 12, fontWeight: "500", color: "white" }}>
            Book Now
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default MyDoctorCard;

const styles = StyleSheet.create({
  whole: {
    width: wp(89.3),
    height: hp(20.9),
    backgroundColor: "white",
    borderRadius: 8,
    paddingHorizontal: wp(5.3),
    marginBottom: hp(1.2),
    paddingTop: hp(2.2),
  },
  subWhole1: {
    flexDirection: "row",
  },
  subWhole2: {
    flexDirection: "row",
    alignItems: "center",
  },
  subWhole3: {
    flexDirection: "row",
    columnGap: wp(4.5),
    marginTop: hp(1.5),
  },
  text1: {
    color: "#677294",
    fontSize: 12,
    fontWeight: "light",
  },
  text2: {
    color: "#677294",
    fontSize: 11,
    fontWeight: "light",
    marginLeft: wp(1.1),
  },
  text3: {
    fontSize: 13,
    fontWeight: "regular",
    color: "#0EBE7F",
    marginTop: hp(0.1),
    marginBottom: hp(0.7),
  },
  whole2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: hp(1.7),
  },
  buttonStyle: {
    width: wp(29.9),
    height: hp(4.2),
    backgroundColor: "#0EBE7F",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
  },
});
