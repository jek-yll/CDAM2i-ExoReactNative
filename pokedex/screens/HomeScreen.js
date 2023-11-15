import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import ButtonCustom from '../components/ButtonCustom'
import PokeCard from '../components/PokeCard'
import { useDispatch } from 'react-redux'
import { fetchPokemons } from '../store/redux/pokemonSlice'

export default function HomeScreen({ navigation }) {
  
  const dispatch = useDispatch()

  const goToPokedex = () => {
    navigation.navigate("Pokedex")
  }

  useEffect(()=>{
    dispatch(fetchPokemons())
  }, [])

  return (
    <View>

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

    </View>
  )
}

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})