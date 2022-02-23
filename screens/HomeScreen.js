import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-web'
import tw from 'tailwind-react-native-classnames'
import NavOptions from '../components/NavOptions'
import FavOptions from '../components/FavOptions'
import { Entypo } from '@expo/vector-icons';

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white`}>
        <View style={tw`p-5`}>
            <Image
                source={require('../assets/uber_icon.png')}
                style={styles.img}
            />
            <NavOptions />
            <Text style={tw`pt-7 pb-7 pl-3 text-xl text-gray-600 font-bold`}>Go again</Text>
            <FavOptions/>
        </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    img: {
        width: 200,
        height: 200,
        resizeMode: 'contain'
    },
})