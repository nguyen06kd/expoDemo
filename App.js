import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,ScrollView,FlatList} from 'react-native';
import Images from './components/images';
import React from 'react';
import Login from './components/login';
import Dendo from './components/dendo';
import Denvang from './components/denvang';
import Denxanh from './components/denxanh';
import Flaslists from './components/flastlist';
import Colors from './components/colors';
import Sectionlists from './components/sectionlists';
import Tempe from './components/tempe';
import Buttocolors from './components/buttoncolor';
export default function App() {
  return (
      // <View style={{alignItems:'center',justifyContent:'center',flex: 1}}>
      // <Images imagess='https://reactnative.dev/img/tiny_logo.png' status='status' likes={'số like-số tim'}></Images>
      // <Images imagess='https://reactnative.dev/img/tiny_logo.png' status='hôm nay trời đẹp quá' likes={'12345likes-54321heart'}></Images>
      // <Images imagess='https://reactnative.dev/img/tiny_logo.png' status='hihi' likes={'1 likes-0hearts'}></Images>
      // </View>
    //   <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    //   <View style={[{backgroundColor: 'black',height: 330,width: 150,justifyContent:'center',alignItems:'center'}]}>
    //      <Dendo></Dendo>
    //      <Denxanh></Denxanh>
    //      <Denvang></Denvang>
    //    </View> 
 
    //  </View>
   <Buttocolors/>
  );
};


