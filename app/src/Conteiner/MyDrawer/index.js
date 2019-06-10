/**
 * Created by Aram on 10.06.2019.
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

import {Container, Content, List, ListItem} from 'native-base';
import {Actions} from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';


export default class MyDrower extends Component {

    render() {
        const goToHome = () => {
            Actions.Cropper()
        };
        return (
            <Container>
                <LinearGradient colors={['#b12995', '#3b5998', '#01b8d7']} style={{flex: 1}}>
                    <View style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#42e222'}}>

                    </View>
                    <View style={{flex:2, justifyContent: 'center', alignItems: 'center', backgroundColor: '#2392e2'}}>
                        <Content>
                            <List>
                                <ListItem>
                                    <Text>Menu 1</Text>
                                </ListItem>
                                <ListItem>
                                    <Text>Menu 2</Text>
                                </ListItem>
                            </List>
                        </Content>
                    </View>

                </LinearGradient>
            </Container>

        );
    }
}


const styles = StyleSheet.create({
    // container: {
    //     marginTop: 100,
    //     flex: 1,
    //     justifyContent: 'space-around',
    //     alignItems: 'center',
    //     paddingBottom: 100,
    // },
    // title: {
    //     fontSize: 25,
    //     marginBottom: 32,
    //     textAlign: 'center',
    //     color: '#fff'
    // },
    // viewElement: {
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
    // text: {
    //     fontSize: 16,
    //     textAlign: 'center',
    //     marginLeft: 45,
    //     marginRight: 45,
    //     marginTop: 15,
    //     marginBottom: 45,
    //     color: '#fff'
    // },
    // loginScreenButton: {
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     marginRight: 40,
    //     marginLeft: 40,
    //     marginTop: 10,
    //     paddingTop: 10,
    //     paddingBottom: 10,
    //     backgroundColor: '#0091c1ff',
    //     borderRadius: 30,
    //     width: 221,
    //     height: 57,
    //     shadowColor: "#000",
    //     shadowOffset: {
    //         width: 0,
    //         height: 3,
    //     },
    //     shadowOpacity: 0.29,
    //     shadowRadius: 4.65,
    //     elevation: 7,
    // },
    // loginText: {
    //     color: '#fff',
    //     textAlign: 'center',
    //     fontSize: 25,
    // }
});