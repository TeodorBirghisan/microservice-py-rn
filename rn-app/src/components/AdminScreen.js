import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Image, ListItem } from "react-native-elements";

import { getAllProductsAdmin } from "../endpoints/Endpoints";

import AdminProduct from "./AdminProduct";

const AdminScreen = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProductsAdmin().then((response) => {
      setProducts(response);
    });
  }, []);

  const Item = ({ id, title, image, likes }) => (
    <View>
      <AdminProduct id={id} title={title} image={image} likes={likes} />
    </View>
  );

  const renderItem = ({ item }) => (
    <Item
      id={item.id}
      title={item.title}
      image={item.image}
      likes={item.likes}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.titlesContainer}>
        <Text>Product Id</Text>
        <Text>Image</Text>
        <Text>Title</Text>
        <Text>Likes</Text>
        <Text>Action (Delete, Update)</Text>
      </View>
      <View>
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
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
