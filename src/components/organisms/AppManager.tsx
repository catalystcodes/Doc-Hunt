import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { ReactNode } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import KeyboardAvoidView from "../molecules/KeyboardAvoidView";
import { Provider } from "react-redux";
import AuthProvider from "../../context";
import { persistor, store } from "../../store";
import { PersistGate } from "redux-persist/integration/react";

const AppManager = ({ children }: { children: ReactNode }) => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaProvider>
            <NavigationContainer>
              <AuthProvider>
                <StatusBar backgroundColor="black" />
                {children}
              </AuthProvider>
            </NavigationContainer>
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default AppManager;
