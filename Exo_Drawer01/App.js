import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import PageA from './screens/PageA'
import PageB from './screens/PageB'
import PageC from './screens/PageC'

// package necessaire navigation :
// npm install @react-navigation/native
// npm install react-native-screens react-native-safe-area-context
// npm i @react-navigation/drawer
// npm i react-native-gesture-handler
// npm i react-native-reanimated


const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()

const MyBtn = () => {
  return(
  <Pressable onPress={() => {console.log("My Btn");}}>
    <View>
    <Text>Clique</Text>
    </View>
  </Pressable>
  )
}

function MyStack() {
  return(
    <Stack.Navigator>
      <Stack.Screen 
        name='PageA' 
        component={PageA} options={{
        title: "Home"
      }}/>
      <Stack.Screen 
        name='PageC' 
        component={PageC} 
        options={{
          //headerShown: true,
          headerRight: MyBtn
      }}/>
    </Stack.Navigator>
  )
}

function MyDrawer() {
  return(
  <Drawer.Navigator>
    <Drawer.Screen 
      name='MyStack' 
      component={MyStack} 
      options={{headerShown: false}} 
    />
    <Drawer.Screen name='PageB' component={PageB} />
  </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
        <MyDrawer></MyDrawer>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})