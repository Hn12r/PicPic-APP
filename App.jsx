import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './src/Home';
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import LinearGradient from 'react-native-linear-gradient';
import {CollectionStack, HomeStack, SearchStack, likeStack} from './navigation/MystackNavigation';
import SearchScreen from './src/SearchScreen';
import LikeScreen from './src/LikeScreen';

const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{tabBarShowLabel:false,
        headerShown:false,
        tabBarStyle:{
          height:60,
          position:"absolute",
          borderRadius:2,

        },

         tabBarBackground: () => {
          return(
          <LinearGradient colors={["#0d1321","#1d2d44"]}
          style={{
          flex:1,
          borderRadius:2, 
          
          }} 
          start={{ x: 0, y: 0, }}
          end={{ x: 0, y: 1, }}
          />

          );
         },
         tabBarActiveTintColor:"white",
         tabBarInactiveTintColor:"#cccccc",

       }}
     > 

      <Tab.Screen
        name='HOME_STACK'
        component={HomeStack}
        options={{
        tabBarIcon: ({ color, focused, size }) => (
        <Entypo name={"home"} size={focused ? 40 : 32} color={"#f1f2f6"}/>
        ),
        }}
        />

      <Tab.Screen
        name='CollectionStack'
        component={CollectionStack}
        options={{
        tabBarIcon: ({ color, focused, size }) => (
        <Ionicons name={"search"} size={focused ? 40 : 32} color={"#f1f2f6"}/>
        ),
        }}
        />
       
       <Tab.Screen
        name='Plus'
        component={Home}
        options={{
        tabBarIcon: ({ color, focused, size }) => (
        <AntDesign name={"pluscircle"} size={focused ? 40: 32} color={"#f1f2f6"}/>
        ),
        }}
        />

      <Tab.Screen
        name='Search_stack'
        component={SearchStack}
        options={{
        tabBarIcon: ({ color, focused, size }) => (
        <AntDesign name={"message1"} size={focused ? 40: 32} color={"#f1f2f6"}/>
        ),
        }}
        />

      <Tab.Screen
        name='Like_Stack'
        component={LikeScreen}
        options={{
        tabBarIcon: ({ color, focused, size }) => (
        <FontAwesome5 name={"th-large"} size={focused ? 40: 32} color={"#f1f2f6"}/>
        ),
        }}
        />


      </Tab.Navigator>
    </NavigationContainer>

  )
}

export default App

const styles = StyleSheet.create({


})