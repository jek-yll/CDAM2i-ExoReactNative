import { FlatList, ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import CategorieBtn from '../components/CategorieBtn'

export default function CategoriesScreen({ navigation }) {
    const categories = useSelector(state => state.categories.categories)
  
    //console.log(categories)

    const categorieVavigate = (screen, data) => {
        navigation.navigate(screen, data)
    }

    return (
    <View style={styles.viewContainer}>
     <FlatList
        data={categories}
        numColumns={2}
        styleContainer = {{
            justifyContent: 'center',
        }}
        renderItem={(itemData, index) => (
            <ScrollView
                contentContainerStyle={{
                    justifyContent: "center"
                }}
             >
                <CategorieBtn 
                    key={index}
                    title={itemData.item.title}
                    styleContainer={{
                        backgroundColor: `${itemData.item.color}`
                    }}
                    onPress={() => categorieVavigate("Meals", {cat: itemData.item})}
                />
            </ScrollView>
        )}
        keyExtractor={(item, index) => {
            return index
        }}

    />
    </View>
  )
}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
    },  
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: "green",
    }
})