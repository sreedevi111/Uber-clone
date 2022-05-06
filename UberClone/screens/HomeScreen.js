//rnfes 

import { StyleSheet, Text, View, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import tw from 'tailwind-react-native-classnames';

const HomeScreen = () => {
  return (
      //safeareaview prevent in going content above notification bar 
    <SafeAreaView style = {tw`bg-white h-full`}>
     <View style= {tw`p-5`}>
        <Image 
            style={{
                width: 100,
                 height: 100, 
                 resizeMode:'contain',
            }}
            source={{
                uri: "https://links.papareact.com/gzs"
                //uniform resource identifier similar to url
            }}
        />
     </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    text:{
        color: "blue",
    }
})