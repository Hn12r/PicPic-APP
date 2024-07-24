import { StyleSheet, Text, Touchable, View, TouchableOpacity, FlatList} from 'react-native'
import React, { useEffect, useState } from 'react'
import AntDesign from "react-native-vector-icons/AntDesign";
import Data from "../Data/Images.json";
import ImageCard from '../componants/ImageCard';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import { TouchableOpacity } from 'react-native-gesture-handler';

const LikeComponent = () => {
  const navigation = useNavigation();
  const [wallpapers, setWallpapers] = useState([]);
  useEffect(()=>{
   getWallpapersFromAsyncStorage();
  },[]);
  const getWallpapersFromAsyncStorage = async()=>{
    let images = await AsyncStorage.getItem("images")
    images = images?JSON.parse(images):[]
    setWallpapers(images);
  };
  const handleNavigate =() => {
    navigation.navigate("HOME_SCREEN");
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backend} onPress={handleNavigate}>
      <AntDesign name={"left"} size={25} color={"white"} style={styles.button} />
      </TouchableOpacity>
      <View style={styles.container2}>
        <Text style={styles.text2} >Favorite</Text>
        <Text style={styles.text3} >Your Most Liked One!</Text>
      </View>
      <FlatList data={wallpapers}
      renderItem={({item, index}) => { 
        return <ImageCard item={item} index={index} /> ;}}
        numColumns={2}
        contentContainerStyle={{paddingBottom:400, 
        }}
        />
    </View>
  );
};

const LikeScreen =() => {
  const isFocused = useIsFocused();
  return isFocused ? <LikeComponent /> : null;
};


export default  LikeScreen;

const styles = StyleSheet.create({

    container:{
       flex:1,
       backgroundColor:"black",
       paddingHorizontal:20,
       paddingVertical:10,
    },
    backend:{
        backgroundColor:"rgba(0, 0, 0, 0.6)",
        height:40,
        width:40,
        justifyContent: "center",
        alignItem: "center",
        borderRadius:20,
    },
    button:{
       marginLeft:6,
    },
    text2:{
      color:"white",
      fontSize:30,
      margineleft:10,
    },
    text3:{
      color:"white",
      fontSize:18,
      fontWeight:"800",
    }

})