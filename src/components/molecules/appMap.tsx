import React from "react";
import MapView from "react-native-maps";
import { StyleSheet, View } from "react-native";

export default function AppMap() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
