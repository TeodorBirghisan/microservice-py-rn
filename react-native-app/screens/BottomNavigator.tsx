import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import AdminScreen from "./admin/Admin";
import MainScreen from "./main/Main";
import CreateProduct from "./admin/CreateProduct";

const Tab = createMaterialBottomTabNavigator();

const BottomNav = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Admin" component={AdminScreen} />
            <Tab.Screen name="Main" component={MainScreen} />
            <Tab.Screen
                name="Add"
                component={CreateProduct}
                initialParams={{ isEdit: false }}
            />
        </Tab.Navigator>
    )
}

export default BottomNav;