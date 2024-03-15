import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet,TextInput, Image} from 'react-native';

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row'}}>
      <Text style={styles.title}>Username</Text>
      <TextInput
        style={styles.input}
        placeholder="Tên đăng nhập"
      
      />
        </View>
        <View style={{flexDirection:'row'}}>
      <Text style={styles.title}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="password"
        secureTextEntry={true}
      />
        </View>
    
      <TouchableOpacity style={styles.button}  >
        <Text style={styles.buttonText}>login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[{margin:5,borderRadius:0,backgroundColor:'#1E90FF',flexDirection:'row'}]}>
        <Image style={[{height:30,width:30,margin:5}]} source={{uri:'https://img.idesign.vn/2023/02/idesign_logogg_1.jpg'}}></Image>
        <Text style={[styles.buttonText,{margin:5,marginVertical:6}]}>sign in with google</Text>
      </TouchableOpacity>
    </View>
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    margin: 7
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default Login;