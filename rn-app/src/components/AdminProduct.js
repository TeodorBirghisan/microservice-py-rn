import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button, Image } from "react-native-elements";

const AdminProduct = (props) => {
  return (
    <View style={styles.container}>
      <Text>{props.id}</Text>
      <Image source={{ uri: props.image }} />
      <Text>{props.title}</Text>
      <Text>{props.likes}</Text>
      <View style={styles.buttonContainer}>
        <Button title={"Edit"} />
        <Button title={"Delete"} />
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
