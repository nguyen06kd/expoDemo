import { StyleSheet, Text, View ,ScrollView,FlatList} from 'react-native';
import React from "react";
const data=[
  {id:'1',mau:'đỏ'},
  {id:'2',mau:'Cam'},
  {id:'3',mau:'vàng'},
  {id:'4',mau:'lục'},
  {id:'5',mau:'lam'},
  {id:'6',mau:'tràm'},
  {id:'7',mau:'tím'},
]
const Flaslists =()=>{
    return (
    <FlatList
      data={data}
      renderItem={({item})=> <View style={[styles.container]}>
      <View style={[styles.view2]}></View>
    <Text style={{marginVertical:5}}>{item.mau}</Text>
    <View></View>
      </View>}
      />
    );
}
export default Flaslists;
const styles = StyleSheet.create({
    container: {
     borderRadius:5,
     border:'1px solid black',
     margin :10,
     flexDirection: 'row',
     justifyContent: 'space-between'
    },
    view2: {
      border:'1px solid',
      borderRadius:100,
      width:10,
      margin:15,
      marginTop:2,
      marginLeft:2,
      padding:5,
    },
  });