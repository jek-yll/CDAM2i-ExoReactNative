import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function PageA() {

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text>PageA</Text>
      <Button 
        title='Aller page C'
        onPress={() => navigation.navigate("PageC")}
      />
      <Button 
        title='Ouvrir Drawer'
        onPress={() => navigation.openDrawer()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red"
  }

})