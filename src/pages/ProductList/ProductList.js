import React from 'react'
import { View, FlatList } from 'react-native'
import useFetch from '../../hooks/useFetch'
import Config from 'react-native-config'

import Loading from '../../components/UserExperience/Loading'
import Error from '../../components/UserExperience/Error'

import ProductCard from '../../components/ProductCard'

const ProductList = ({ route, navigation }) => {
    const categoryName = route.params

    const { data, loading, error } = useFetch(`${Config.FOODS_API_URL}?i=${categoryName}`)

    const handleSelect = (id) => {
        navigation.navigate('DetailScreen', id)
    }

    const renderProduct = ({ item }) => <ProductCard product={item} onSelect={() => handleSelect(item.idMeal)} />

    if (loading) {
        return <Loading />
    }

    if (error) {
         <Error />
    }

    if(data.meals == null){
        return <Error />
    }

    return (
        <View>
            <FlatList
                data={data.meals}
                renderItem={renderProduct}
            />
        </View>
    )
}

export default ProductList