import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

interface InputTextProps {
  placeholder: string;
  value?: string;
  name?: string;
  onChangeText?: () => void;
}

const InputText = ({
  placeholder,
  value,
  onChangeText,
  name,
}: InputTextProps) => {
  return (
    <View>
      <TextInput
        keyboardType={name}
        style={styles.inputStyle}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
    fontSize: 14,
    height: hp(6.7),
    borderRadius: 12,
    paddingLeft: wp(6.7),
    marginTop: hp(2.2),
  },
});

export default InputText;
