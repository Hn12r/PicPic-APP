import { StyleSheet, Text, View, TouchableOpacity ,TextInput } from 'react-native'
import React from 'react'
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Header2 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputcontainer}>
      <View style={styles.iconcontainer}>

      <FontAwesome name={"search"} size={26} color={"#403d39"} />
      </View>
      <TextInput style={styles.inputtext2} placeholder="Search for ideas" />
      </View>
      </View>
  
  )
}

export default Header2

const styles = StyleSheet.create({
    container: {
      marginHorizontal:170,
    },

    inputcontainer:{
      backgroundColor: "#6c757d",
      height: 46,
      width:400,
      borderRadius: 12,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      marginTop: 45,
      marginVertical: 12,
      marginHorizontal:-160,
    },

    inputtext2: {
      flex: 1,
      borderWidth: 1,
      borderColor: "#6c757d",
      fontSize:22,
      fontWeight:"500",
     
    },
    iconcontainer:{
      marginHorizontal: 22,
    }

    
    
   

})