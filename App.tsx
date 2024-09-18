import "./gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppManager from "./src/components/organisms/AppManager";
import AppRoutes from "./src/AppRoutes";

export default function App() {
  return (
    <AppManager>
      <AppRoutes />
    </AppManager>
  );
}

const styles = StyleSheet.create({
  container: {},
});
