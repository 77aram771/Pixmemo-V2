/**
 * Created by Aram on 14.05.2019.
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground} from 'react-native';

export default class Main_Page extends Component {
    render() {
        return (
            <ImageBackground style={{width: '100%', height: '100%'}}
                             source={require('../../Image/BackgroundImg.png')}
                             imageStyle={{resizeMode: 'cover'}}
            >
                <View style={styles.container}>
                    <Text style={styles.welcome}>Welcome</Text>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
