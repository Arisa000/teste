import React from 'react';
import { TouchableOpacity, Text, View, Image, TextInput, StyleSheet } from 'react-native';

const Post = ()=>{
    return(
        <View style={styles.container}>
            <View style={styles.headerPost}>
                <View style={styles.photo}>
                </View>
                <View style={styles.text}>
                    <Text style={styles.bold}>Unblast</Text>
                    <View style={styles.timePost}>
                        <Text>2 hrs</Text>
                        <Image style={styles.img} 
                        source = {require(
                            '../../assets/globo.png'
                        )}></Image>
                    </View>
                </View>
            </View>
        </View>
    );
}
export default Post;

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'gray',
        padding: 30,
    },
    headerPost:{
        flexDirection: 'row',
    },
    photo:{
        width: 60,
        height: 60,
        backgroundColor: '#4369B0',
        borderRadius: 50,
    },
    text:{
        paddingLeft: 20,
        justifyContent: 'space-around',
    },
    timePost:{
        flexDirection: 'row',
    },
    bold:{
        fontWeight: 'bold',
        fontSize: 18,
    },
    img:{
        marginLeft: 6,
    },
});