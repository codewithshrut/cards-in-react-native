import { Linking, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function PortfolioCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.heading}>My Portfolio</Text>
      <View style={[styles.card, styles.cardElevation]}>
        <Image 
            source={require('../images/Profile.jpg')}
            alt="Profile"
            style={styles.profile}
        />
        <View style={styles.contentView}>
            <Text style={styles.name}>Shrutika Dorugade</Text>
            <Text style={styles.intro}>I am a Software Engineer at Accenture having decent knowledge of Spring Boot and MERN Stack</Text>
            <Text style={styles.connect}>Connect with me via</Text>
            <View style={styles.socialMediaHub}>
                <TouchableOpacity
                    onPress={() => openWebsite('https://www.linkedin.com/in/shrutika-dorugade-990b84189/')}
                >
                    <Image 
                        source={require('../images/linkedin.png')}
                        alt="LinkedIn"
                        style={styles.account}
                    />
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => openWebsite('https://www.instagram.com/thecodearcher/')}
                >
                    <Image 
                        source={require('../images/instagram.png')}
                        alt="Instagram"
                        style={styles.account}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => openWebsite('https://hashnode.com/@codewithshrut')}
                >
                    <Image 
                        source={require('../images/hashnode.png')}
                        alt="Hashnode"
                        style={styles.account}
                    />
                </TouchableOpacity>
            </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 40,
        paddingHorizontal: 10,
        paddingBottom: 10,
        color: '#6A1B4D'
    },
    card: {
        borderWidth: 1,
        margin: 20,
        borderColor: 'red'
    },
    cardElevation: {
        elevation: 6,
        backgroundColor: 'white',
        shadowOffset: {
            width: 4,
            height: 4
        },
        shadowColor: '#FF6263',
        shadowOpacity: 0.7,
        shadowRadius: 1,
    },
    profile: {
        height: 300,
        width: 351,
    },
    contentView: {
        marginHorizontal: 30,
        marginVertical: 20
    },
    name: {
        fontSize: 30,
        paddingBottom: 5
    },
    intro: {
        fontSize: 16,
        paddingBottom: 30
    },
    connect: {
        fontSize: 18,
        paddingBottom: 20
    },
    socialMediaHub: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    account: {
        height: 50,
        width: 50
    },
})