import React from "react";
import { StyleSheet, View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { BorderlessButton } from "react-native-gesture-handler";

const CurrencyDropDown = () => {
  const [selected, setSelected] = React.useState("");
  const data = [
    { key: "1", value: "$-USD", disabled: false },
    { key: "2", value: "€-Euro" },
    { key: "3", value: "£-Pound" },
    { key: "4", value: "₹-Rupee", disabled: false },
    { key: "5", value: "₦-Naira" },
  ];
  return (
    <SelectList
      setSelected={(val: React.SetStateAction<string>) => setSelected(val)}
      data={data}
      save="value"
      placeholder="Select Currency"
      boxStyles={{ borderWidth: 0 }}
    />
  );
};

const styles = StyleSheet.create({});

export default CurrencyDropDown;
