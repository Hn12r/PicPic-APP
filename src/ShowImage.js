import { ImageBackground, StatusBar, StyleSheet, Text,  View, TouchableOpacity, Alert, ActivityIndicator} from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDownloadFile } from '../Hooks/useDownloadedfile';
import Share from "react-native-share";
import ReactNativeBlobUtil from "react-native-blob-util";


const ShowImage = () => {
  const { downloadFile, percentage, downloading, } = useDownloadFile();
  console.log('downloading:', downloading)
  console.log("percentage: ", percentage);
 const route = useRoute();
 const navigation = useNavigation();

 const item = route.params.item;
 const handleBackPress = () =>{
   navigation.goBack();
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
   }else  Alert.alert(
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
 };

 const handleDownload = async () => {
  await downloadFile(item.image, item.name);
};
const handleShareImage = () => {
  try {
    ReactNativeBlobUtil.fetch("GET", item.image).then((res) => {
      let status = res.info().status;
      if (status === 200) {
        let base64Str = res.base64();
        let options = {
          url: `data:image/jpeg;base64,${base64Str}`,
        };
        Share.open(options)
          .then((r) => {
            console.log(r);
          })
          .catch((e) => {
            e && console.log(e);
          });
      }
    });
  } catch (error) {}
};
  return (
    <>
    <StatusBar hidden />
    <ImageBackground source={{uri: item.image,}} style={styles.container}>

    <TouchableOpacity style={styles.BackIconContainer} onPress={handleBackPress}>
    <Ionicons name= {'chevron-back-outline'} color={"white"} size={30}  />
    </TouchableOpacity>
     
    <View style={styles.IconContainer}>
  
  <TouchableOpacity onPress={()=>{handleLikeWallpaper(item);}}>
  <FontAwesome6 name="heart" color="white" size={40} />
  </TouchableOpacity>

  <TouchableOpacity onPress={()=>{handleDownload(item);}}>
  <MaterialIcons name="download" color="white" size={40} />
  </TouchableOpacity>

  
  <TouchableOpacity onPress={()=>{handleShareImage}} >
  <Entypo name="forward" color="white" size={40} />
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
              <ActivityIndicator color={"white"} size={"50"} />
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
    </ImageBackground>
    </>
  ); 
};

export default ShowImage

const styles = StyleSheet.create({

 container:{
  flex:1,
  backgroundColor:"black",
 },

 BackIconContainer:{
   height:40,
   width:40,
   backgroundColor: 'rgba(0, 0, 0, 0.5)',
   borderRadius:20,
   margin:20,
   justifyContent:"center",
   alignItems:"center",
   
 },

 IconContainer:{
   position:"absolute",
   bottom:90,
   right:20,
   height:150,
   justifyContent:"space-between",
   //borderWidth:1,
   //borderColor:"white"
   



 }

})