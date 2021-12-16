import React, { useState, useEffect } from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import { Input } from "react-native-elements";

import {
  postProductAdmin,
  updateProductAdmin,
  getOneProductAdmin,
} from "../endpoints/Endpoints";

const CreateProductScreen = (props) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const isEdit = props.route.params.isEdit;

  const saveProduct = async (title, image) => {
    const body = {
      title: title,
      image: image,
    };
    await postProductAdmin(body).then(() => {
      setImage("");
      setTitle("");
    });
  };

  const editProduct = async (title, image, productId) => {
    const body = {
      title: title,
      image: image,
    };
    await updateProductAdmin(body, productId).then(() => {
      setImage("");
      setTitle("");
    });
  };

  if (!isEdit) {
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
            saveProduct(title, image);
          }}
        />
      </View>
    );
  } else if (isEdit) {
    useEffect(() => {
      getOneProductAdmin(props.route.params.productId).then((res) => {
        setImage(res.image);
        setTitle(res.title);
      });
    }, [])
  
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
            editProduct(title, image, props.route.params.productId);
          }}
        />
      </View>
    );
  }
};

export default CreateProductScreen;
