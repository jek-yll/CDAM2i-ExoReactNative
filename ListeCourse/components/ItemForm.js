import { Modal, StyleSheet, TextInput, View } from "react-native";
import { useState } from "react";
import ButtonCustom from "./ButtonCustom";

const ItemForm = ({visible, setModalVisible, setItems}) => {

    const [textInput, setTextInput] = useState("")

    const handlerTextInput = (newText) => {
        setTextInput(newText)
    }

    const handlerAddItem = () => {
        setItems(prev => [...prev, {text: textInput, id: Date.now().toString()}])
        setModalVisible(false)
        setTextInput("")
    }

    return ( 
        <Modal visible={visible} style={styles.container}>
            <TextInput
                style={styles.input} 
                value={textInput}
                onChangeText={handlerTextInput}
            />
            <View style={styles.buttonContainer}>
                <ButtonCustom 
                    text={"AJOUTER"}
                    styleContainer={{
                        backgroundColor: "#3d9ccf",
                        width: 150
                    }}
                    styleText={{
                        color: "#FFFF"
                    }}
                    onPress={handlerAddItem}   
                />
                <ButtonCustom 
                    text={"ANNULER"}
                    styleContainer={{
                        backgroundColor: "#de585b",
                        width: 150
                    }}
                    styleText={{
                        color: "#FFFF"
                    }}
                    onPress={() => setModalVisible(false)}
                />
            </View>
        </Modal>
     );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    input: {
        alignSelf: "center",
        height:50,
        width: 200,
        margin: 20,
        borderWidth: 0.75,
        padding: 10,
        borderRadius: 25
    }, 
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around"
    }
})
 
export default ItemForm;