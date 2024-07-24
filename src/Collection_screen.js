import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header2 from '../componants/Header2'
import data from '../Data/Catergories.json'
import Category from '../componants/Category'

const Collection_screen = () => {
  return (
    <View style={styles.container}>
      <Header2 />
      <Text style={styles.text}>Popular on Allas</Text>
      <FlatList data={data} renderItem={({item,index})=> ( 
      <Category item={item} index={index}/> )}
      contentContainerStyle={{
        paddingBottom:"500"
      }}
      />
    </View>
  )
}

export default Collection_screen

const styles = StyleSheet.create({
 
  container:{
    flex:1,
    backgroundColor:"black",
    
  },
  text:{
    fontSize:32,
    fontWeight:"700",
    color:"white",
    marginLeft:80,

  }


})