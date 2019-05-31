/**
 * Created by Aram on 14.05.2019.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Image,
    Button,
    TouchableOpacity,
    TouchableHighlight,
    Dimensions
} from 'react-native';
import {Container} from 'native-base';
import {Actions} from 'react-native-router-flux'
import LinearGradient from 'react-native-linear-gradient'
export default class Main_Page extends Component {


    render() {
        const goToHome = () => {
            Actions.pageTwo()
        };
        return (
            <Container>
                <LinearGradient colors={['#b12995', '#3b5998', '#01b8d7']} style={{flex: 1}}>
                    <View style={styles.container}>
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
                            <TouchableOpacity style={styles.loginScreenButton} title='Get started' underlayColor='#fff'
                                              onPress={goToHome}>
                                <Text style={styles.loginText}>Get started</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </LinearGradient>
            </Container>

        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingBottom: 100,
    },
    title: {
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
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    loginText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 25,
    }
});