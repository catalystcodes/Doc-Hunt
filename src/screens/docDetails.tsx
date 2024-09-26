import React, { Fragment } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import HeadLine from "../components/molecules/headeLine";
import DocDetailCard from "../components/molecules/docDetailCard";
import { docDetailCard, docProgress } from "../constantData";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import DocProgress from "../components/molecules/docProgress";
import ServiceList from "../components/atoms/serviceList";
import AppMap from "../components/molecules/appMap";

const DocDetails = () => {
  return (
    <View
      style={{
        flexGrow: 1,
      }}
    >
      <Image
        style={styles.tinyLogo}
        source={require("../assets/backgroundImage1.png")}
      />
      <Image
        style={styles.tinyLogo2}
        source={require("../assets/backgroundImage2.png")}
      />
      <HeadLine title="Doctor Details" />
      <View style={{ paddingHorizontal: wp(5.3) }}>
        {docDetailCard.map((favorite, favoriteIndex) => (
          <Fragment key={favoriteIndex}>
            <DocDetailCard
              doctorName={favorite.name}
              imageSource={favorite.avatar}
              doctorSpecialty={favorite.area}
              rating={favorite.rate}
              views={favorite.view}
            />
          </Fragment>
        ))}
      </View>
      <View style={{ paddingVertical: hp(1.5) }}></View>
      {docProgress.map((favorite, favoriteIndex) => (
        <Fragment key={favoriteIndex}>
          <DocProgress
            running={favorite.running}
            ongoing={favorite.onGoing}
            patient={favorite.patient}
          />
        </Fragment>
      ))}
      <View style={{ paddingHorizontal: wp(5.3) }}>
        <Text
          style={{
            fontWeight: "500",
            fontSize: 18,
            marginTop: hp(3.3),
          }}
        >
          Service
        </Text>
        <View>
          <ServiceList
            number={1}
            serviceList="Patient care should be the number one priority"
          />
        </View>
        <View style={styles.serviceSec}>
          <ServiceList
            number={2}
            serviceList="If you run your practiceyou know how frustrating"
          />
        </View>
        <View>
          <ServiceList
            number={3}
            serviceList="That’s why some of appointment reminder system"
          />
        </View>
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 10,
            paddingHorizontal: wp(2.4),
            paddingVertical: wp(2.4),
          }}
        >
          <View
            style={{
              width: wp(84.8),
              height: hp(23.4),
            }}
          >
            <AppMap />
          </View>
        </View>
      </View>
    </View>
  );
};

export default DocDetails;
const styles = StyleSheet.create({
  tinyLogo: {
    position: "absolute",
  },
  tinyLogo2: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  serviceSec: {
    borderColor: "rgba(0, 0, 0, 0.1)",

    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
});
