import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { StackNavigatorParamList } from '../../../types';

type LoginProps = NativeStackNavigationProp<StackNavigatorParamList, "Login">;
 
const Login = () => {

    const navigation = useNavigation<LoginProps>();
        function irParaTelaHome(){
            navigation.navigate('Home');
        }
    const [myText, setMyText] = useState('');

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
                style={styles.textInput}
                onChangeText = {e => setMyText(e)}>
                <Text>{myText}</Text>
            </TextInput>
            
            <TextInput 
                placeholder="Password" 
                placeholderTextColor="#A19FA1"
                secureTextEntry = {true}
                style={styles.textInput}>
            </TextInput>

            <TouchableOpacity style={styles.btn} onPress={irParaTelaHome}>
                <Text style={styles.btnText}>Log In</Text>
            </TouchableOpacity>

            <Text style={styles.underline}>Sign Up for FaceBook</Text>
        </View>
    );
}


export default Login;