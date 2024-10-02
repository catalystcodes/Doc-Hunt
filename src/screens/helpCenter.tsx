import React, { Fragment } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import HeadLine from "../components/molecules/headeLine";
import InputText from "../components/atoms/inputText";
import { helpCenterMenu } from "../constantData";
import HelpCenterCard from "../components/molecules/helpCenterCard";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import KeyboardAvoidView from "../components/molecules/KeyboardAvoidView";

const HelpCenter = () => {
  return (
    <KeyboardAvoidView>
      <Image
        style={styles.tinyLogo}
        source={require("../assets/backgroundImage1.png")}
      />
      <Image
        style={styles.tinyLogo2}
        source={require("../assets/backgroundImage2.png")}
      />
      <HeadLine title="Help Center" />
      <View style={{ paddingHorizontal: wp(5.3) }}>
        <View style={{ marginBottom: hp(2.3) }}>
          <InputText style={{ backgroundColor: "white" }} />
        </View>
        <View style={{}}>
          {helpCenterMenu.map((favorite, favoriteIndex) => (
            <Fragment key={favoriteIndex}>
              <HelpCenterCard text={favorite.text} />
            </Fragment>
          ))}
        </View>
      </View>
    </KeyboardAvoidView>
  );
};

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

export default HelpCenter;
