import React from "react";
import { useNavigation } from "@react-navigation/core";
import { StyleSheet, View, Text } from "react-native";
import { Button, Image } from "react-native-elements";

import { deleteProductAdmin } from "../endpoints/Endpoints";

const AdminProduct = (props) => {
  const navigation = useNavigation();

  const deleteProduct = async (productId) => {
    await deleteProductAdmin(productId)
  }

  return (
    <View style={styles.container}>
      <Text>{props.id}</Text>
      <Image style={styles.image} source={{ uri: props.image }} />
      <Text>{props.title}</Text>
      <Text>{props.likes}</Text>
      <View style={styles.buttonContainer}>
        <Button
          title={"Edit"}
          onPress={() => navigation.navigate("Add", { isEdit: true, productId: props.id, image: props.image })}
        />
        <Button title={"Delete"} onPress={() => deleteProduct(props.id)}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  container: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
  },
});

export default AdminProduct;
