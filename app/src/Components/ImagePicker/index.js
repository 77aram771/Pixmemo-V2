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

    chooseFile = () => {
        const options = {
            title: 'Select Image',
            customButtons: [
                {name: 'customOptionKey', title: 'Choose Photo from Custom Option'},
            ],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.showImagePicker(options, response => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
                alert(response.customButton);
            } else {
                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };
                this.setState({
                    filePath: response,
                });
            }
        });
    };

    render() {
        console.log(width)
        console.log(height)
        return (
            <Container style={styles.container}>
                <View style={styles.containerImage}>
                    {/*<TouchableHighlight title="Choose File" onPress={this.chooseFile.bind(this)}>*/}
                        {/*<Image*/}
                            {/*source={{uri: this.state.filePath.uri}}*/}
                            {/*style={styles.imagePicker}*/}
                        {/*/>*/}
                    {/*</TouchableHighlight>*/}
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
        display: 'flex',
        backgroundColor: '#fff',
        borderColor: 'blue',
        borderWidth: 1,
        borderStyle: 'solid',
        height: 330
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