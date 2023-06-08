import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import styles from './Detail.styles'
import useFetch from '../../hooks/useFetch'
import Config from 'react-native-config'

import Loading from '../../components/UserExperience/Loading'
import Error from '../../components/UserExperience/Error'



const Detail = ({ route }) => {
    const id = route.params

    const { data, loading, error } = useFetch(`${Config.DETAIL_API_URL}?i=${id}`)

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error />
    }

    if(data.meals == null){
        return <Error />
    }

    return (
        <ScrollView style={styles.container}>
            <Image style={styles.image} source={{ uri: data.meals[0].strMealThumb }} />
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>{data.meals[0].strMeal}</Text>
                <Text style={styles.titleSubtext}>{data.meals[0].strArea}</Text>
            </View>
            <View style={styles.seperator}></View>
            <View style={styles.contentContainer}>
                <Text style={styles.contentText}>{data.meals[0].strInstructions}</Text>
            </View>
        </ScrollView>
    )
}

export default Detail