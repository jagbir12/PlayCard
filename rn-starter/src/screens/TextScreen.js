import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Picker, Image, ScrollView} from 'react-native';
import EnterDetails from '../components/EnterDetails';

const TextScreen = () => {
    const players = [];
    var noPlayers = 7;
    for(let i = 0; i < noPlayers; i++){
		players.push(
            <EnterDetails key = {i} />
		)
	}
    return (
        <View style={styles.inputContainer}>
            <View style={{alignItems: "center", marginTop: 20}}><Text style={{fontSize: 20, fontWeight: "bold", alignContent: "center", color: '#D7B740'}}>Number of Players: {noPlayers}</Text></View>
            <ScrollView>
                {players}
            </ScrollView>
        </View>
        
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,

        flex: 1,
        backgroundColor: "green",
      }
});

export default TextScreen;