import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const MealsDetailsScreen = ({route}) => {

  const id  = route.params.id
  const allMeals = useSelector((state) => state.meals.meals)
  const mealTab = allMeals.filter(meal => meal.id === id)
  const meal = mealTab[0]
  
  console.log(meal)

  return (
    <View>
      <Text>MealsDetailsScreen</Text>
      <Text>Id : {id}</Text>
      <Text>Titre : {meal.title}</Text>
    </View>
  )
}

export default MealsDetailsScreen

const styles = StyleSheet.create({})