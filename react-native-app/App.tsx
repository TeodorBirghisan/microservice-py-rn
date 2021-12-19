import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BottomNav from './screens/BottomNavigator';
import EditProduct from './screens/admin/EditProduct';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="BottomNav"
          component={BottomNav}
          options={{ headerShown: false, title: "Main App" }}
        />
        <Stack.Screen name="Edit" component={EditProduct} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
