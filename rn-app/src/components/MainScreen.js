import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";

import Product from "./Product";

import products from "../constants/MockData";

const Main = (props) => {
  const Item = ({ id, title, image, likes }) => (
    <View>
      <Product id={id} title={title} image={image} likes={likes} />
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
    <View>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Main;
