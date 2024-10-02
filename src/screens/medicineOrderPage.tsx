import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
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
    <View>
      <HeadLine title="Medicines orders" />
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
  );
};

export default MedicineOrderPage;

const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    columnGap: wp(4),
    rowGap: hp(1.8),
    flexWrap: "wrap",
  },
});
