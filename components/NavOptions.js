import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const data = [
    {
        id: '111',
        title: 'Get A Ride',
        image: require('../assets/car_icon.png'),
        screen: "MapScreen"
    },
    {
        id: "112",
        title: "Order Food",
        image: require('../assets/food_icon.png'),
        screen: "EatsScreen" 
    }
]

const NavOptions = () => {

  const navigation = useNavigation();

  return (
    <FlatList
        horizontal
        data={data}
        renderItem={({item}) => (
            <TouchableOpacity 
            onPress={() => navigation.navigate(item.screen)}
            style={tw`p-4 m-2 bg-gray-100`}>
                <View>
                    <Image
                        style={styles.options}
                        source={item.image}
                    />
                    <Text style={tw`pt-4 pb-4 text-left-align font-bold`}>{item.title}</Text>
                </View>
                <AntDesign style={tw`bg-black p-2 rounded-full w-10 mt-4`}
                    name="arrowright"
                    size={22}
                    color="white"
                />
            </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
    />
  )
}

export default NavOptions

const styles = StyleSheet.create({
    options: {
        width: 200,
        height: 200,
        resizeMode: 'contain'
    }
})