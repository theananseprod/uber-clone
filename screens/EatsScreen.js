import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const foodOrderOptions = [
  {
    id:"223",
    title: "Grocery",
    image: require('../assets/groceryBag_icon.png')
  },
  {
    id: "224",
    title: "Prescription",
    image: require('../assets/prescription_icon.png')
  },
  {
    id: "225",
    title: "Top Eats",
    image: require('../assets/topEats_icon.png')
  },
  {
    id: "226",
    title: "Quick Delivery",
    image: require('../assets/fastDelivery_icon.png')
  }
]

const EatsScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white`}>
      <View style={tw`flex-row bg-white justify-evenly`}>
        <TouchableOpacity 
          style={tw`flex rounded-full w-40 p-4 m-4 bg-black`}>
          <Text style={tw`text-center text-white text-lg font-bold`}>Delivery</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={tw`flex rounded-full w-40 p-4 m-4`}>
          <Text style={tw`text-center text-lg font-bold`}>Pickup</Text>
        </TouchableOpacity>
      </View>
      <View style={tw`flex p-2 m-4`}>
        <Text style={tw`bg-gray-200 rounded-full font-bold text-lg text-black p-4`}>Search Food</Text>
      </View>
      <View style={tw`bg-black p-10`}>
        <Text style={tw`text-xl font-bold text-white`}>$0 Delivery Fee</Text>
        <Text style={tw`text-xl font-bold text-white`}>from</Text>
        <Text style={tw`text-xl font-bold text-white`}>Slutty Vegan ATL</Text>
        <TouchableOpacity style={tw`rounded-full m-10 p-4 w-20 bg-white`}>
          <Text style={tw`text-center`}>Get Now</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        data={foodOrderOptions}
        renderItem={({item}) => (
          <TouchableOpacity 
          style={tw`bg-white p-7 justify-evenly`}>
            <View>
              <Image
                style={styles.options}
                source={item.image}
              />
              <Text style={tw`pt-4 pb-4 text-center font-bold`}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
      <View style={tw`bg-gray-200 h-1`}></View>
      <View style={tw`flex-row bg-white mt-auto justify-evenly p-4`}>
        <TouchableOpacity 
          style={tw`flex flex-col items-center w-40 p-4 m-4`}>
            <SimpleLineIcons style={tw`p-2`} name="home" size={24} color="gray" />
            <Text style={tw`text-center text-gray-300 text-lg font-bold`}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={tw`flex flex-col items-center w-40 p-4 m-4`}>
            <AntDesign style={tw`p-2`} name="search1" size={24} color="gray" />
            <Text style={tw`text-center text-gray-300 text-lg font-bold`}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={tw`flex flex-col items-center w-40 p-4 m-4`}>
            <Feather style={tw`p-2`} name="shopping-bag" size={24} color="gray" />
            <Text style={tw`text-center text-gray-200 text-lg font-bold`}>Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={tw`flex flex-col items-center w-40 p-4 m-4`}>
            <AntDesign style={tw`p-2`} name="user" size={24} color="gray" />
            <Text style={tw`text-center text-gray-200 text-lg font-bold`}>Account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default EatsScreen

const styles = StyleSheet.create({
  options: {
    width: 100,
    height: 100,
    resizeMode: 'contain'
  }
})