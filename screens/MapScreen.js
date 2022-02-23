import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import FavOptions from '../components/FavOptions'
import Map from '../components/Map'
import { MaterialIcons } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-web'
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

const MapScreen = () => {

    const navigation = useNavigation();

  return (
    <View style={tw`bg-white`}>
        <TouchableOpacity
        style={tw`bg-gray-100 absolute top-16 left-8 z-50 p-6 rounded-full shadow-lg`}
        onPress={() => navigator.navigate("HomeScreen")}
        >
            <Entypo name="menu" size={24} color="black" />
        </TouchableOpacity>
        <View style={tw`h-1/2`}>
            <Map/>
        </View>
        <View style={tw`h-1/2 bg-white p-5`}>
            <Text style={tw`pt-3 pb-7 pl-3 text-lg text-center text-gray-600 font-bold`}>Good Morning, Ananse </Text>
            <View style={tw`bg-gray-200 mb-7 h-1`}></View>
            <View style={tw`m-5 p-3 flex-row bg-gray-200`}>
                <Text style={tw`text-xl font-semi-bold`}>  Where to?                                                                              </Text>
                <MaterialIcons style={tw`-pl-6`} name="car-repair" size={40} color="gray"/>
            </View>
            <FavOptions/>
            <View style={tw`bg-gray-200 h-1`}></View>
            <View style={tw`flex-row bg-white mt-auto justify-evenly`}>
                <TouchableOpacity 
                //onPress={() => navigation.navigate("RidesScreen")}
                style={tw`flex flex-row justify-between rounded-full w-30 m-4 p-4 bg-black`}>
                    <FontAwesome5 name="car" size={24} color="white" />
                    <Text styles={tw`text-white text-center text-lg font-bold`}>Rides</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                //onPress={() => navigation.navigate("EatScreen")}
                style={tw`flex flex-row justify-between rounded-full w-30 p-4 m-4`}>
                    <MaterialCommunityIcons name="silverware-fork-knife" size={24} color="black" />
                    <Text style={tw`text-center text-lg font-bold`}>Eats</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({ })