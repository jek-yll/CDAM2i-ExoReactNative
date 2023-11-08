import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactDetailsScreen({route}) {

    const contact = route.params.item

    console.log(contact);

  return (
    <View>
      <Text>{contact.nom}</Text>
      <Text>{contact.prenom}</Text>
      <Text>{contact.email}</Text>
      <Text>{contact.telephone}</Text>
      <Text>{contact.adresse}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})