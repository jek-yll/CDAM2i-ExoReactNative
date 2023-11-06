import { Button, FlatList, ScrollView, View, Text } from "react-native";
import ItemForm from "./ItemForm";
import { useState } from "react";

const ListItems = () => {

    const [modalVisible, setModalVisible] = useState(false)
    const [items, setItems] = useState([
        { text: "banane", id:1 },
        { text: "tomate", id:2 }
    ])

    const handlerAddItem = () => {
        setModalVisible(true)
        console.log("object");
    }

    return ( 
        <View>
            <Button 
                title="Ajouter un Article"
                onPress={handlerAddItem}
            />
            
            <FlatList 
                    data={items}
                    renderItem={(itemData) => {
                        return(
                            <View>
                                <Text>
                                    {itemData.item.text}
                                </Text>
                            </View>
                        )
                    }}
                    keyExtractor={(item, index) => {
                        return index
                    }}
                />

            <ItemForm visible={modalVisible}/>

        </View>
     );
}
 
export default ListItems;