import { Image, StyleSheet, Text, View, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import React from 'react';
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDownloadFile } from '../Hooks/useDownloadedfile';

const imageUrl = "https://img.freepik.com/free-photo/garden-flowers-plant-pattern-wallpapers-greeting-cards-postcards-design-wedding-invites-colorful-beautiful-flowers-vertical-background-blossom-floral-bouquet-decoration_90220-1109.jpg?t=st=1716103143~exp=1716106743~hmac=242db2e91a78ec7a7a885395d65479af245d7811b67ccc4c4feb1c08fd7e91c1&w=360";
const ImageCard = ({ item }) => {
  const {downloadFile, downloading, percentage } = useDownloadFile();
 const navigation = useNavigation();
 const handleNavigate= ()=>{
  navigation.navigate("SHOW_IMAGE",{item});
 };

 const handleLikeWallpaper = async (item) => {
  let likedWallpapers = await AsyncStorage.getItem("images");
  likedWallpapers = likedWallpapers ? JSON.parse(likedWallpapers) : [];
  let isExist = likedWallpapers.findIndex((image) => image.id === item.id);
  if (isExist < 0) {
    likedWallpapers = [item, ...likedWallpapers];
    await AsyncStorage.setItem("images", JSON.stringify(likedWallpapers));
    Alert.alert(
      "Added to Favorites",
      "Your wallpaper has been successfully added to your faviorates",
      [
        {
          text: "Dismiss",
          style: "cancel",
        },
        {
          text: "View Favorites",
          onPress: () => {
            navigation.navigate("Like_Stack");
          },
        },
      ]
    );
  }
 };
 const handleDownloadFile = async(item) => {
  await downloadFile(item.image, item.name);
 }
  
  return (
      <TouchableOpacity onPress={() =>{handleNavigate(item);
  
      }}  style={styles.container}>
        <Image source={{ uri: item.image }} style={styles.coverImage} />
        <View style={styles.IconContainer}>
  
        <TouchableOpacity onPress={()=>{handleLikeWallpaper(item);

        }}>
        <FontAwesome6 name="heart" color="white" size={25} />
        </TouchableOpacity>
  
        <TouchableOpacity onPress={()=> {handleDownloadFile(item); 

        }}>
        <MaterialIcons name="download" color="white" size={25} />
        </TouchableOpacity>
        </View>  
         {downloading ? (
          <>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
                ...StyleSheet.absoluteFillObject,
                backgroundColor: "rgba(0,0,0,0.5)",
              }}
            >
              <ActivityIndicator color={"white"} size={"large"} />
              <Text
                style={{
                  color: "white",
                }}
              >
                Progress Percentage {percentage}%
              </Text>
            </View>
          </>
        ) : null}
        
        </TouchableOpacity>
    );
  }; 

export default ImageCard;

const styles = StyleSheet.create({
  container: {
    height: 330, 
    width: "50%",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 20,
    overflow: 'hidden',
    marginRight:6,
    marginVertical:10,
    
  },
  coverImage: {
    flex:1,
  },

  IconContainer:{
    position:"absolute",
    bottom:10,
    right:5,
    height:70,
   justifyContent:"space-between"
    
  },


});
