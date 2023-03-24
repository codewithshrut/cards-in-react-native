import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ScrollableCards() {
  return (
    <View>
      <Text style={styles.heading}>ScrollableCards</Text>
      <ScrollView horizontal style={styles.container}>
        <View style={styles.card}>
          <Text>1</Text>
        </View>
        <View style={styles.card}>
          <Text>2</Text>
        </View>
        <View style={styles.card}>
          <Text>3</Text>
        </View>
        <View style={styles.card}>
          <Text>4</Text>
        </View>
        <View style={styles.card}>
          <Text>5</Text>
        </View>
        <View style={styles.card}>
          <Text>6</Text>
        </View>
        <View style={styles.card}>
          <Text>7</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 40,
    paddingHorizontal: 10
  },
  container: {
    padding: 8
  },
  card: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 100,
    borderColor: '#23C4ED',
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
  }
})