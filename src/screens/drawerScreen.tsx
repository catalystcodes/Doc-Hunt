import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "../components/organisms/DrawerContent";
import AppBottomTabs from "../components/molecules/bottomTab";
import MyDoctors from "./myDoctors";
import MedicalRecord from "./medicalRecord";
import PaymentPage from "./paymentPage";
import MedicineOrder from "./medicineOrder";
import TestBookings from "./testBookings";
import PrivacynPolicy from "./privacynPolicy";
import HelpCenter from "./helpCenter";
import Setting from "./setting";
import { RootStackParams } from "../utils/types";

const Drawer = createDrawerNavigator<RootStackParams>();
const DrawerScreens = () => {
  const { Navigator, Screen } = Drawer;
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: "100%",
          backgroundColor: "#6F7FA1",
        },
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Screen name="bottomTab" component={AppBottomTabs} />
      <Screen name="myDoctorPage" component={MyDoctors} />
      <Screen name="medicalRecordPage" component={MedicalRecord} />
      <Screen name="paymentPage" component={PaymentPage} />
      <Screen name="medicineOrderPage" component={MedicineOrder} />
      <Screen name="testBookingPage" component={TestBookings} />
      <Screen name="privacyAndPolicyPage" component={PrivacynPolicy} />
      <Screen name="helpCenterPage" component={HelpCenter} />
      <Screen name="settingPage" component={Setting} />
    </Navigator>
  );
};

export default DrawerScreens;
