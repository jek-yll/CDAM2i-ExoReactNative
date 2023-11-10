import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CategorieBtn({
    title,
    styleContainer,
    styleTitle,
    onPress
}) {
  return (
    <Pressable>
        <View 
            style={[ styles.container, {...styleContainer} ]}
            onPress={onPress}
        >
            <Text 
                style={[styles.title, {...styleTitle}]}
            >
                {title ? title : "Categorie Btn"}
            </Text>
        </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 180,
        height: 180,
        backgroundColor: "red",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
    },
    title: {
        fontSize: 20
    }
})