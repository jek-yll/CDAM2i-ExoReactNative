import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Geolocation from './@react-native-community/geolocation'
import axios from 'axios'

// npm i @react-native-community/geolocation
// ajout de la ligne : android/app/src/main/AndroidManifest.xml
// <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" /

const API_KEY = "aG858mYDyms6xcHCYKFFcxgzQcsPUlYG"

export default function App() {

    const [latitude, setLatitude] = useState(null)
    const [longitude, setLongitude] = useState(null)
    const [getPosition, setGetPosition] = useState(true)
    const [localisationFetch, setLocalisationFetch] = useState()

    useEffect(() => {
        Geolocation.requestAuthorization()
        Geolocation.getCurrentPosition(position => {
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
        },
            error => console.log(error),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        )
    }, [getPosition])

    const reload = () => {
        setGetPosition(state => !state)
    }

    const getMaLoc = async () => {
        try {
            const response = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/searchsearch?apikey=${API_KEY}=${latitude}%2C${longitude}`)
            console.log(response.data);
            // setMaVille(response.data...)
        } catch (error) {
            console.error(error.message)
        }

    }


    return (
        <View>
            <Text>latitude : {latitude} </Text>
            <Text>longitude : {longitude} </Text>
            <Text>ma ville : {maVille}</Text>
            <Button 
                title='Refresh'
                onPress={reload}
            />
            <Button title='ma ville'></Button>
        </View>
    )
}

const styles = StyleSheet.create({})