import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'

export default function ButtonCustom({ text, styleContainer, styleText, ...props}) {
  return (
    <Pressable style={[styles.container, {...styleContainer} ]} onPress={props.onPress}>
      <Text style={[styles.text, {...styleText}]}>{text ? text : "Mon texte"}</Text>
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
        fontSize: 15,
        padding: 5
    },
    containerPressed: {
        backgroundColor: "#3d9ccf",
        height: 30,
        marginVertical: 5,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 999,
    }

})