import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactDetailsScreen({route}) {

    const contact = route.params.item

    console.log(contact);

  return (
    <View style={styles.container}>
      <Text>Nom: {contact.nom}</Text>
      <Text>Prénom: {contact.prenom}</Text>
      <Text>Email: {contact.email}</Text>
      <Text>Tel: {contact.telephone}</Text>
      <Text>Adresse: {contact.adresse}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

})