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

import {Container} from 'native-base';
import {Actions} from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';

export default class Drower2 extends Component {

    render() {
        const goToHome = () => {
            Actions.Cropper()
        };
        return (
            <Container>
                <Text>Drower 2</Text>
            </Container>

        );
    }
}
