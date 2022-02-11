import {ScrollView, View, Text,StyleSheet,Button,FlatList,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Data from '../data.json';

const Screen1 = ({route,navigation}) => {
  //Contacts data retrieved from json file
  const [jsonData,setJsonData]=useState(Data);
  
  //Here, I am unsure of how to update the particular contact data 
  // useEffect(()=>{
  //    setJsonData({
  //     firstName:route.params.firstName,
  //     lastName:route.params.lastName,
  //     email:route.params.email0,
  //     phone:route.params.phone,
  //   })
  // },[route.params])

  return (
      // Rendering each contact as a FlatList item, on pressing TouchableOpacity, users will navigate to Screen2
      <FlatList
        style={{flex:1}}
        data={jsonData}
        renderItem={({item}) => 
          <View style={styles.contactContainer}>
            <View style={styles.orange}></View>
            <TouchableOpacity 
            onPress={()=>navigation.navigate('Screen2',{item})}  
            style={styles.contact}>
                <Text style={styles.text}>{item.firstName+' '+item.lastName}</Text>
            </TouchableOpacity>
          </View>
          }
      />
    
  )
}

const styles = StyleSheet.create({
    contactContainer:{
      flexDirection:'row',
      flex:1,
      
    },
    orange:{
      height:50,
      width:50,
      backgroundColor:'orange',
      borderRadius:50,
      margin:10,
    },
    contact: {
      width:300,
      justifyContent:'center',
      borderBottomColor:'gray',
      borderBottomWidth:1
    },
    text:{
      color:'black',
      fontSize:25
    }
})

export default Screen1