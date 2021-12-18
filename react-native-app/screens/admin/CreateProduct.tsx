import React, { useState } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { Input } from "react-native-elements";

const CreateProduct = () => {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');

    const submit = async (title: string, image: string) => {
        await fetch('http://localhost:8000/api/products', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title,
                image
            })
        }).then(() => {
            setImage("");
            setTitle("");
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

export default CreateProduct;