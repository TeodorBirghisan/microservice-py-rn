import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, FlatList } from "react-native";
import { Button, Card } from "react-native-elements";
import { Product } from "../../interfaces/product";

const MainScreen = () => {
    const [products, setProducts] = useState([] as Product[]);

    useEffect(() => {
        (
            async () => {
                const response = await fetch('http://localhost:8001/api/products');

                const data = await response.json();

                setProducts(data);
            }
        )();
    }, []);

    const like = async (id: number) => {
        await fetch(`http://localhost:8001/api/products/${id}/like`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        });

        setProducts(products.map(
            (p: Product) => {
                if (p.id === id) {
                    if (!p.likes) {
                        p.likes = 1
                    }
                    else {
                        p.likes++;
                    }
                }

                return p;
            }
        ));
    }

    const dislike = async (id: number) => {
        await fetch(`http://localhost:8001/api/products/${id}/dislike`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        });

        setProducts(products.map(
            (p: Product) => {
                if (p.id === id) {
                    if (!p.dislikes) {
                        p.dislikes = 1
                    }
                    else {
                        p.dislikes++;
                    }
                }

                return p;
            }
        ));
    }

    const Product = ({ id, title, image, likes, dislikes }: Product) => (
        <View>
            <Card>
                <Card.Title>{title}</Card.Title>
                <Card.Divider />
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: image,
                    }}
                />
                <View style={styles.container}>
                    <Button title={"Like"} onPress={() => { like(id) }} />
                    <Button title={"Dislike"} onPress={() => { dislike(id) }} />
                    <Text style={styles.textStyle}>Likes: {likes}      Dislike: {dislikes} </Text>
                </View>
            </Card>
        </View>
    )

    const renderItem = ({ item }) => (
        <Product id={item.id} image={item.image} title={item.title} likes={item.likes} dislikes={item.dislikes} />
    )

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


const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "row",
        alignItems: "center",
    },
    tinyLogo: {
        width: 300,
        height: 300,
        alignSelf: "center"
    },
    textStyle: {
        fontSize: 20,
    },
});

export default MainScreen;
