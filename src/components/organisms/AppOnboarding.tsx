import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ListRenderItemInfo,
} from "react-native";
import React, { useRef, useState } from "react";
import AppIntroSlider from "react-native-app-intro-slider";
import { Image } from "expo-image";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { slides } from "../../constantData/onBoardinngData";
// import Steps from "../molecules/steps";
import { useNavigation } from "@react-navigation/native";
import { OnboardingStackParams } from "../../utils/types";
import AppButton from "../atoms/confirmationButton";

const renderItem = (
  {
    item,
  }:
    | ListRenderItemInfo<{
        key: number;
        title: string;
        text: string;
        image: any;
      }>
    | (ListRenderItemInfo<{
        key: number;
        title: string;
        text: string;
        image: any;
      }> & { dimensions: { width: number; height: number } }),
  activeSlide: number
) => {
  return (
    <>
      <View style={{ alignItems: "center" }}>
        <View style={styles.imageWrapper}>
          <Image style={styles.image1} source={item.image} />
        </View>
        {/* <View style={styles.stepContainer}>
          <Steps activeStep={activeSlide} steps={slides.length} />
        </View> */}
        <Text
          style={{
            textAlign: "center",
            fontWeight: "700",
            fontSize: 20,
            width: wp(55.5),
            marginTop: hp(10.5),
            marginBottom: hp(1.5),
          }}
        >
          {item.title}
        </Text>

        <Text
          style={{
            textAlign: "center",
            width: wp(82),
            lineHeight: 23.87,
          }}
        >
          {item.text}
        </Text>
      </View>
    </>
  );
};

const AppOnboarding = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);
  const navigation = useNavigation<OnboardingStackParams>();
  const handleSkip = () => {
    navigation.replace("login");
  };

  const handleGetStarted = () => {
    if (activeSlide === 0) {
      setActiveSlide((currentSlide) => {
        const newIndex = currentSlide + 1;
        sliderRef.current.goToSlide(newIndex);
        return newIndex;
      });
    } else {
      navigation.navigate("login");
    }
  };

  return (
    <View style={{ flexGrow: 1 }}>
      <Image
        source={require("../../assets/tinyLogo3.png")}
        style={styles.tinyLogo}
      />
      <Image
        source={require("../../assets/bg4.png")}
        style={styles.tinyLogo2}
      />
      <View style={{ marginTop: hp(11.2) }}></View>
      <AppIntroSlider
        ref={sliderRef}
        data={slides}
        renderItem={(item) => renderItem(item, activeSlide)}
        onSlideChange={(index) => {
          setActiveSlide(index);
        }}
        renderPagination={() => null}
      />

      <View style={{ width: wp(77), marginHorizontal: "auto" }}>
        <AppButton text="Get Started" onPress={handleGetStarted} />
      </View>
      <Pressable
        onPress={() => {
          handleSkip();
        }}
      >
        <Text style={{ textAlign: "center" }}>SKIP</Text>
      </Pressable>
    </View>
  );
};

export default AppOnboarding;

const styles = StyleSheet.create({
  imageWrapper: {
    width: wp(91.5),
    height: hp(42.24),
  },
  image1: {
    height: "100%",
    objectFit: "cover",
  },

  getStartedButton: {
    width: wp(56.5),
    height: hp(6.9),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    backgroundColor: "#7D57F1",
  },
  getStartedText: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },
  tinyLogo: {
    position: "absolute",
    height: hp(42.1),
    width: wp(91.2),
    right: 150,
  },
  tinyLogo2: {
    position: "absolute",
    bottom: 0,
    right: 0,
    height: hp(26.8),
    width: wp(57.6),
  },
});
