import React, { Fragment } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import InputText from "../components/atoms/inputText";
import SearchArea from "../components/atoms/searchArea";
import KeyboardAvoidView from "../components/molecules/KeyboardAvoidView";
import VideoScreen from "../components/molecules/videoScreen";
import TheetIcon from "../components/atoms/icons/theetIcon";
import HeartIcon from "../components/atoms/icons/heartIcon";
import EyeIcon from "../components/atoms/icons/eyeIcon";
import BodyIcon from "../components/atoms/icons/bodyIcon";
import PopularDocCard from "../components/molecules/popularDocCard";
import { detailsOfDoc, featureDocDetails } from "../constantData";
import FeatureDoc from "../components/molecules/featureDoc";

const Home = () => {
  return (
    <View style={{ flexGrow: 1 }}>
      <KeyboardAvoidView>
        <View>
          <Image
            source={require("../assets/backgroundImage3.png")}
            style={styles.tinyLogo}
          />
          <Image
            source={require("../assets/backgroundImage1.png")}
            style={styles.tinyLogo1}
          />
          <Image
            source={require("../assets/backgroundImage2.png")}
            style={styles.tinyLogo2}
          />
        </View>
        <View style={styles.header}>
          <View>
            <Text style={{ color: "white", fontSize: 20, fontWeight: "light" }}>
              Hi Handwerker!
            </Text>
            <Text style={{ color: "white", fontSize: 25, fontWeight: "bold" }}>
              Find Your Doctor
            </Text>
          </View>
          <Image source={require("../assets/avatar.png")} />
        </View>
        <SearchArea placeholder="Search...." />
        <View style={styles.veiw1}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "700",
              marginBottom: hp(2.5),
            }}
          >
            Live Doctors
          </Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.videos}>
              <VideoScreen videoSource="http://commondatastorage.googleapis.com/ggtv-videos-bucket/sample/BigBuckBunny.mp4" />
              <VideoScreen videoSource="http://commondatastorage.googleapis.com/ggtv-videos-bucket/sample/BigBuckBunny.mp4" />
              <VideoScreen videoSource="http://commondatastorage.googleapis.com/ggtv-videos-bucket/sample/BigBuckBunny.mp4" />
            </View>
          </ScrollView>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{ flexDirection: "row" }}>
              <Image source={require("../assets/theetIcon.png")} />
              <Image source={require("../assets/heartIcon.png")} />
              <Image source={require("../assets/eyeIcon.png")} />
              <Image source={require("../assets/bodyIcon.png")} />
            </View>
          </ScrollView>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: hp(2.7),
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "700" }}>
              Popular Doctor
            </Text>
            <Text style={{ fontSize: 12, fontWeight: "light" }}>
              See all {">"}
            </Text>
          </View>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{ flexDirection: "row" }}>
            {detailsOfDoc.map((detail, detailIndex) => (
              <Fragment key={detailIndex}>
                <PopularDocCard
                  doctorImage={detail.icon}
                  title={detail.name}
                  areaOfSpecialist={detail.area}
                  rateImage={detail.rate}
                />
              </Fragment>
            ))}
          </View>
        </ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: hp(2.7),
            marginHorizontal: wp(5.3),
            marginTop: hp(3.7),
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "700" }}>
            Feature Doctor
          </Text>
          <Text style={{ fontSize: 12, fontWeight: "light" }}>
            See all {">"}
          </Text>
        </View>
        <View>
          <ScrollView
            style={{
              marginBottom: hp(3),
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {featureDocDetails.map((feature, featureIndex) => (
              <Fragment key={featureIndex}>
                <FeatureDoc
                  name={feature.name}
                  docAvatar={feature.icon}
                  payPerHour={feature.payPerHour}
                  rating={feature.rating}
                />
              </Fragment>
            ))}
          </ScrollView>
        </View>
      </KeyboardAvoidView>
    </View>
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    position: "absolute",
    width: "100%",
    // borderRadius: 12,
  },
  tinyLogo1: {
    position: "absolute",
    top: 145,
  },
  tinyLogo2: {
    flexGrow: 1,
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  header: {
    paddingHorizontal: wp(5.3),
    marginTop: hp(5.6),
    marginBottom: hp(2.7),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  veiw1: {
    marginHorizontal: wp(5.3),
    marginTop: hp(3.7),
  },
  videos: {
    flexDirection: "row",
  },
});

export default Home;
