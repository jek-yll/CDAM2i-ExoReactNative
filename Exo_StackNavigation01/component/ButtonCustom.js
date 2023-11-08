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
    <Pressable style={[styles.carre, {...styleContainer} ]} onPress={onPress}>
      <Text style={[styles.textCarre, {...styleText}]}>{title ? title : "Mon texte"}</Text>
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
    carre: {
      backgroundColor: "#9ba4b7",
      width: "100%",
      height: 45,
      borderRadius: 25,
      justifyContent: "center",
      alignItems: "center",
      marginVertical: 3
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