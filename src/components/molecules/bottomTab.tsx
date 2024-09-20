import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SimpleLineIcons } from "@expo/vector-icons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import Home from "../../screens/home";
import Favorite from "../../screens/favorite";
import BookMark from "../../screens/bookMark";
import Comment from "../../screens/comment";

const Tab = createBottomTabNavigator();

const AppBottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#7D57F1",
        tabBarInactiveTintColor: "#BDBDBD",
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="homepage"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="favorite"
        component={Favorite}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="favorite" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="bookmark"
        component={BookMark}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="comment-bookmark-outline"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="comment"
        component={Comment}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="commenting" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppBottomTabs;