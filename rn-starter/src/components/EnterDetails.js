import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {View, Text, StyleSheet, TextInput, Picker, Image} from 'react-native';
import { red } from 'color-name';

const EnterDetails = () => {
    const [status, setStatus] = useState('');
    const [playerNo, setPlayerNo] = useState('');
    const [totalMaal, setTotalMaal] = useState('');
    const [myMaal, setmyMaal] = useState('');
    return (
        <>
            <View style={{borderColor: red}}><Text>Image</Text></View>
            <View style={{marginLeft: 55, marginTop: 20}}>
                <DropDownPicker
                    items={[
                        {label: 'Seen', value: 'seen'},
                        {label: 'Unseen', value: 'Unseen'},
                        {label: 'Dublee', value: 'dublee'},
                        {label: '', value: 'none'},
                    ]}
                    defaultValue={status}
                    containerStyle={{height: 50, width: 150, fontSize: 18}}
                    style={styles.input}
                    dropDownStyle={{backgroundColor: '#fafafa', fontWeight: 'bold', fontSize: 18}}
                    labelStyle={{fontWeight: 'bold', fontSize: 18}}
                    onValueChange={(itemValue, itemIndex) => setStatus(itemValue)}
                    placeholder = "Select a Status"
                />
                {/* <TextInput
                    placeholder = "Number of Players" 
                    style={styles.input}
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={playerNo}
                    onChangeText={(newValue) => setPlayerNo(newValue)}
                    keyboardType='numeric'
                    returnKeyType={ 'done' }
                /> */}
                <TextInput
                    placeholder = "Total Maal" 
                    style={styles.input}
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={totalMaal}
                    onChangeText={(newValue) => setTotalMaal(newValue)}
                    keyboardType='numeric'
                    returnKeyType={ 'done' }
                />
                <TextInput
                    placeholder = "My Maal" 
                    style={styles.input}
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={myMaal}
                    onChangeText={(newValue) => setmyMaal(newValue)}
                    keyboardType='numeric'
                    returnKeyType={ 'done' }
                />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 45,
        width: 180,
        paddingHorizontal: 5,
        backgroundColor: 'white',
        marginBottom: 5,
        fontWeight: 'bold',
        fontSize: 18,
    },
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
      },
      error: { textAlign: 'center', height: 17.5 },
      backgroundImage: {
         flex: 1,
         resizeMode: 'cover', // or 'stretch'
      }
});

export default EnterDetails;