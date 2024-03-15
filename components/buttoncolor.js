import React, { useState } from "react";
import { Text,View,Button } from "react-native";

const Buttocolors =()=>{
 const [colors,setColors] = useState();
 const Ramdomcolors =()=>{
    const colorss='0123456789ABCDEF'
    let colors123='#'
    for (let i = 0; i < 6; i++) {
       colors123 +=colorss[ Math.floor(Math.random() * 16)];
    }
    return colors123;
    }
    return(
        <View>
            <View style={{width:100,height:100,borderRadius:100,backgroundColor: colors,margin: 5}}></View>
            <Button title="doi mau" onPress={()=>setColors(Ramdomcolors())}></Button>
        </View>
    )
}
export default Buttocolors;