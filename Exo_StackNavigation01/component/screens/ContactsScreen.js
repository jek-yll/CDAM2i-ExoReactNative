import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import ButtonCustom from '../ButtonCustom'

export default function ContactsScreen({ navigation }) {

  const contacts = [
    {
        nom: "Doe",
        prenom: "John",
        telephone: "123-456-7890",
        email: "john.doe@example.com",
        adresse: "123 Main Street, City, Country"
    },
    {
        nom: "Smith",
        prenom: "Jane",
        telephone: "987-654-3210",
        email: "jane.smith@example.com",
        adresse: "456 Elm Street, Town, Country"
    },
    {
        nom: "Johnson",
        prenom: "Bob",
        telephone: "555-123-4567",
        email: "bob.johnson@example.com",
        adresse: "789 Oak Street, Village, Country"
    },
    {
      nom: "Johnson",
      prenom: "Bob",
      telephone: "555-123-4567",
      email: "bob.johnson@example.com",
      adresse: "789 Oak Street, Village, Country"
    }
]

  return (
    <View>
      <FlatList 
        data={contacts}
        renderItem={({item}) => {
          return(
            <ButtonCustom 
              onPress={() => navigation.navigate("ContactDetailsScreen", {item})} 
              title={item.prenom}

            />
          )
        }   
      }
      />

    </View>
  )
}

const styles = StyleSheet.create({})