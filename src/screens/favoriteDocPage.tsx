import React, { Fragment } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import ArrowBack from "../components/atoms/icons/arrowback";
import SearchArea from "../components/atoms/searchArea";
import KeyboardAvoidView from "../components/molecules/KeyboardAvoidView";
import FavoriteDocCard from "../components/molecules/favoriteDocCard";
import { favoriteDocDetails, featureDocDetails } from "../constantData";
import FeatureDoc from "../components/molecules/featureDoc";
import HeaderPage from "../components/molecules/headeLine";
import HeadLine from "../components/molecules/headeLine";

const FavoriteDocPage = ({ navigation }: any) => {
  return (
    <View style={{ flexGrow: 1 }}>
      <Image
        style={styles.tinyLogo}
        source={require("../assets/backgroundImage1.png")}
      />
      <Image
        style={styles.tinyLogo2}
        source={require("../assets/backgroundImage2.png")}
      />
      <KeyboardAvoidView>
        <HeadLine title="Favorite Doctors" />
        <SearchArea placeholder="Search" />
        <View style={styles.separator}></View>
        <View style={styles.favDoc}>
          {favoriteDocDetails.map((favorite, favoriteIndex) => (
            <Fragment key={favoriteIndex}>
              <FavoriteDocCard
                title={favorite.name}
                docAvatar={favorite.icon}
                areaofspecialist={favorite.area}
              />
            </Fragment>
          ))}

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              marginBottom: hp(2.7),
              marginHorizontal: wp(5.3),
              marginTop: hp(3.7),
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "500" }}>
              Feature Doctor
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "light",
                marginLeft: wp(45.1),
              }}
            >
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
        </View>
      </KeyboardAvoidView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: hp(5.6),
    marginBottom: hp(4.7),
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp(5.3),
  },
  tinyLogo: {
    position: "absolute",
  },
  tinyLogo2: {
    flexGrow: 1,
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  separator: {
    paddingVertical: hp(1.5),
  },
  favDoc: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default FavoriteDocPage;
