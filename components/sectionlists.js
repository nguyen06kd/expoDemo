import React from "react";
import { SectionList,ScrollView,Image,Text,View } from "react-native";
const DATA = [
    {
        title:'Laptop',
      data: ['Pizza', 'Burger', 'Risotto'],
    },
    {
        title:'Điện thoại',
      data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    },
    { title:'Tv',
      data: ['Water', 'Coke', 'Beer'],
    },
  ];
const Sectionlists =()=>{
    return(
        <SectionList
            sections={DATA}
  
            renderItem={({item}) => (
                <View>
                    <Text>{item}</Text>
                </View>
            )}
            renderSectionHeader={({section:{title}})=>(
                <Text>{title}</Text>
            )}
        />
       
    );
}
export default Sectionlists;