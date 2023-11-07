import { Button, FlatList, ScrollView, View, Text, StyleSheet } from "react-native";
import ItemForm from "./ItemForm";
import { useState } from "react";

const ListItems = () => {

    const [modalVisible, setModalVisible] = useState(false)
    const [items, setItems] = useState([
        { text: "banane" },
        { text: "tomate" }
    ])

    const handlerAddItem = () => {
        setModalVisible(true)
    }

    return ( 
        <View>
            <Button 
                title="Ajouter un Article"
                onPress={handlerAddItem}
                styles= {styles.textBtn}
            />
            
            <FlatList 
                    data={items}
                    renderItem={(itemData) => {
                        return(
                            <View style={styles.itemContainer}>
                                <Text style={styles.textItem}>
                                    {itemData.item.text}
                                </Text>
                            </View>
                        )
                    }}
                    keyExtractor={(item, index) => {
                        return index
                    }}
                />

            <ItemForm visible={modalVisible} setModalVisible={setModalVisible} setItems={setItems}/>

        </View>
     );
}

const styles = StyleSheet.create({
    itemContainer: {
        border: 1,
        backgroundColor: "#a953ff",
        margin: 4,
        borderRadius: 25
    },
    textItem: { 
        color: "#ffffff",
        fontSize: 20,
        textAlign: "center"
    },
    textBtn: {
        fontSize: 40
    }
})

export default ListItems;