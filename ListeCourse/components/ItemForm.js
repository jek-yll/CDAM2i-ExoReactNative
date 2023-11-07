import { Button, Modal, Pressable, StyleSheet, TextInput, View, Text } from "react-native";
import { useState } from "react";

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

    const onPressHandler = () => {
        
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
                    onPress={handlerAddItem}
                />
                <Button 
                    style={styles.button}
                    title="Annuler"
                    color="red"
                    onPress={() => setModalVisible(false)}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Pressable 
                    style={styles.button}
                    onPress={onPressHandler}
                >
                    <Text style={styles.textButton}>
                        AJOUTER
                    </Text>
                </Pressable>
                <Pressable style={[styles.button, styles.buttonCancel]}>
                    <Text style={styles.textButton}>
                        ANNULER  
                    </Text>
                </Pressable>
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
    },
    button: {
        flex: 1,
        height: 30,
        marginHorizontal: 30,
        marginVertical: 5,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        backgroundColor: "#3d9ccf", 
    },
    buttonCancel: {
        backgroundColor: "#de585b"
    },
    textButton: {
        color: "#ffff"
    }
})
 
export default ItemForm;