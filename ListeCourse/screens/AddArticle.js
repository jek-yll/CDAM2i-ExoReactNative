import { StyleSheet, View } from 'react-native'
import React from 'react'

export default function AddArticle() {
  return (
    <View>
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
    </View>
  )
}

const styles = StyleSheet.create({})