import React from 'react';
import { TouchableOpacity, Text, View, Image, TextInput, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import {stylesLink, stylesLinksImportantes, styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { StackNavigatorParamList } from '../../../types';
import Post from '../Post';

const LinkItens = (props:any)=>{
    return(
      <Text style={stylesLink.text}>{props.name}</Text>
    );
  }
  

  
  const LinksImportantes = ()=>{
    return(// O JSX ficará aqui
      <View style={stylesLinksImportantes.container}>
        <LinkItens name="Home"/>
        <LinkItens name="Post"/>
        <LinkItens name="Videos"/>
        <LinkItens name="Photos"/>
        <LinkItens name="Comunity"/>
      </View>
    );
  };
  
type HomeProps = NativeStackNavigationProp<StackNavigatorParamList, "Home">;
  
const Home = () => {

  const navigation = useNavigation<HomeProps>();
  function irParaTelaLogin(){
    navigation.navigate('Login');
  }
    return(
        <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../../assets/arrow_left.png")}></Image>

        <View style={styles.inputTextView}>
          <Image source={require("../../assets/search.png")}></Image>
          <TextInput 
            placeholder="Search" 
            placeholderTextColor="#F5FFFF"
            style={styles.textInput}>
          </TextInput>
        </View>
        
        <Image source={require("../../assets/share.png")}></Image>
      </View>
      <LinksImportantes />
      <StatusBar style="auto" />

      <View style={styles.conteudoFacebook}>
       <TouchableOpacity style={styles.button} onPress={irParaTelaLogin}>
          <Text style={styles.buttonText}>Learn More</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView>
        <Post />
      </ScrollView>

    </View>
    
    );
}

  
export default Home;