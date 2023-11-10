import { StyleSheet, Text, SafeAreaView, Image, View, ScrollView } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import MealCard from './../components/MealCard';
import ListItems from '../components/ListItems';


const MealsDetailsScreen = ({route}) => {

  const id  = route.params.id
  const allMeals = useSelector((state) => state.meals.meals)
  const mealTab = allMeals.filter(meal => meal.id === id)
  const meal = mealTab[0]
  
  const DATA = [
    {
      title: 'ingredients',
      data: meal.ingredients
    },
    {
      title: 'étapes',
      data: meal.steps
    }
  ]

  console.log(meal.imageUrl)

  return (
    <View style={styles.container}> 
      <SafeAreaView >
            <View style={{
              backgroundColor: "Green"
            }}>
              <Image 
                source={{uri: `${meal.imageUrl}`}}
                style={styles.image}
              ></Image>
            </View>
            <View style={{
                backgroundColor: "Green"
              }}>
              <Text style={styles.title}>{meal.title}</Text>
              <Text>{meal.duration} min | {meal.complexity} | {meal.affordability}</Text>
            </View>
      </SafeAreaView>
            <ListItems 
              title={"Ingredients"}
              data={DATA}
            />
    </View>
  )
}

export default MealsDetailsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 'auto',
    height: 150,  
    resizeMode: 'cover'
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  }
})