import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ButtonCustom({
    title,
    styleContainer,
    styleTitle,
    onPress
}) {
  return (
    <Pressable style={[styles.container, {...styleContainer}]} onPress={onPress}>
      <Text style={[styles.title, {...styleTitle}]}>{title ? title :  "Mon Bouton"}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "red",
        borderRadius: 15
    },
    title: {
        color: '#FFFF',
        fontSize: 16,
        padding: 7
    }
})