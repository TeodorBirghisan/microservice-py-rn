import React from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import { Input } from "react-native-elements";

const CreateProductScreen = (props) => {
  return (
    <View>
      <Input placeholder='Title for product' />
      <Input placeholder='Image for product' />
      <Button title="Save Product"/>
    </View>
  );
};

export default CreateProductScreen;