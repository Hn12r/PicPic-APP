import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import Header from '../componants/Header'
import ImageCard from '../componants/ImageCard';
import Data from '../Data/Images.json'


const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <FlatList data={Data} renderItem={({item,index})=> <ImageCard item={item} index={index}/>} numColumns={2} />
      </View>

  );
};

export default Home

const styles = StyleSheet.create({
  container:{
  backgroundColor:"black",
  flex:1,
  paddingHorizontal:20,
  }
  
})