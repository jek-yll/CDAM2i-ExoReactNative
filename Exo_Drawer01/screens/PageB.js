import {  StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function PageB() {
  const navigation = useNavigation()
  
  return (
    <View style={styles.container}>
      <Text>PageB</Text>
      <Button 
        title='Aller page C'
        onPress={() => navigation.navigate("PageC")}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue"
  }
})