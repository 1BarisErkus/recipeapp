import React from 'react'
import { View, FlatList } from 'react-native'
import useFetch from '../../hooks/useFetch'
import Config from 'react-native-config'

import Loading from '../../components/UserExperience/Loading'
import Error from '../../components/UserExperience/Error'

import CategoryCard from '../../components/CategoryCard'

const CategoryList = ({navigation}) => {
    const { data, loading, error } = useFetch(Config.CATEGORIES_API_URL)

    const handleSelect = (categoryName) => {
        navigation.navigate('ProductScreen', categoryName)
    }

    const renderCategories = ({ item }) => <CategoryCard category={item} onSelect={() => handleSelect(item.strCategory)} />

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error />
    }

    return (
        <View>
            <FlatList
                data={data.categories}
                renderItem={renderCategories}
            />
        </View>
    )
}

export default CategoryList