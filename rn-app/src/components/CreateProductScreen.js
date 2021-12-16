import React, { useState, useEffect } from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import { Input } from "react-native-elements";

import { postProductAdmin, updateProductAdmin } from "../endpoints/Endpoints";

const CreateProductScreen = (props) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  // const isEdit = props.route.params.isEdit;

  const handleProductOperation = async (title, image) => {
    const body = {
      title: title,
      image: image,
    };
    await postProductAdmin(body).then(() => {
      setImage("");
      setTitle("");
    });
  };

  return (
    <View>
      <Input
        placeholder="Title for product"
        value={title}
        onChangeText={(text) => {
          setTitle(text);
        }}
      />
      <Input
        placeholder="Image for product"
        value={image}
        onChangeText={(text) => {
          setImage(text);
        }}
      />
      <Button
        title="Save Product"
        onPress={() => {
          handleProductOperation(title, image);
        }}
      />
    </View>
  );
};

export default CreateProductScreen;
