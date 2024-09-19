import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import SearchIcon from "./icons/searchIcon";
import CancelIcon from "./icons/cancelIcon";

interface InputTextProps {
  placeholder: string;
  value?: string;
  name?: "numeric" | "email-address";
  onChangeText?: () => void;
}

const SearchArea = ({
  placeholder,
  value,
  onChangeText,
  name,
}: InputTextProps) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderWidth: 1,
        borderColor: "#E0E0E0",
        // height: hp(6.7),
        borderRadius: 6,
        paddingHorizontal: wp(5.3),
        paddingVertical: hp(2.2),
        marginTop: hp(2.2),
        marginLeft: wp(5.3),
        backgroundColor: "white",
        width: wp(89.3),
      }}
    >
      <SearchIcon />
      <TextInput
        keyboardType={name}
        style={styles.inputStyle}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
      <CancelIcon />
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    // fontSize: 14,
  },
});

export default SearchArea;
