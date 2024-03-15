import React from "react";
import {View,Text,Image,ScrollView} from 'react-native'

const Images = ({imagess,status,likes})=>{
    return(
        <View style={{justifyContent:'center'}}>
           <Image style={{height:100,width:100}} source={{uri:imagess}}/>
            <Text style={{textAlign:"center"}}>{status}</Text>
            <Text style={{textAlign:"center"}}>{likes}</Text>
        </View>
    );

};
export default Images;