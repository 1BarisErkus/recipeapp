import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './ProductCard.styles'

const ProductCard = ({ product, onSelect }) => {
    return (
        <TouchableOpacity onPress={onSelect}>
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: product.strMealThumb }} />
                <View style={styles.inner_container}>
                    <Text style={styles.title}>{product.strMeal}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ProductCard