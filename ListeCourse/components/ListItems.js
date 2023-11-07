import { Button, FlatList, View, Text, StyleSheet, Pressable } from "react-native";
import ItemForm from "./ItemForm";
import { useState } from "react";
import ButtonCustom from "./ButtonCustom";

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
            <ButtonCustom 
                text={"AJOUTER UN ARTICLE"}
                styleContainer={{
                    borderRadius: 0,
                    height: 50,
                    marginTop: 0
                }}
                styleText={{
                    color: "#FFFF",
                    fontSize: 25
                }}
                onPress={handlerAddItem}
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