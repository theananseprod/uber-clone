import { StyleSheet, Dimensions, Image } from 'react-native'
import React from 'react'

const Map = () => {
  return (
    <Image
        style={styles.map}
        source={require('../assets/atlantaMap.jpeg')}
    />
  )
}

export default Map

const styles = StyleSheet.create({
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    }
})