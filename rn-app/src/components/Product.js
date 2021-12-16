import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Button, Card } from "react-native-elements";

import { postLikeProductMain } from "../endpoints/Endpoints";

const Product = (props) => {
  const likeProduct = async (productId) => {await postLikeProductMain(productId)};

  return (
    <View>
      <Card>
        <Card.Title>{props.title}</Card.Title>
        <Card.Divider />
        <Image
          style={styles.tinyLogo}
          source={{
            uri: props.image,
          }}
        />
        <View style={styles.container}>
          <Button title={"Like"} onPress={()=>{likeProduct(props.id)}}/>
          <Text style={styles.textStyle}>Likes: {props.likes}</Text>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  tinyLogo: {
    width: 200,
    height: 200,
  },
  textStyle: {
    fontSize: 20,
  },
});

export default Product;
