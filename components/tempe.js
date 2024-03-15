import React, { useState } from "react";
import { Text,View,Button } from "react-native";


const Tempe =()=>{
    const [temps,settemps]=useState(25);

    return(
        <View>
            <Text>Nhiet do : {temps}</Text>
            <Button title="+" onPress={()=>settemps(temps+1)} />
            <Button title="-" onPress={()=>settemps(temps-1)} />
        </View>
      
    )
}
export default Tempe;