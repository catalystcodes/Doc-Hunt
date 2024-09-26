import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "../components/organisms/DrawerContent";
import AppBottomTabs from "../components/molecules/bottomTab";

const Drawer = createDrawerNavigator();
const DrawerScreens = () => {
  const { Navigator, Screen } = Drawer;
  return (
    <Navigator
      screenOptions={{ headerShown: false, drawerStyle: { width: "100%" } }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Screen name="bottomTab" component={AppBottomTabs} />
      {/* <Screen name="account settings" component={AccountSetting} /> */}
    </Navigator>
  );
};

export default DrawerScreens;
