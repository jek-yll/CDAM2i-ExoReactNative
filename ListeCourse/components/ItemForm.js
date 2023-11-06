import { Button, Modal, StyleSheet, TextInput, View } from "react-native";
import { useState } from "react";

const ItemForm = ({visible}) => {

    const [textInput, setTextInput] = useState("")

    const handlerTextInput = (newText) => {
        setTextInput(newText)
    }

    return ( 
        <Modal visible={visible} style={styles.container}>
            <TextInput
                style={styles.input} 
                value={textInput}
                onChangeText={handlerTextInput}
            />
            <View style={[styles.buttonContainer]}>
                <Button 
                    style={styles.button}
                    title="Ajouter"
                />
                <Button 
                    style={styles.button}
                    title="Annuler"
                    color="red"
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
        height: 40,
        width: 150,
        margin: 20,
        borderWidth: 1,
        padding: 10
    }, 
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "center"
    },
    button: {
        margin: 5
    }
})
 
export default ItemForm;