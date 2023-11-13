import { StyleSheet, Text, View, Button, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategorieBtn from '../components/CategorieBtn'
import AsyncStorage from '@react-native-async-storage/async-storage'
import MealCard from '../components/MealCard'

export default function FavorisScreen() {

    const [value, setValue] = useState([])


    const getData = async () => {
        try {
            const maValue = await AsyncStorage.getItem('favorisMeals')
            console.log(maValue);
            if (maValue !== null) {
                setValue(JSON.parse(maValue))
            }
        } catch (error) {
            console.log(error)
        }
    }

    console.log(value[0]);

    useEffect(() => {
        //console.log(value);
        getData()
    }, [])


    return (
        <View>
            <FlatList
                data={value[1]}
                numColumns={1}
                contentContainerStyle={{
                    justifyContent: 'center',
                }}
                renderItem={(itemData, index) => (
                    <ScrollView
                        style={styles.container}
                        contentContainerStyle={{
                            justifyContent: "center",
                            alignItems: 'center',
                        }}
                    >
                        <MealCard
                            key={index}
                            title={itemData.item.title}
                            data={itemData.item}
                            onPress={() => onPressMealCard("AboutMeal", { id: itemData.item.id })}
                        />
                    </ScrollView>
                )}
                keyExtractor={(item, index) => {
                    return index
                }}
            >
            </FlatList>
        </View>
    )
}

const styles = StyleSheet.create({})