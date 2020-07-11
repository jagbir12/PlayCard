import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Entypo } from '@expo/vector-icons';

const MarriageWelcomeScreen = ({navigation}) => {
    return (
        <View style={{alignItems: "center", marginTop: 20}}>
            <Text style={{fontSize: 40, fontWeight: "bold", alignContent: "center", color: '#D7B740'}}>
                Welcome
            </Text>
            <Text style={{fontSize: 20, fontWeight: "bold", alignContent: "center", color: '#D7B740'}}>
                Please Create players{"\n"}
            </Text>

            <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('CreateMarriagePlayers')}
            underlayColor='#fff'>
            <Text style={styles.buttonText}><Entypo name="add-user" size={24} color="black" /></Text>
          </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
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
        paddingLeft : 60,
        paddingRight : 60,
        fontWeight: 'bold',
        fontSize: 18,
    }
});

export default MarriageWelcomeScreen;