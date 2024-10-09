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
import Steps from "../molecules/steps";
import { useNavigation } from "@react-navigation/native";
import { OnboardingStackParams } from "../../utils/types";

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
        <View style={styles.stepContainer}>
          <Steps activeStep={activeSlide} steps={slides.length} />
        </View>
        <Text
          style={{
            textAlign: "center",
            fontWeight: "700",
            fontSize: 20,
            width: wp(55.5),
          }}
        >
          {item.title}
        </Text>

        <Text
          style={{
            textAlign: "center",

            width: wp(82),
            marginTop: 15,
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
  //   const navigation = useNavigation<OnboardingStackParams>();
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
    <View style={{ flexGrow: 1, marginTop: 15 }}>
      <View>
        <Pressable
          onPress={() => {
            handleSkip();
          }}
        >
          <Text
            style={{
              textAlign: "right",
              fontSize: 14,
              fontWeight: "500",
              marginTop: 35,
              marginBottom: 45,
              marginRight: 26,
            }}
          >
            SKIP
          </Text>
        </Pressable>
      </View>
      <AppIntroSlider
        ref={sliderRef}
        data={slides}
        renderItem={(item) => renderItem(item, activeSlide)}
        onSlideChange={(index) => {
          setActiveSlide(index);
        }}
        renderPagination={() => null}
      />
      <View style={{ alignItems: "center", marginBottom: hp(6) }}>
        <Pressable style={styles.getStartedButton} onPress={handleGetStarted}>
          <Text style={styles.getStartedText}>Get Started</Text>
        </Pressable>
      </View>
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
  stepContainer: {
    marginTop: hp(10.5),
    marginBottom: hp(4.3),
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
});
