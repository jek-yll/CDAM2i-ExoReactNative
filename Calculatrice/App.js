import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ButtonCustom from './components/ButtonCustom'

export default function App() {
    const [display, setDisplay] = useState("0")
    const [calcul, setCalcul] = useState("")

    const handleBtnPress = (value) => {
        if (value === "="){
            try {
                const resultat = eval(calcul)
                setDisplay(resultat.toString())
                setCalcul(resultat.toString())
            } catch (error) {
                setDisplay("Error")
            }
        } else if (value ==="AC") {
            setDisplay("0")
            setCalcul("")
        } else if (value === "Del"){
            if (calcul.length <= 1){
                setDisplay("0")
                setCalcul("")
            } else {
                let calculTab = calcul.split("")
                calculTab.pop()
                const newCalcul = calculTab.join('')
                setDisplay(newCalcul)
                setCalcul(newCalcul)
            }
        } else  {
            setCalcul(calcul + value)
            setDisplay(calcul + value)
        } 
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Calculatrice 3000</Text>
            <View style={styles.screen}>
                <Text style={styles.display}>
                    {display}
                </Text>
            </View>
            <View style={styles.btnContainer}>
                <View style={styles.btnsRow}>
                    <ButtonCustom
                        text={"AC"}
                        onPress = {() => handleBtnPress('AC')}
                    />
                    <ButtonCustom
                        text={"^"}
                        onPress = {() => handleBtnPress('^')}
                    />
                    <ButtonCustom
                        text={"%"}
                        onPress = {() => handleBtnPress('%')}
                    />
                    <ButtonCustom
                        text={"/"}
                        onPress = {() => handleBtnPress('/')}
                    />
                </View>
                <View style={styles.btnsRow}>
                    <ButtonCustom
                        isCercle
                        text={"7"}
                        onPress = {() => handleBtnPress('7')}
                    />
                    <ButtonCustom
                        isCercle
                        text={"8"}
                        onPress = {() => handleBtnPress('8')}
                    />
                    <ButtonCustom
                        isCercle
                        text={"9"}
                        onPress = {() => handleBtnPress('9')}
                    />
                    <ButtonCustom
                        text={"X"}
                        onPress = {() => handleBtnPress('*')}
                    />
                </View>
                <View style={styles.btnsRow}>
                    <ButtonCustom
                        isCercle
                        text={"4"}
                        onPress = {() => handleBtnPress('4')}
                    />
                    <ButtonCustom
                        isCercle
                        text={"5"}
                        onPress = {() => handleBtnPress('5')}
                    />
                    <ButtonCustom
                        isCercle
                        text={"6"}
                        onPress = {() => handleBtnPress('6')}
                    />
                    <ButtonCustom 
                        text={"-"}
                        onPress = {() => handleBtnPress('-')}
                    />
                </View>
                <View style={styles.btnsRow}>
                    <ButtonCustom
                        isCercle
                        text={"1"}
                        onPress = {() => handleBtnPress('1')}
                    />
                    <ButtonCustom
                        isCercle
                        text={"2"}
                        onPress = {() => handleBtnPress('2')}
                    />
                    <ButtonCustom
                        isCercle
                        text={"3"}
                        onPress = {() => handleBtnPress('3')}
                    />
                    <ButtonCustom 
                        text={"+"}
                        onPress = {() => handleBtnPress('+')}
                    />
                </View>
                <View style={styles.btnsRow}>
                    <ButtonCustom
                        isCercle
                        text={"."}
                        onPress = {() => handleBtnPress('.')}
                    />
                    <ButtonCustom
                        isCercle
                        text={"0"}
                        onPress = {() => handleBtnPress('0')}
                    />
                    <ButtonCustom
                        isCercle
                        text={"Del"}
                        onPress = {() => handleBtnPress('Del')}
                    />
                    <ButtonCustom 
                        text={"="}
                        onPress = {() => handleBtnPress('=')}
                    />
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000000"
    },
    title: {
        fontSize: 40,
        color: "#FFFF"
    },
    screen: {
        flex: 1,
        backgroundColor: "#b6dde9",
        marginBottom: 10,
        borderRadius: 15,
        paddingHorizontal: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    display: {
        fontSize: 100,
    },
    btnContainer: {
        flex: 2,
    },
    btnsRow: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
    }
})