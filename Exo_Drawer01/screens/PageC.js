import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function PageC() {
  return (
    <View style={styles.container}>
      <Text>PageC</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "green"
      }
})