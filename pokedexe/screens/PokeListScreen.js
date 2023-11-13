import { StyleSheet, Text, View } from 'react-native'
import {useDispatch} from "react-redux"
import React, {useEffect} from 'react'
import { getAllPokemons } from '../store/redux/pokemonSlice'

export default function PokeListScreen() {
    
    
    const dispatch = useDispatch()
  
    useEffect(() => {
     dispatch(getAllPokemons())
    }, [])
    

    return (
    <View>
      <Text>PokeListScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})