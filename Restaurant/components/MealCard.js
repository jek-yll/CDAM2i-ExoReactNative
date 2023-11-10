import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function MealCard({
    title,
    styleContainer,
    styleTitle,
    styleImage,
    onPress, 
    data
}) {
  return (

    <Pressable onPress={onPress}>
        <View style={[styles.container, {...styleContainer}]}>
            <Image 
                source={{uri: `${data.imageUrl}`}}
                style={[styles.image, {...styleImage}]}
            />
            <View style={styles.dataDisplay}>
                <Text style={[styles.title, {...styleTitle}]}>{title}</Text>
                <View style={styles.infosBlock}>
                    <Text>{data.duration} min</Text>
                    <Text style={{textTransform: "uppercase"}}>{data.complexity}</Text>
                    <Text style={{textTransform: "uppercase"}}>{data.affordability}</Text>
                </View>
            </View>
        </View>
    </Pressable>

  )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 5,
        
    },
    container: {
        flex: 1,
        border: 'solid',
        width: 350,
        height: 300,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: 'center',
        margin: 15,
        overflow: 'hidden',
        borderWidth: 2
    },
    image: {
        flex: 2,
        width: "100%",
        height: "100%",
    },
    title: {
        flex: 1,
        fontSize: 20,
        textAlign: 'center',
        fontWeight: "bold",
        color: "grey",
    },
    dataDisplay: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: "#ffff"
    },
    infosBlock: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15,
    }
})