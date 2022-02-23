import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { AntDesign } from '@expo/vector-icons';

const data = [
    {
        id: "113",
        title: "Work",
        icon: "rest",
        address: "1234 ABC Way, Atlanta, GA 30312"
    },
    {
        id: "114",
        title: "Launchpad",
        icon: "rocket1",
        address: "5678 TwoTwoTwo Street, Bankhead, GA 30321" 
    },
    {
        id: "115",
        title: "Bae",
        icon: "hearto",
        address: "413 Love Ave, Atlanta, GA 30333" 
    }
]

const FavOptions = () => {
  return (
    <SafeAreaView>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={ () => <View style={tw`bg-gray-100 ml-14 h-1`}/>}
        renderItem= {({item}) => (
            <TouchableOpacity
                style={tw`p-5 flex-row bg-white`}
            >
                <AntDesign style={tw`bg-gray-400 rounded-full p-3`} name={item.icon} size={30} color="white" />
                <View style={tw`pl-5`}>
                    <Text style={tw`text-lg font-bold`}>{item.title}</Text>
                    <Text style={tw`text-sm text-gray-500`}>{item.address}</Text>
                </View>
            </TouchableOpacity>
        ) }
      />
    </SafeAreaView>
  )
}

export default FavOptions

const styles = StyleSheet.create({
    icons: {
        width: 50,
        height: 50,
        resizeMode: 'contain'
    }, container: {
        flex: 1,
        resizeMode: 'contain'
    }
})