/**
 * Created by Aram on 17.05.2019.
 */
import React, {Component} from 'react';
import {Text, View, StyleSheet, Platform, ImageStore, ImageBackground, Dimensions} from 'react-native';
import AmazingCropper from 'react-native-amazing-cropper';
import {Actions} from 'react-native-router-flux'

class Cropper extends Component {

    onDone = (croppedImageUri) => {
        console.log('croppedImageUri = ', croppedImageUri);
        if (Platform.OS === 'Android') {
            ImageStore.getBase64ForTag(
                croppedImageUri,
                (base64Image) => {
                    // send image to server or save it locally
                    ImageStore.removeImageForTag(croppedImageUri);
                },
                (err) => {
                }
            );
        }
        else if (Platform.OS === 'ios') {
            ImageStore.getBase64ForTag(
                croppedImageUri,
                (base64Image) => {
                    // send image to server or save it locally
                    ImageStore.removeImageForTag(croppedImageUri);
                },
                (err) => {
                }
            );
        }
        else {
            Actions.pop()
        }
        // navigate to the next page of your application

    }

    onCancel = () => {
        Actions.pop()
    };

    render() {
        // const width = Dimensions.get('window').width;
        // const height = Dimensions.get('window').height;
        return (
            <ImageBackground style={{width: '100%', height: '100%'}}
                             source={require('../../Image/BackgroundImg.png')}
                             imageStyle={{resizeMode: 'cover'}}
            >
                <AmazingCropper
                    onDone={this.onDone}
                    onCancel={this.onCancel}
                    imageUri='https://www.lifeofpix.com/wp-content/uploads/2018/09/manhattan_-11-1600x2396.jpg'
                    imageWidth={1600}
                    imageHeight={2396}
                    NOT_SELECTED_AREA_OPACITY={0.3}
                    BORDER_WIDTH={20}
                />
            </ImageBackground>

        );
    }
}
export default Cropper;