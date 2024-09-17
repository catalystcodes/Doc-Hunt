import { NavigationContainer } from "@react-navigation/native";
import React, { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const AppManager = ({ children }: { children: ReactNode }) => {
  return (
    <View>
      <SafeAreaProvider>
        <NavigationContainer>{children}</NavigationContainer>
      </SafeAreaProvider>
    </View>
  );
};

const styles = StyleSheet.create({});

export default AppManager;
