import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'


export default function PokeCard({
    styleContainer,
    styleTitle,
    onPress,
    title,
    imgUrl,
    typeA,
    typeB
}) {

  return (
    <Pressable onPress={onPress}>
        <View style={[styles.container, {...styleContainer}]}>
        <Text style={[styles.title, {...styleTitle}]}>{title ? title : "Nom Pokémon"}</Text>
        <View style={styles.infos}>
            <View>
                <Text style={styles.type}>{typeA ? typeA : "Type A"}</Text>
                {
                    typeB &&
                    <Text style={styles.type}>{typeB ? typeB : "Type B"}</Text>
                }
            </View>
            <Image 
                source={imgUrl ? {uri: imgUrl} : {uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png"}}
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
        width:190,
        height: 120,
        borderRadius: 25,
        padding: 10,
        margin: 5,
        elevation: 5
    },
    infos: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    type: {
        textAlign: 'center',
        backgroundColor: "rgba(75, 71, 71, 0.41)",
        color: "#FFFF",
        padding: 5,
        borderRadius: 13,
        margin: 3,
    },
    title : {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5
    }
})  