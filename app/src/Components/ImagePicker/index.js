/**
 * Created by Aram on 24.05.2019.
 */
import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    TouchableHighlight,
    Dimensions
} from 'react-native';
import {Container} from 'native-base';
import {MyCarousel} from "../ImageCaruserl/index";
import {Footer_Section} from "../../Conteiner/Footer_Section/index";
import ButtonRoundedExample from "../Next_Button/index";
import ImagePicker from 'react-native-image-picker';
import AmazingCropperPage from "../../Conteiner/Cropper/index";
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filePath: {},
        };
    }

    render() {
        console.log(width)
        console.log(height)
        return (
            <Container style={styles.container}>
                <View style={styles.containerImage}>
                    <AmazingCropperPage/>
                </View>
                <MyCarousel image={this.state.filePath.uri}/>
                <ButtonRoundedExample/>
                <Footer_Section/>
            </Container>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    containerImage: {
        marginTop: 20,
        backgroundColor: '#fff',
        borderColor: 'blue',
        borderWidth: 1,
        borderStyle: 'solid',
        width: 300,
        height: 330,
        display: 'flex',
        justifyContent: 'center',
    },
    imagePicker: {
        width: 315,
        height: 330,
    },
    button: {
        width: 151,
        height: 41,
        borderRadius: 30,
        backgroundColor: '#0091c1',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    }
});