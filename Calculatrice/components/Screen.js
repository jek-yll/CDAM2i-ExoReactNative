import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Screen({ mode, display, styleDisplay, styleScreen, ...props}) {
  return (
    <View style={[styles.screen, {...styleScreen}]}>
      <Text style={[styles.display, {...styleDisplay}]}>
        {display}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
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
})