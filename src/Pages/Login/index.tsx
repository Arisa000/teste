import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';


const Login = () => {
    return(
        <View style={styles.container}>
            <View style={styles.login}>
            <Image source={require("../../assets/icone_facebook.png")}
            style={styles.icon}>
            </Image>
            <Text style={styles.text}>Facebook</Text>
            </View>

            <TextInput 
                placeholder="Email" 
                placeholderTextColor="#A19FA1"
                style={styles.textInput}>
            </TextInput>
            
            <TextInput 
                placeholder="Password" 
                placeholderTextColor="#A19FA1"
                secureTextEntry = {true}
                style={styles.textInput}>
            </TextInput>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#4369B0',
    },
    login: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 81,
    },
    icon: {
        width: 50,
        height: 50,
        right: 25,

    },
    textInput: {
        color: 'black',
        fontFamily: 'Roboto',
        fontSize: 16,
        marginTop: 31,
        padding: 10,
        width: 300,
        backgroundColor: '#FFFFFF',
        
    },
    text: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 42.1053,
        color: '#FFFFFF',
    },
})

export default Login;