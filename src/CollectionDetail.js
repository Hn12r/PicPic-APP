import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import data from '../Data/Images.json'
import ImageCard from '../componants/ImageCard';

const CollectionDetail = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const item = route.params.item;
  const handleBackPress = () => {navigation.goBack();};

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.BackIconContainer} onPress={handleBackPress}>
        <Ionicons name={'chevron-back-outline'} color={"white"} size={30} />
      </TouchableOpacity>
      <View>
        <Text style={styles.Header}>{item.name}</Text>
        <Text style={styles.SubHeader}> Ultimate List of {item.name} </Text>
      </View>
      <FlatList data={data} renderItem={({item,index})=>(<ImageCard item={item} 
      index={index}/>)}
      numColumns={2} contentContainerStyle={{
        paddingBottom:200,
      }}
      
      />
    </View>
  )
}

export default CollectionDetail

const styles = StyleSheet.create({
  BackIconContainer: {
    height: 40,
    width: 40,
    backgroundColor: '#495057',
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "black",
    flex: 1,
    padding: 5,
  },
  Header: {
    fontSize: 22,
    color: "white",
    fontWeight: "700",
    marginLeft: 10,
    marginVertical: 10,
  },
  SubHeader: {
    fontSize: 18,
    color: "#e9ecef",
    marginLeft: 10,
  },




})