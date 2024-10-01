import React, { useState } from "react";
import { StyleSheet, Switch, View } from "react-native";

const Toggle = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View>
      <Switch
        trackColor={{ false: "#767577", true: "#0EBE7F" }}
        // thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Toggle;
