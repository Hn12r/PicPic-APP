import { StyleSheet, Text, View } from 'react-native';
import React from 'react';


const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ALL</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center', 
    borderBottomColor: 'black',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    paddingBottom: 24,
    marginVertical:5,
  },
 

});
