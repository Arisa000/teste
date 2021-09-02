import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

const LinkItens = (props:any)=>{
  return(
    <Text style={stylesLink.text}>{props.name}</Text>
  );
}

const stylesLink = StyleSheet.create({
  text:{
    marginTop: 10,
    color: '#4A4A4C',
    fontSize: 13.71,

  }
});

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

const stylesLinksImportantes = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 40,
    paddingVertical: 10,

    borderBottomColor: "red",
    borderBottomWidth: 1,
  }
});

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("./src/assets/arrow_left.png")}></Image>

        <View style={styles.inputTextView}>
          <Image source={require("./src/assets/search.png")}></Image>
          <TextInput 
            placeholder="Search" 
            placeholderTextColor="#F5FFFF"
            style={styles.textInput}>
          </TextInput>
        </View>
        
        <Image source={require("./src/assets/share.png")}></Image>
      </View>
      <LinksImportantes />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    minHeight: 93,
    backgroundColor: '#4369B0',
    paddingTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
  },
  inputTextView: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: '#2C4877',
    height: 40,
    marginHorizontal: 10,
    alignItems: "center",
    borderRadius: 28,
  },
  textInput: {
    color: '#F5FFFF',
    flex: 1,
    paddingRight: 10,
  },
});
