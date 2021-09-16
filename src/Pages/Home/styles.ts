import React from 'react';
import {StyleSheet} from 'react-native';

export const stylesLink = StyleSheet.create({
    text:{
      marginTop: 20,
      color: '#4A4A4C',
      fontSize: 13.71,
  
    }
  });

export const stylesLinksImportantes = StyleSheet.create({
container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 40,
    paddingVertical: 10,

    borderBottomColor: "#F0F0F0",
    borderBottomWidth: 1,
}
});

export const styles = StyleSheet.create({
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