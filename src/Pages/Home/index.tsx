import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import {stylesLink, stylesLinksImportantes, styles} from './styles';
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
  
  
const Home = () => {
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
    </View>
    
    );
}

  
export default Home;