import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function PortfolioCard1() {
  return (
    <View>
      <Text style={styles.heading}>My Portfolio</Text>
      <View style={styles.card}>
   
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
          
                <Image 
                    source={require('../images/linkedin.png')}
                    alt="LinkedIn"
                    style={styles.account}
                />
                <Image 
                    source={require('../images/instagram.png')}
                    alt="Instagram"
                    style={styles.account}
                />
                <Image 
                    source={require('../images/hashnode.png')}
                    alt="Hashnode"
                    style={styles.account}
                />
           
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
    profile: {
        height: 300,
        width: 350,
    },
    card: {
      borderWidth: 2,
      margin: 20,
      borderColor: 'red',
    },
    imageView: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
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
      paddingBottom: 14
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