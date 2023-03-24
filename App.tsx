import { SafeAreaView, Text, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ScrollableCards from './components/ScrollableCards'
import ImageCard from './components/ImageCard'
import PortfolioCard from './components/PortfolioCard'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards></FlatCards>
        <ScrollableCards />
        {/* <ImageCard /> */}
        <PortfolioCard />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App