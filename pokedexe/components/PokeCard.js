import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function PokeCard({
    styleContainer,
    styleTitle,
    onPress
}) {
  return (
    <Pressable onPress={onPress}>
        <View style={[styles.container, {...styleContainer}]}>
        <Text style={[styles.title, {...styleTitle}]}>Nom Pokemon</Text>
        <View style={styles.infos}>
            <View>
                <Text style={styles.type}>TypeA</Text>
                <Text style={styles.type}>TypeB</Text>
            </View>
            <Image 
                source={{uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png"}}
                style={{width: 100, height: 100}}
            />
        </View>
        </View>    
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "pink",
        width:"50%",
        height: 120,
        borderRadius: 25,
        padding: 10
    },
    infos: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 5
    },
    type: {
        backgroundColor: "#FFFF",
        padding: 5,
        borderRadius: 13,
        margin: 3
    },
    title : {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5
    }
})  