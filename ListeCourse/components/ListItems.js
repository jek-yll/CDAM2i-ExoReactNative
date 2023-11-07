import { Button, FlatList, View, Text, StyleSheet, Pressable } from "react-native";
import ItemForm from "./ItemForm";
import { useState } from "react";

const ListItems = () => {

    const [modalVisible, setModalVisible] = useState(false)
    const [items, setItems] = useState([
        { text: "banane" , id: "12"},
        { text: "tomate" , id: "13"}
    ])

    const handlerAddItem = () => {
        setModalVisible(true)
    }

    const deleteItem = (id) => {
        //console.log(id);
        setItems(items.filter( i => i.id !== id ))
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
                            <Pressable style={styles.itemContainer} onPress={() => deleteItem(itemData.item.id)}>
                                <Text style={styles.textItem}>
                                    {itemData.item.text}
                                </Text>
                            </Pressable>
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