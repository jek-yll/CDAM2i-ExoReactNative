import React from 'react'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import About from './screens/About'
import Contacts from './screens/Contacts'
import Home from './screens/Home'

// package necessaire navigation :
// npm install @react-navigation/native
// npm install react-native-screens react-native-safe-area-context
// npm i @react-navigation/bottom-tabs

const Tab = createBottomTabNavigator()

export default function App() {
  
  return (
    <NavigationContainer>
      <Tab.Navigator>
          <Tab.Screen name='Home' component={Home}/>
          <Tab.Screen name='Contacts' component={Contacts}/>
          <Tab.Screen name='About' component={About}/>
      </Tab.Navigator>    
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})