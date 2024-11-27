import React, { useState } from "react";

import AntDesign from "@expo/vector-icons/AntDesign";
import {
  KeyboardType,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import HideIcon from "./icons/hideIcon";

type InputTextProps = TextInputProps & { type?: "password" | "text" };

const InputText = (props: InputTextProps) => {
  const { type, secureTextEntry, ...otherProps } = props;

  const [hidePassword, setHidePassword] = useState(true);

  return (
    <View>
      <TextInput
        {...otherProps}
        style={[styles.inputStyle, otherProps.style]}
        secureTextEntry={type === "password" ? hidePassword : secureTextEntry}
      />
      {type === "password" && (
        <View
          style={{
            position: "absolute",
            right: 0,
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            zIndex: 10,
            // backgroundColor: "#fff",
            width: wp(14),
          }}
        >
          <Pressable onPress={() => setHidePassword((prev) => !prev)}>
            {hidePassword ? (
              <AntDesign name="eye" size={18} color="#677294" />
            ) : (
              <HideIcon />
            )}
          </Pressable>
        </View>
      )}
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
    zIndex: 1,
  },
});

export default InputText;
