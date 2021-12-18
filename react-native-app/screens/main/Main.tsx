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
                    p.likes++;
                }

                return p;
            }
        ));
    }

    const Product = ({ id, title, image, likes }: Product) => (
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
                    <Button title={"Like"} onPress={() => {like(id)}} />
                    <Text style={styles.textStyle}>Likes: {likes}</Text>
                </View>
            </Card>
        </View>
    )

    const renderItem = ({ item }) => (
        products.map(
            () => {
                return (<Product id={item.id} image={item.image} title={item.title} likes={item.likes} />)
            }
        )
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
    },
    tinyLogo: {
        width: 200,
        height: 200,
    },
    textStyle: {
        fontSize: 20,
    },
});

export default MainScreen;
