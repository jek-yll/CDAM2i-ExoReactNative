import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ButtonCustom from '../components/ButtonCustom'
import PokeCard from '../components/PokeCard'

export default function HomeScreen({ navigation }) {
  
  const goToPokedex = () => {
    navigation.navigate("Pokedex")
  }

  return (
    <View>
      <Text>HomeScreen</Text>
      <View style={styles.btnContainer}>
        <ButtonCustom 
          title={"Pokedex"}
          styleContainer={{
            backgroundColor: "blue",
            width: "35%"
          }}
          onPress={goToPokedex}
        />
        <ButtonCustom 
          title={"Mon équipe"}
          styleContainer={{
            backgroundColor: "purple",
            width: "35%"
          }}
        />
      </View>
      <PokeCard />
    </View>
  )
}

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})