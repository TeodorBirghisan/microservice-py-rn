import React from "react";
import { StyleSheet, Text, View } from "react-native";

const AdminScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.titlesContainer}>
        <Text>Product Id</Text>
        <Text>Image</Text>
        <Text>Title</Text>
        <Text>Likes</Text>
        <Text>Action (Delete, Update)</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { display: "flex" },
  titlesContainer: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
  },
});

export default AdminScreen;
