import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../src/Home";
import ShowImage from "../src/ShowImage";
import Collection_screen from "../src/Collection_screen";
import CollectionDetail from "../src/CollectionDetail";
import SearchScreen from "../src/SearchScreen";
import LikeScreen from "../src/LikeScreen";

const Stack = createNativeStackNavigator();

export function HomeStack(){
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="HOME_SCREEN" component={Home} />
        <Stack.Screen name="SHOW_IMAGE" component={ShowImage} />
      </Stack.Navigator>
    );
   }

export function CollectionStack(){
     return(
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Collection" component={Collection_screen} />
        <Stack.Screen name="Collection_detail" component={CollectionDetail} />
        <Stack.Screen name="SHOW_IMAGE" component={ShowImage} />
      </Stack.Navigator>
     );
    }

export function SearchStack(){
      return(
       <Stack.Navigator screenOptions={{headerShown:false}}>
         <Stack.Screen name="Search" component={SearchScreen} />
         <Stack.Screen name="Search_detail" component={CollectionDetail} />
         <Stack.Screen name="SHOW_IMAGE" component={ShowImage} />
       </Stack.Navigator>

      );
    }
 export function likeStack(){
        return(
         <Stack.Navigator screenOptions={{headerShown:false}}>
           <Stack.Screen name="Like_Screen" component={LikeScreen} />
           <Stack.Screen name="Search_detail" component={CollectionDetail} />
           <Stack.Screen name="SHOW_IMAGE" component={ShowImage} />
         </Stack.Navigator>
  
        );     
 }