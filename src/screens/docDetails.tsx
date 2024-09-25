import React, { Fragment } from "react";
import { Image, StyleSheet, View } from "react-native";
import HeadLine from "../components/molecules/headeLine";
import DocDetailCard from "../components/molecules/docDetailCard";
import { docDetailCard } from "../constantData";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

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
});
