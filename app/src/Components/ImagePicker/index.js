/**
 * Created by Aram on 24.05.2019.
 */
import React from 'react';
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
const ImagePicker = require('react-native-image-picker');
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
            <View style={styles.container}>
                <View style={styles.containerImage}>
                    <Image
                        source={{uri: this.state.filePath.uri}}
                        style={styles.imagePicker}
                    />
                    <TouchableHighlight title="Choose File" onPress={this.chooseFile.bind(this)}>
                        <Image
                            style={styles.button}
                            source={require('../../Image/icon/myButton.png')}
                        />
                    </TouchableHighlight>
                </View>
                <View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    containerImage: {
        marginTop: 20,
        display: 'flex',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderColor: 'blue',
        borderWidth: 1,
        borderStyle: 'solid',
    },
    imagePicker: {
        width: 315,
        height: 330,
    },
    button: {

    }
});