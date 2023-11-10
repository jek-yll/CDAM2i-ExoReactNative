import { FlatList, ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import CategorieBtn from '../components/CategorieBtn'

export default function CategoriesScreen() {
    const categories = useSelector(state => state.categories.categories)
  
    //console.log(categories)

    const categorieVavigate = () => {

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
                    onPress={categorieVavigate}
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