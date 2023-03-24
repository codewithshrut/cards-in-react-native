import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.heading}>FlatCards</Text>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
            }}
            style={styles.cardImage}
            alt="JavaScript"
          />
        </View>
        <View style={styles.card}>
        <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfouR_Up1TmQ7PS1f385SYIduxdrbwX2a8Lxgva8tJwwCm4sYPDQNFMo053YBC3MijuBA&usqp=CAU'
            }}
            style={styles.cardImage}
            alt="Java"
          />
        </View>
        <View style={styles.card}>
        <Image
            source={{
              uri: 'https://i.pinimg.com/originals/c2/6a/58/c26a58af112f4cad08629893409f32c5.jpg'
            }}
            style={styles.cardImage}
            alt="Python"
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 40,
    paddingHorizontal: 10
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8
  },
  card: {
    height: 100,
    width: 100,
    margin: 10
  },
  cardImage: {
    height: 100
  }
})