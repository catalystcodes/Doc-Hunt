import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import React from "react";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { DrawerActions } from "@react-navigation/native";
import { drawerItems } from "../../constantData";

const DrawerContent = (props: any) => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        style={{
          display: "flex",
        }}
      >
        <Text
          onPress={() => {
            navigation.dispatch(DrawerActions.closeDrawer());
          }}
        >
          Close
        </Text>
        {/* <View style={{ marginLeft: 20, marginTop: 10 }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 50,
              justifyContent: "space-between",
            }}
          >
            <Pressable
              style={{
                paddingRight: 20,
                paddingVertical: 10,
              }}
              onPress={() => {
                navigation.dispatch(DrawerActions.closeDrawer());
              }}
            >
              <Image source={require(`../../assets/images/close.png`)} />
            </Pressable>
            <Text style={{ fontSize: 20, fontWeight: "400" }}>Menu</Text>
            <Text />
          </View>
          {drawerItems.map((menuItem, itemIndex) => (
            <Pressable
              key={itemIndex}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 26,
              }}
              //   onPress={() => {
              //     navigation.navigate(menuItem.name);
              //   }}
            >
              <Image source={menuItem.icon} />
              <Text
                style={{
                  marginLeft: 20,
                  fontSize: 16,
                  fontWeight: "300",
                  textTransform: "capitalize",
                }}
              >
                {menuItem.name}
              </Text>
            </Pressable>
          ))}
          <Pressable
          // onPress={() => {
          //   navigation.navigate("");
          // }}
          >
            <Text style={styles.signOutText}>Sign Out</Text>
          </Pressable>
        </View> */}
      </DrawerContentScrollView>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  signOutText: {
    textAlign: "center",
    marginTop: 326,
    fontWeight: "700",
    fontSize: 16,
    color: "#7D57F1",
  },
});
