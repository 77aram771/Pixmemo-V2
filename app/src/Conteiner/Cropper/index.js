/**
 * Created by Aram on 17.05.2019.
 */
import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

class Cropper extends Component {
    constructor() {
        super();
        this.state = {}
    }
 
    componentWillMount = () => {
    }

    render() {
        return (
            <View style={styles.box}>
                <Text style={styles.text}>
                    Cropper
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: 'red'
    },
    text: {
        fontSize: 30,
        color: '#ffffff',
        fontFamily: 'SEGOEPR',
        marginBottom: 70,
    }
});

export default Cropper;