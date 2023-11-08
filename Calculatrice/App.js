import { StyleSheet, Switch, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ButtonCustom from './components/ButtonCustom'
import Screen from './components/Screen'

export default function App() {
    const [display, setDisplay] = useState("0")
    const [calcul, setCalcul] = useState("")
    const [isEnabled, setIsEnabled] = useState(false);
    const [mode, setMode] = useState("darkMode")

    const toggleSwitch = () => {
        if (isEnabled) {
            setMode("darkMode")
        } else {
            setMode("lightMode")
        }
        setIsEnabled(previousState => !previousState);
    }

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
            <View style={styles.titleContainer}>
            <Text style={styles.title}>Calculatrice 3000</Text>
            <Switch 
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                onValueChange={toggleSwitch}
                value={isEnabled}
            />            
            </View>
            <Screen 
                display={display}
                mode={mode}
            />
            <View style={styles.btnContainer}>
                <View style={styles.btnsRow}>
                    <ButtonCustom
                        title={"AC"}
                        onPress = {() => handleBtnPress('AC')}
                    />
                    <ButtonCustom
                        title={"^"}
                        onPress = {() => handleBtnPress('^')}
                    />
                    <ButtonCustom
                        title={"%"}
                        onPress = {() => handleBtnPress('%')}
                    />
                    <ButtonCustom
                        title={"/"}
                        onPress = {() => handleBtnPress('/')}
                    />
                </View>
                <View style={styles.btnsRow}>
                    <ButtonCustom
                        isCercle
                        title={"7"}
                        onPress = {() => handleBtnPress('7')}
                    />
                    <ButtonCustom
                        isCercle
                        title={"8"}
                        onPress = {() => handleBtnPress('8')}
                    />
                    <ButtonCustom
                        isCercle
                        title={"9"}
                        onPress = {() => handleBtnPress('9')}
                    />
                    <ButtonCustom
                        title={"X"}
                        onPress = {() => handleBtnPress('*')}
                    />
                </View>
                <View style={styles.btnsRow}>
                    <ButtonCustom
                        isCercle
                        title={"4"}
                        onPress = {() => handleBtnPress('4')}
                    />
                    <ButtonCustom
                        isCercle
                        title={"5"}
                        onPress = {() => handleBtnPress('5')}
                    />
                    <ButtonCustom
                        isCercle
                        title={"6"}
                        onPress = {() => handleBtnPress('6')}
                    />
                    <ButtonCustom 
                        title={"-"}
                        onPress = {() => handleBtnPress('-')}
                    />
                </View>
                <View style={styles.btnsRow}>
                    <ButtonCustom
                        isCercle
                        title={"1"}
                        onPress = {() => handleBtnPress('1')}
                    />
                    <ButtonCustom
                        isCercle
                        title={"2"}
                        onPress = {() => handleBtnPress('2')}
                    />
                    <ButtonCustom
                        isCercle
                        title={"3"}
                        onPress = {() => handleBtnPress('3')}
                    />
                    <ButtonCustom 
                        title={"+"}
                        onPress = {() => handleBtnPress('+')}
                    />
                </View>
                <View style={styles.btnsRow}>
                    <ButtonCustom
                        isCercle
                        title={"."}
                        onPress = {() => handleBtnPress('.')}
                    />
                    <ButtonCustom
                        isCercle
                        title={"0"}
                        onPress = {() => handleBtnPress('0')}
                    />
                    <ButtonCustom
                        isCercle
                        title={"Del"}
                        onPress = {() => handleBtnPress('Del')}
                    />
                    <ButtonCustom 
                        title={"="}
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
    titleContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
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