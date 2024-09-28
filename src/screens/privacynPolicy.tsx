import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import HeadLine from "../components/molecules/headeLine";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const PrivacynPolicy = () => {
  return (
    <>
      <HeadLine title="Privacy policy" />
      <View style={styles.whole}>
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#677294" }}>
          Doctor Hunt Apps Privacy Policy
        </Text>
        <Text>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words believable. It is a long established fact
          that reader will distracted by the readable content of a page when
          looking at its layout. The point of using Lorem Ipsum is that it has a
          moreIt is a long established fact that reader will distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more{" "}
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Image source={require("../assets/dot.png")} />
          <Text>
            The standard chunk of lorem Ipsum used since 1500s is reproduced
            below for those interested.
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Image source={require("../assets/dot.png")} />
          <Text>
            Lorem Ipsum is that it has a moreIt is a long established fact that
            reader will distracted.
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Image source={require("../assets/dot.png")} />
          <Text>
            The point of using Lorem Ipsum is that it has a moreIt is a long
            established fact that reader will distracted.
          </Text>
        </View>
        <Text>
          It is a long established fact that reader distracted by the readable
          content of a page when looking at its layout. The point of using Lorem
          Ipsum is that it has a moreIt is a long established.
        </Text>
      </View>
    </>
  );
};

export default PrivacynPolicy;

const styles = StyleSheet.create({
  whole: {
    paddingHorizontal: wp(5.3),
  },
});
