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
import {MyCarousel} from "../../Components/ImageCaruserl/index";
import {Footer_Section} from "../Footer_Section/index";
import ButtonRoundedExample from "../../Components/Next_Button/index";
import AmazingCropperPage from "../Cropper/index";
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default class ImagesPicker extends React.Component {
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
        borderColor: '#8f8c92',
        borderWidth: 1,
        borderStyle: 'dashed',
        width: 300,
        height: 330,
        display: 'flex',
        justifyContent: 'center',
    },
});