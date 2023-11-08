import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'

export default function ButtonCustom({ 
    title, 
    styleContainer, 
    styleText, 
    isCercle, 
    onPress
  }) {
  return (
    <Pressable style={[isCercle ? styles.cercle : styles.carre, {...styleContainer} ]} onPress={onPress}>
      <Text style={[isCercle ? styles.textCercle : styles.textCarre, {...styleText}]}>{title ? title : "Mon texte"}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#3d9ccf",
        height: 30,
        marginVertical: 5,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 999,
    },
    text: {
        color: "#2e3440",
        fontSize: 24,
    },
    cercle: {
      backgroundColor: "#FFFF",
      width: 85,
      height: 85,
      borderRadius: 9999999,
      justifyContent: "center",
      alignItems: "center"
    },
    carre: {
      backgroundColor: "#9ba4b7",
      width: 85,
      height: 85,
      borderRadius: 25,
      justifyContent: "center",
      alignItems: "center"
    },
    textCercle: {
      color: "#2e3440",
      fontSize: 24,
    }, 
    textCarre: {
      color: "#FFFF",
      fontSize: 24,
    }
})