import React, { Fragment } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import HeadLine from "../components/molecules/headeLine";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { detailsOfDoc } from "../constantData";
import PopularDocCard from "../components/molecules/popularDocCard";

const PopularDoc = () => {
  return (
    <View style={{ flexGrow: 1 }}>
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
      <HeadLine />
      <View
        style={{
          paddingHorizontal: wp(5.3),
        }}
      >
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
          <Text
            style={{ fontSize: 12, fontWeight: "light" }}
            // onPress={() => {
            //   navigation.navigate("popularDocFullPage");
            // }}
          >
            See all {">"}
          </Text>
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
        <Text
          style={{ fontWeight: "500", fontSize: 18, marginVertical: hp(2.2) }}
        >
          Category
        </Text>
      </View>
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
});

export default PopularDoc;
