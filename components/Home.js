import { View, Text,StyleSheet,Button } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View>
      <Text>Homesdfgsg</Text>
      <Button title='To other page' onPress={()=>navigation.navigate('')} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop:60
    }
})

export default Home