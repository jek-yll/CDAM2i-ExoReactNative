import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ArticleDetails({ route }) {

  const article = route.params.item

  return (
    <View>
      <Text>{article.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})