import React from "react";
import { StyleSheet, View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { BorderlessButton } from "react-native-gesture-handler";

const LanguageDropDown = () => {
  const [selected, setSelected] = React.useState("");
  const data = [
    { key: "1", value: "English", disabled: false },
    { key: "2", value: "Spanish" },
    { key: "3", value: "Hindi" },
    { key: "4", value: "French", disabled: false },
  ];
  return (
    <SelectList
      setSelected={(val: React.SetStateAction<string>) => setSelected(val)}
      data={data}
      save="value"
      placeholder="Select language"
      boxStyles={{ borderWidth: 0 }}
    />
  );
};

const styles = StyleSheet.create({});

export default LanguageDropDown;
