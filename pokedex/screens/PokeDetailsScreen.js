import { StyleSheet, Text, View, Image } from 'react-native'
import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchText } from '../store/redux/pokemonSlice'

export default function PokeDetailsScreen({route}) {
    const data = route.params
    const dispatch = useDispatch()
    const details = useSelector(state => state.pokemons.text)
    const [text, setText] = useState('')
    console.log(details);
    

    //setText('Toto')

    useEffect(() => {
        //setText(dispatch(fetchText(data.id)))
        console.log(details);
    }, [])



  return (
    <View>
      <View style={styles.imageContainer}>
        <Image
         source={{uri: data.sprites.front_default}}
         style={{width: 100, height: 100}}
        />
      </View>
      <Text style={styles.title}>{data.name}</Text>
      <View>
        <Text style={styles.subtitle}>Détails</Text>
        <Text>{text}</Text>
        <View>
            <Text>Height : {data.height}</Text>
            <Text>Weight : {data.weight}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        textAlign: 'center'
    },
    imageContainer: {
        justifyContent: "center",
        alignItems: 'center',
    },
    subtitle: {
        fontWeight: "bold",
        fontSize: 20
    }
})