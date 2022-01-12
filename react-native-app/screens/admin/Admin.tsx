import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View, Image, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';

import { Product } from '../../interfaces/product';

const AdminScreen = () => {
    const navigation = useNavigation();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        (
            async () => {
                const response = await fetch('http://localhost:8000/api/products');

                const data = await response.json();

                setProducts(data);
            }
        )();
    }, []);

    const deleteProduct = async (id: number) => {
        await fetch(`http://localhost:8000/api/products/${id}`, {
            method: 'DELETE'
        });

        setProducts(products.filter((p: Product) => p.id !== id));
    }

    const Product = ({ id, title, image, likes, dislikes }: Product) => (

        <View style={styles.productContainer}>
            <Text>{id}</Text>
            <Image style={styles.image} source={{ uri: image }} />
            <Text>{title}</Text>
            <Text>{likes}</Text>
            <Text>{dislikes}</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title={"Edit"}
                    onPress={() => navigation.navigate("Edit", { productId: id, image: image })}
                />
                <Button title={"Delete"} onPress={() => deleteProduct(id)} />
            </View>
        </View>
    );

    const renderItem = ({ item }) => (
        <Product id={item.id} image={item.image} title={item.title} likes={item.likes} dislikes={item.dislikes} />
    )

    return (
        <View style={styles.container}>
            <View style={styles.titlesContainer}>
                <Text>Product Id</Text>
                <Text>Image</Text>
                <Text>Title</Text>
                <Text>Likes</Text>
                <Text>Dislikes</Text>
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
    )
}

const styles = StyleSheet.create({
    container: { display: "flex" },
    titlesContainer: {
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "row",
    },
    image: {
        width: 50,
        height: 50,
    },
    buttonContainer: {
        display: "flex",
        justifyContent: "flex-end",
        flexDirection: "row",
    },
    productContainer: {
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "row",
    },
});

export default AdminScreen;