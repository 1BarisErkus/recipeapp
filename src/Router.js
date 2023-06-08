import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import CategoryList from './pages/CategoryList'
import ProductList from './pages/ProductList'
import Detail from './pages/Detail'

const Stack = createNativeStackNavigator()

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: '#fcba03',
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: 'white' },
          headerTitleStyle: {fontWeight: 'bold', fontSize: 20}
        }}
      >
        <Stack.Screen name="CategoryScreen" component={CategoryList} options={{headerTitle: 'Kategoriler'}} />
        <Stack.Screen name="ProductScreen" component={ProductList} options={{headerTitle: 'Ürünler'}} />
        <Stack.Screen name="DetailScreen" component={Detail} options={{headerTitle: 'Ürün Detay'}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router