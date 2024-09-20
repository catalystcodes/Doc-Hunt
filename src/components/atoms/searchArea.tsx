import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import SearchIcon from "./icons/searchIcon";
import CancelIcon from "./icons/cancelIcon";
import KeyboardAvoidView from "../molecules/KeyboardAvoidView";

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
    <View>
      <View
        style={{
          marginHorizontal: wp(5.3),
          backgroundColor: "#ffff",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: wp(5.3),
          paddingVertical: hp(2.2),
          borderRadius: 6,
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
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    flex: 1,

    marginBottom: 6,
  },
});

export default SearchArea;
