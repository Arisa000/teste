import React from 'react';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
    btn: {
        backgroundColor: "#213873",
        
        marginTop: 31,
        padding: 10,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnText: {
        color: 'white',
        fontFamily: 'Roboto',
        fontSize: 16,
    },
    underline: {
        color: 'white',
        marginTop: 70,
        textDecorationLine: 'underline',
    },
})