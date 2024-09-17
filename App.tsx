import "./gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppManager from "./src/components/organisms/AppManager";
import AppRoutes from "./AppRoutes";

export default function App() {
  return (
    <View>
      <AppManager>
        <AppRoutes></AppRoutes>
      </AppManager>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
