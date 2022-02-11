import { ScrollView, View, Text, StyleSheet, TextInput,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const Screen2 = ({ route,navigation }) => {
  //putting contact info in contact variable
  const contact = route.params.item;
  //using useState hook to edit contact info
  const [firstName,setFirstName]=useState(contact.firstName);
  const [lastName,setLastName]=useState(contact.lastName);
  const [email,setEmail]=useState(contact.email);
  const [phone,setPhone]=useState(contact.phone);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.orangeContainer}>
          <View style={styles.orange}></View>
        </View>
        

        <View style={styles.subContainer}>
          <Text style={styles.header}>Main Information</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>First Name</Text>
            <TextInput style={styles.input} value={firstName} onChangeText={(text)=>setFirstName(text)}/>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Last Name</Text>
            <TextInput style={styles.input}  value={lastName} onChangeText={(text)=>setLastName(text)} />
          </View>
        </View>
        <View style={styles.subContainer}>
          <Text style={styles.header}>Sub Information</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.input}  value={email} onChangeText={(text)=>setEmail(text)}/>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Phone</Text>
            <TextInput style={styles.input}  value={phone} onChangeText={(text)=>setPhone(text)}/>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={()=>{
        navigation.navigate('Screen1', {
          id:contact.id,
          firstName:firstName,
          lastName:lastName,
          email:email,
          phone:phone
        })
      }} ><Text style={styles.buttonText}>Save</Text></TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    
  },
  orangeContainer:{
    alignItems:'center',
    
  },
  orange: {
    height: 100,
    width: 100,
    backgroundColor: 'orange',
    borderRadius: 50,
    margin: 20,
  },
  subContainer:{
    flex:1
  },
  header: {
    paddingLeft:20,
    backgroundColor:'lightgray',
    fontSize: 25
  },
  inputContainer: {
    flexDirection: 'row',
    flex:1,
    alignItems: 'center',
    width:380
  },
  label:{
    fontSize:20,
    flex:1,
    paddingLeft:30
  },
  input: {
    flex:2,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    margin:5,
    height:35,
    borderRadius:5
  },
  button:{
    marginTop:20,
    backgroundColor:'orange',
    
    alignItems:'center'
  },
  buttonText:{
    fontSize:20,
    padding:10,
    fontWeight:'bold'
  }
})
export default Screen2