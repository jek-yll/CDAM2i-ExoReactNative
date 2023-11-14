import { StyleSheet } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './screens/HomeScreen'
import PokeListScreen from './screens/PokeListScreen'
import PokeFavScreen from './screens/PokeFavScreen'
import { Provider } from 'react-redux'
import store from './store/store'
import PokeDetailsScreen from './screens/PokeDetailsScreen'

const Stack = createStackNavigator()

export default function app() {
  
    
  
    return (
    <Provider store={store}>
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name='Home' component={HomeScreen}/>
                <Stack.Screen name='Pokedex' component={PokeListScreen}/>
                <Stack.Screen name='Details' component={PokeDetailsScreen}/>
                <Stack.Screen name='Team' component={PokeFavScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({})