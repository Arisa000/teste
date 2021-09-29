import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

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
            <View style={styles.textPostPub}>
                <Text style={styles.textPostPubText}>Este é o design que vamos replicar hoje na aula: 
                    <Text style={styles.textPostPubLink}>https://mockupsfreebies.com/social-media/facebook/free-facebook-mobile-post-mockup</Text>
                </Text>
                <Image style={styles.imgPost}  
                    source = {require('../../assets/post.png')}>
                </Image>
            </View>
            <View style={styles.like}>
                <Image style={styles.imgLikes} 
                    source = {require(
                        '../../assets/likes.png'
                    )}>
                </Image>
                <Text style={styles.likeText}>12</Text>
            </View>
            <View style={styles.linkShare}>
                <View style={styles.linksShareBloc}>
                    <Image style={styles.linksShareBlocIcon}
                        source = {require(
                            '../../assets/like.png'
                        )}>
                    </Image>
                    <Text>Likes</Text>
                </View>
                <View style={styles.linksShareBloc}>
                    <Image style={styles.linksShareBlocIcon}
                        source = {require(
                            '../../assets/comentario.png'
                        )}>
                    </Image>
                    <Text>Comentários</Text>
                </View>
                <View style={styles.linksShareBloc}>
                    <Image style={styles.linksShareBlocIcon}
                        source = {require(
                            '../../assets/share1.png'
                        )}>
                    </Image>
                    <Text>Compartilhar</Text>
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
    textPostPub:{
        marginTop: 10,
        fontSize: 18,
    },
    textPostPubLink:{
        color: '#4D6196',
        fontSize: 15,
    },
    textPostPubText:{
        fontSize: 15,
    },
    imgPost:{
        width: 358,
        height: 282,
    },
    imgLikes:{
        width: 30,
        height: 30,
    },
    like:{
        marginTop: 30,
        flexDirection: 'row',
        alignContent: 'center',
    },
    likeText:{
        marginLeft: 10,
        textAlignVertical: 'center',
    },
    linkShare:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 10,
    },
    linksShareBloc:{
        flexDirection: 'row',
        justifyContent: 'center',
    },
    linksShareBlocIcon:{
        width: 18,
        height: 18,
    },
});