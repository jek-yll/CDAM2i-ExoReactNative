import { StyleSheet } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import MealCard from '../components/MealCard';

export default function MealsScreen({route, navigation}) {
  
  const cat = route.params.cat
  const allMeals = useSelector((state) => state.meals.meals)
  const meals = allMeals.filter(meal => meal.categoryIds.includes(cat.id))  

  const onPressMealCard = (screen, data) => {
    navigation.navigate(screen, data)
  }

  return (
    
      <FlatList
        data={meals}
        numColumns={1}
        contentContainerStyle = {{
          justifyContent: 'center',
      }}
        renderItem={(itemData, index) => (
          <ScrollView
            style={styles.container}
            contentContainerStyle={{
              justifyContent: "center",
              alignItems: 'center',
            }}
          >
            <MealCard 
              key={index}
              title={itemData.item.title}
              data={itemData.item}
              onPress={() => onPressMealCard("AboutMeal", {id: itemData.item.id})}
            />
          </ScrollView>
  )}
        keyExtractor={(item, index) => {
          return index
        }}
      >
      </FlatList>
  )
}

const styles = StyleSheet.create({
})