/**
 * Created by Aram on 14.05.2019.
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, Button, TouchableOpacity} from 'react-native';
import {Title} from '../../Components/Title';

export default class Main_Page extends Component {
    render() {
        return (
            <ImageBackground style={{width: '100%', height: '100%'}}
                             source={require('../../Image/BackgroundImg.png')}
                             imageStyle={{resizeMode: 'cover'}}
            >
                <View style={styles.container}>
                    <View>
                        <Title/>
                    </View>
                    <View>
                        <Text style={styles.title}>
                            LOREM IPSUM DOLOR
                        </Text>
                        <Image source={require('../../Image/banner.png')}/>
                    </View>
                    <View style={styles.viewElement}>
                        <Text style={styles.text}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis tempor ex, a
                        </Text>
                        <TouchableOpacity style={styles.loginScreenButton} title='Get started' underlayColor='#fff'>
                            <Text style={styles.loginText}>Get started</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ImageBackground>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        borderStyle: 'solid',
        borderColor: 'red',
        borderWidth: 1,
        paddingBottom: 100,
    },
    title: {
        borderStyle: 'solid',
        borderColor: 'red',
        borderWidth: 1,
        fontSize: 25,
        marginBottom: 32,
        textAlign: 'center',
        color: '#fff'
    },
    viewElement: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        borderStyle: 'solid',
        borderColor: 'red',
        borderWidth: 1,
        fontSize: 16,
        textAlign: 'center',
        marginLeft: 45,
        marginRight: 45,
        marginTop: 15,
        marginBottom: 45,
        color: '#fff'
    },
    loginScreenButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 40,
        marginLeft: 40,
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#0091c1ff',
        borderRadius: 30,
        width: 221,
        height: 57,
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1
        }
    },
    loginText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 25,
    }
});