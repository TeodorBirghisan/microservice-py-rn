import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Icon } from "react-native-elements";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import Main from "./MainScreen";
import AdminScreen from "./AdminScreen";
import ProductScreen from "./CreateProductScreen";

const Tab = createMaterialBottomTabNavigator();

const BottomNav = (props) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Admin" component={AdminScreen} />
      <Tab.Screen name="Main" component={Main} />
      <Tab.Screen
        name="Add"
        component={ProductScreen}
        initialParams={{ isEdit: false }}
      />
    </Tab.Navigator>
  );
};

export default BottomNav;
