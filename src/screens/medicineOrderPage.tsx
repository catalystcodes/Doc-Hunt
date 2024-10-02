import React from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import HeadLine from "../components/molecules/headeLine";
import InputText from "../components/atoms/inputText";
import { medicineOrderCardDetails } from "../constantData";
import MedicineOrderCard from "../components/molecules/medicineOrderCard";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const MedicineOrderPage = () => {
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
      <HeadLine title="Medicines orders" />
      <View
        style={{
          paddingHorizontal: wp(5.3),
        }}
      >
        <InputText style={{ backgroundColor: "white" }} />
        <View style={styles.main}>
          {medicineOrderCardDetails.map((favorite, favoriteIndex) => (
            <Pressable key={favoriteIndex}>
              <MedicineOrderCard
                text={favorite.details}
                source={favorite.image}
              />
            </Pressable>
          ))}
        </View>
      </View>
    </View>
  );
};

export default MedicineOrderPage;

const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    columnGap: wp(4),
    rowGap: hp(1.8),
    flexWrap: "wrap",
    marginTop: hp(3),
  },
  tinyLogo: {
    position: "absolute",
  },
  tinyLogo2: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
});
