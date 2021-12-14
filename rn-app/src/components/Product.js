import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Button, Card } from "react-native-elements";

const Product = (props) => {
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
        <View>
          <Button title={"Like"} />
          <Text>Likes: {props.likes}</Text>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    width: 200,
    height: 200,
  },
});

export default Product;
