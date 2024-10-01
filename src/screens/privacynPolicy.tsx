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
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: "#677294",
            marginBottom: hp(1.6),
          }}
        >
          Doctor Hunt Apps Privacy Policy
        </Text>
        <Text
          style={{
            lineHeight: 25,
            color: "#959CB4",
            marginBottom: hp(2.6),
            fontSize: 13,
          }}
        >
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words believable. It is a long established fact
          that reader will distracted by the readable content of a page when
          looking at its layout. The point of using Lorem Ipsum is that it has a
          moreIt is a long established fact that reader will distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more{" "}
        </Text>
        <View
          style={{
            flexDirection: "row",
            paddingLeft: wp(3.5),
            paddingRight: wp(3),
          }}
        >
          <Image
            source={require("../assets/dot.png")}
            style={{ marginTop: hp(0.7), marginRight: wp(2.1) }}
          />
          <Text
            style={{
              lineHeight: 25,
              color: "#959CB4",
              fontSize: 13,
            }}
          >
            The standard chunk of lorem Ipsum used since 1500s is reproduced
            below for those interested.
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingLeft: wp(3.5),
            paddingRight: wp(3),
            marginTop: hp(2.6),
          }}
        >
          <Image
            source={require("../assets/dot.png")}
            style={{ marginTop: hp(0.7), marginRight: wp(2.1) }}
          />
          <Text
            style={{
              lineHeight: 25,
              color: "#959CB4",
              fontSize: 13,
            }}
          >
            Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum.
            The point of using.
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingLeft: wp(3.5),
            paddingRight: wp(3),
            marginVertical: hp(2.6),
          }}
        >
          <Image
            source={require("../assets/dot.png")}
            style={{ marginTop: hp(0.7), marginRight: wp(2.1) }}
          />
          <Text
            style={{
              lineHeight: 25,
              color: "#959CB4",
              fontSize: 13,
            }}
          >
            Lorem Ipsum is that it has a moreIt is a long established fact that
            reader will distracted.
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingLeft: wp(3.5),
            paddingRight: wp(3),
          }}
        >
          <Image
            source={require("../assets/dot.png")}
            style={{ marginTop: hp(0.7), marginRight: wp(2.1) }}
          />
          <Text
            style={{
              lineHeight: 25,
              color: "#959CB4",
              fontSize: 13,
            }}
          >
            The point of using Lorem Ipsum is that it has a moreIt is a long
            established fact that reader will distracted.
          </Text>
        </View>

        <Text
          style={{
            lineHeight: 25,
            color: "#959CB4",
            fontSize: 13,
            marginTop: hp(2.6),
          }}
        >
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
