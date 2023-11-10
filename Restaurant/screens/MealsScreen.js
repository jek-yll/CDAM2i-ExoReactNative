import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function MealsScreen({route}) {
  
  const cat = route.params.cat
  
  return (
    <View>
      <Text>{cat.title}</Text>
      <Text>Catégorie id : {cat.id}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})