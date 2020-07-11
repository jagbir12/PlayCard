import React from "react";
import { Text, StyleSheet, View, Button, Image, ImageBackground, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <ImageBackground source={require('../../assets/main_background.jpg')} style={{width: '100%', height: '100%'}}>
        <View style={{marginTop: 20}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('MarriageWelcome')}
            underlayColor='#fff'>
            <Text style={styles.buttonText}>Play Marriage</Text>
          </TouchableOpacity>
        </View>
        
      </ImageBackground>
      
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  button:{
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#1E6738',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  buttonText:{
      color:'#fff',
      textAlign:'center',
      paddingLeft : 10,
      paddingRight : 10,
      fontWeight: 'bold',
      fontSize: 18,
  }
});

export default HomeScreen;
