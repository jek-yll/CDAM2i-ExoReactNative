import { StyleSheet, Text, View, SectionList } from 'react-native'
import React from 'react'

const ListItems = ({
  data
}) => {

  console.log(data)
  
  return (
      <SectionList 
        sections={data} 
        renderItem={({item}) => (
          <View style={styles.items}>
            <Text>{item}</Text>
          </View>
        )}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.title}>{title}</Text>
        )}
        keyExtractor={(item, index) => item + index}
      />
  )
}

export default ListItems

const styles = StyleSheet.create({
  title: {
    fontSize: 20
  },
  items: {
    height: 100,
    backgroundColor: "red",
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1
  }
})