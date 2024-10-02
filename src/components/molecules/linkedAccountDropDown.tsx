import React from "react";
import { StyleSheet, View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { BorderlessButton } from "react-native-gesture-handler";

const LinkedAccountDropDown = () => {
  const [selected, setSelected] = React.useState("");
  const data = [
    { key: "1", value: "Facebook", disabled: false },
    { key: "2", value: "Google" },
    { key: "3", value: "Github" },
  ];
  return (
    <SelectList
      setSelected={(val: React.SetStateAction<string>) => setSelected(val)}
      data={data}
      save="value"
      placeholder="Facebook, Google"
      boxStyles={{ borderWidth: 0 }}
      searchPlaceholder=""
    />
  );
};

const styles = StyleSheet.create({});

export default LinkedAccountDropDown;
