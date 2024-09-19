import "./gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppManager from "./src/components/organisms/AppManager";
import AppRoutes from "./src/AppRoutes";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AppManager>
        <AppRoutes />
      </AppManager>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {},
});
