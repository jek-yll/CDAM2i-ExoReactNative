import { StyleSheet, Text, Image, View, ScrollView, SectionList } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const MealsDetailsScreen = ({route}) => {

  const id  = route.params.id
  const allMeals = useSelector((state) => state.meals.meals)
  const mealTab = allMeals.filter(meal => meal.id === id)
  const meal = mealTab[0]
  
  const sections = [
    { title: 'Ingredients', data: meal.ingredients },
    { title: 'Steps', data: meal.steps.map((step, index) => `${index + 1}. ${step}`) },
  ];

  const renderItem = ({ item }) => <Text style={styles.itemsSection}>{item}</Text>;

  const renderSectionHeader = ({ section: { title } }) => (
    <Text style={styles.titleSection}>{title}</Text>
  );

  console.log(meal.imageUrl)

  return (
    <ScrollView>
    <Image source={{ uri: meal.imageUrl }} style={{ width: '100%', height: 200 }} />
    <View style={styles.container}>
      <Text
        style={{
          paddingTop: 10,
          fontWeight: 'bold',
          fontSize: 24
        }}
      >{meal.title}</Text>
      <View style={{
        flexDirection: 'row',
        gap: 10,
        marginVertical: 15
      }}>
        <Text>{meal.duration} min</Text>
        <Text
          style={{
            textTransform: 'uppercase',
          }}
        >{meal.complexity}</Text>
        <Text
          style={{
            textTransform: 'uppercase',
          }}
        >{meal.affordability}</Text>
      </View>
      <SectionList
        style={{
          width: "100%",
          paddingHorizontal: 40,
        }}
        sections={sections}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
      />
      <Text>Gluten-free: {meal.isGlutenFree ? 'Yes' : 'No'}</Text>
      <Text>Vegan: {meal.isVegan ? 'Yes' : 'No'}</Text>
      <Text>Vegetarian: {meal.isVegetarian ? 'Yes' : 'No'}</Text>
      <Text>Lactose-free: {meal.isLactoseFree ? 'Yes' : 'No'}</Text>
    </View>
  </ScrollView>
  )
}

export default MealsDetailsScreen

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {

  },
  titleSection: {
    paddingBottom: 10,
    fontWeight: 'bold', 
    marginVertical: 8,
    textAlign: 'center',
    fontSize: 20,
    borderBottomColor: '#E0B497',
    borderBottomWidth: 4,
    color: '#E0B497'

  },
  itemsSection: { 
    textAlign: 'center',
    backgroundColor: '#E0B497',
    borderRadius: 8,
    paddingVertical: 4,
    margin: 3,
    padding: 2,
    fontSize: 15
  }
})



{/* <Text>Ingredients:</Text>
  {meal.ingredients.map((ingredient, index) => (
        <Text key={index}>{ingredient}</Text>
        ))}
        <Text>Steps:</Text>
        {meal.steps.map((step, index) => (
          <Text key={index}>{`${index + 1}. ${step}`}</Text>
        ))} */}