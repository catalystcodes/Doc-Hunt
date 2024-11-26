import React from "react";
import { StyleSheet, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParams } from "./utils/types";

//screen
import SignUp from "./screens/signUp";
import Login from "./screens/logIn";
import AppBottomTabs from "./components/molecules/bottomTab";
import PopularDoc from "./screens/popularDoc";
import AppointmentSchedule from "./screens/appointmentSchedule";
import DrawerScreens from "./screens/drawerScreen";
import AddRecord from "./screens/addRecord";
import AllRecord from "./screens/allRecord";
import AppOnboarding from "./components/organisms/AppOnboarding";
import { useSelector } from "react-redux";

const Stack = createStackNavigator<RootStackParams>();

const AppRoutes = () => {
  const { Navigator, Screen } = Stack;
  const appReducer: any = useSelector<any>((state) => state.appReducer);

  return (
    <View style={styles.container}>
      <Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="appOnboarding"
      >
        {!appReducer.onBoarding && (
          <Screen name="appOnboarding" component={AppOnboarding} />
        )}
        <Screen name="signUp" component={SignUp} />
        <Screen name="login" component={Login} />
        <Screen name="drawerTab" component={DrawerScreens} />
        <Screen name="popularDocFullPage" component={PopularDoc} />
        <Screen name="addRecordPage" component={AddRecord} />
        <Screen name="allRecord" component={AllRecord} />
      </Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});

export default AppRoutes;
