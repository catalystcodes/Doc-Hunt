import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Steps = ({ activeStep, steps = 1 }) => {
  return (
    <View style={styles.stepsWrapper}>
      {Array(steps)
        .fill("")
        .map((_, stepIndex) => (
          <View
            key={stepIndex}
            style={[styles.step, activeStep === stepIndex && styles.activeStep]}
          />
        ))}
    </View>
  );
};

export default Steps;

const styles = StyleSheet.create({
  stepsWrapper: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8,
  },
  step: {
    backgroundColor: "#BDBDBD",
    width: 10,
    height: 10,
    borderRadius: 100,
  },
  activeStep: {
    backgroundColor: "#7D57F1",
  },
});
