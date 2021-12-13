import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Icon } from "react-native-elements";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import Main from "../main/Main";

const Tab = createMaterialBottomTabNavigator();

const BottomNav = (props) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Main" component={Main} />
    </Tab.Navigator>
  );
};

export default BottomNav;
