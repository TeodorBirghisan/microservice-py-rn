import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { Input } from "react-native-elements";

import { Product } from '../../interfaces/product';

const EditProduct = (props: any) => {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const navigation = useNavigation();

    useEffect(() => {
        (
            async () => {
                const response = await fetch(`http://localhost:8000/api/products/${props.route.params.productId}`);

                const product: Product = await response.json();
                console.log(product)
                setTitle(product.title);
                setImage(product.image)
            }
        )();
    }, []);

    const submit = async (title: string, image: string) => {
        await fetch(`http://localhost:8000/api/products/${props.route.params.productId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title,
                image
            })
        }).then(() => {
            navigation.navigate("Admin");
        });
    }

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
                    submit(title, image);
                }}
            />
        </View>
    );
}

export default EditProduct;
