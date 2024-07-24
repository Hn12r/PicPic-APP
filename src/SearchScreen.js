import { StyleSheet, Text, View, TextInput, Touchable, TouchableOpacity,FlatList } from 'react-native'
import React from 'react'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Data from "../Data/Images.json";
import ImageCard from '../componants/ImageCard';
//import { FlatList } from 'react-native-gesture-handler';

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>

        <Text style={styles.header}>Search</Text>

        <View style={styles.iconcontainer}>
          <View style={styles.buttonIcon}>
            <TouchableOpacity>
              <MaterialIcons name={"cancel"} color={"white"} size={40} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
     <View>
      <View style={styles.Inputcontainer} >
       <MaterialIcons name={"search"} size={33} color={"#6c757d"}/>
       <TextInput style={styles.textinput} placeholder="search here.."
        placeholderTextColor={"#6c757d"} />
       </View>
     </View>
     <FlatList data={Data}
      renderItem={({item, index}) => { 
        return <ImageCard item={item} index={index} /> ;}}
        numColumns={2}
        contentContainerStyle={{paddingBottom:400,
        }}
        />
    </View>
  );
}; 

export default SearchScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  header: {
    color: "white",
    fontSize: 28,
    fontWeight: "700",
    marginLeft: 10,
  },
  containerHeader: {
    flexDirection: "row",
    justifyContent: "space-between"
  },

  buttonIcon: {
    backgroundColor: "black",
  },
  Inputcontainer:{
    height:44,
    borderWidth:2,
    borderColor:"#3e5c76",
    marginVertical:15,
    borderRadius:10,
    alignItems:"center",
    flexDirection:"row",
    paddingLeft:10,
  },
  textinput:{
    flex:1,
    color:"white",
  },
  

   
})