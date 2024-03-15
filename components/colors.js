import React from "react";
import { Text,View,StyleSheet} from "react-native";
const Colors=()=>{
    return(
        <View style={[Styles1.container]}>
            <View style={{flex:1,backgroundColor:'red'}}><Text>Đỏ</Text></View>
            <View style={{flex:1,backgroundColor:'orange'}}><Text>Cam</Text></View>
            <View style={{flex:1,backgroundColor:'yellow'}}><Text>Vàng</Text></View>
            <View style={{flex:1,backgroundColor:'green'}}><Text>Lục</Text></View>
            <View style={{flex:1,backgroundColor:'blue'}}><Text>Lam</Text></View>
            <View style={{flex:1,backgroundColor:'indigo'}}><Text>Chàm</Text></View>
            <View style={{flex:1,backgroundColor:'violet'}}>Tím</View>
        </View>
    );
}
const Styles1=StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',  
    },
});
export default Colors