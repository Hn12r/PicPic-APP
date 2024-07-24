import { Image, StyleSheet, Text, Touchable, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const imageurl = "https://plus.unsplash.com/premium_photo-1669812542104-c1f5ec693045?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const Category = ({ item,index }) => {

const navigation = useNavigation();
const handleNavigate =()=> {
navigation.navigate("Collection_detail", {item});
};
  return (
      <TouchableOpacity style={styles.container} onPress={()=> handleNavigate(item)}>
     <Image source={{ uri: item.image}} style={styles.coverImage} />
      <View style={styles.overlay}/>
      <View style={styles.textcontainer}>
      <Text style={styles.heading}>{item.name}</Text>
      </View>
      </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({
    container:{
        marginVertical:-1,
    },
    coverImage:{
        height:120,
        width:"100%",
        borderRadius:22,
        marginVertical:20,
    },
    overlay:{
        ...StyleSheet.absoluteFillObject,
        backgroundColor:"rgba(0, 0, 0, 0.5)",
    },
    heading:{
        color:"white",
        fontSize:30,
        fontWeight:"700"
    },
    textcontainer:{
        position:"absolute",
        bottom:50,
        left:40,
    }

});