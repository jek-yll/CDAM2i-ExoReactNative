import { StyleSheet,SafeAreaView, Text, View } from 'react-native'
import {useDispatch, useSelector} from "react-redux"
import React, {useEffect, useState} from 'react'
import { fetchPokemon, fetchPokemons } from '../store/redux/pokemonSlice'
import { FlatList } from 'react-native-gesture-handler'
import PokeCard from '../components/PokeCard'

export default function PokeListScreen({ navigation }) {
    
  const {pokemons, pokedex} = useSelector(state => state.pokemons)
  const dispatch = useDispatch()
  

  const getTypeColor = (type) => {
    switch (type.toLowerCase()) {
      case 'normal':
        return '#a8a878';
      case 'fire':
        return '#f08030';
      case 'fighting':
        return '#c03028';
      case 'water':
        return '#6890f0';
      case 'flying':
        return '#a890f0';
      case 'grass':
        return '#78c850';
      case 'poison':
        return '#a040a0';
      case 'electric':
        return '#f8d030';
      case 'ground':
        return '#e0c068';
      case 'psychic':
        return '#f85888';
      case 'rock':
        return '#b8a038';
      case 'ice':
        return '#98d8d8';
      case 'bug':
        return '#a8b820';
      case 'dragon':
        return '#7038f8';
      case 'ghost':
        return '#705898';
      case 'dark':
        return '#705848';
      case 'steel':
        return '#b8b8d0';
      case 'fairy':
        return '#ee99ac';
      default:
        return '#a8a878';
    }
  }

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        for (const pokemon of pokemons) {
          await dispatch(fetchPokemon(pokemon.url));
        }
      } catch (error) {
        console.error(`Erreur lors de la récupération des détails des Pokémon: ${error.message}`);
      }
    };

    if (pokemons.length > 0) {
      fetchPokemonDetails();
    }
  }, [pokemons]);

  const goToDetails = (data) => {
    navigation.navigate('Details', data)
  }

  return (
    <SafeAreaView>
      <FlatList
        data={pokedex}
        keyExtractor={(item, index) => index}
        numColumns={2}
        contentContainerStyle={[styles.flatlist, {
        }]}
        renderItem={({item}) => 
        <PokeCard 
          title={item.name}
          imgUrl={item.sprites.front_default}
          typeA={item.types[0].type.name}
          typeB={ item.types.length > 1 ? item.types[1].type.name : undefined}
          styleContainer={{
            backgroundColor: getTypeColor(item.types[0].type.name)
          }}
          onPress={() => {
            goToDetails(item)
          }}
        />}
      >
      </FlatList>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  flatlist: {
    justifyContent: 'center',
    alignItems: 'center',
  }
})