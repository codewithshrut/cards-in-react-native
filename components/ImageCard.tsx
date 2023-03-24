import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react';

export default function ImageCard() {
  return (
    <View>
        <Text style={styles.heading}>ImageCard</Text>
        <Image
            source={require('../images/desk.jpg')}
            style={styles.cardImage}
            alt="Developer Desk"
        />
    </View>
  )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 40,
        paddingHorizontal: 10
    },
    cardImage: {
        height: 200,
        width: 350,
        marginTop: 20,
        marginLeft: 20
    }
})