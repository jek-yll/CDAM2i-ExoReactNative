import { StyleSheet, Text, Image, View, ScrollView, SectionList, SafeAreaView } from 'react-native'
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
        style={styles.title}
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
      <View style={styles.labelSection}>
        { meal.isGlutenFree && <Text style={styles.label}>Gluten-free</Text> }
        { meal.isVegan &&  <Text style={styles.label}> Vegan </Text> }
        { meal.isVegetarian && <Text style={styles.label}>Vegetarian</Text> }
        { meal.isLactoseFree && <Text style={styles.label}>Lactose-free</Text> }
      </View>
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
    paddingTop: 10,
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
  },
  titleSection: {
    paddingBottom: 10,
    fontWeight: 'bold', 
    marginVertical: 8,
    textAlign: 'center',
    fontSize: 20,
    borderBottomColor: '#daa786',
    borderBottomWidth: 4,
    color: '#daa786'

  },
  itemsSection: { 
    textAlign: 'center',
    backgroundColor: '#daa786',
    borderRadius: 8,
    paddingVertical: 4,
    margin: 3,
    padding: 2,
    fontSize: 15
  },
  labelSection: {
    flexDirection: 'row',
    gap: 5,
    marginBottom: 25,
    marginTop: 10
  },
  label: {
    backgroundColor: "#b8da7d",
    color: '#000000',
    padding: 8,
    borderRadius: 20
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