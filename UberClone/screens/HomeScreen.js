//rnfes 

import { StyleSheet, Text, View, } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import tw from 'tailwind-react-native-classnames';

const HomeScreen = () => {
  return (
      //safeareaview prevent in going content above notification bar 
    <SafeAreaView style = {tw`bg-white h-full`}>
      <Text style = {tw`text-blue-500 p-10`}>I am home screen</Text>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    text:{
        color: "blue",
    }
})