import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import ButtonCustom from '../components/ButtonCustom'


export default function Home({ navigation }) {
  
  const articles = [
    {
        title: "Ordinateur portable",
        price: 999.99,
        description: "Un ordinateur portable puissant avec un écran de 15 pouces."
    },
    {
        title: "Smartphone",
        price: 499.99,
        description: "Un smartphone haut de gamme avec une excellente caméra."
    },
    {
        title: "Casque sans fil",
        price: 79.99,
        description: "Un casque audio sans fil avec une autonomie de 20 heures."
    }
  ]
  
  return (
    <View>
      <ButtonCustom 
        text={"Nouvel Article"}
        styleContainer={{
          backgroundColor: "#2e3440"
        }}
        styleText={{
          color: "#ffffff"
        }}
      />
      <FlatList 
        data={articles}
        renderItem={({item}) => {
          return (
            <ButtonCustom 
              onPress = { () => navigation.navigate("Details", {item}) }
              text={item.title}
            />
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})