import React, { Component } from 'react';
import { Platform, ImageStore } from 'react-native';
import { Actions } from 'react-native-router-flux';
import AmazingCropper from 'react-native-amazing-cropper';
import CustomCropperFooter from '../../../src/Components/CustomCropperFooter';

class AmazingCropperPage extends Component {
    onDone = (croppedImageUri) => {
        console.log('croppedImageUri = ', croppedImageUri);
        if (Platform.OS === 'ios') {
            ImageStore.getBase64ForTag(
                croppedImageUri,
                (base64Image) => {
                    // send image to server or save it locally
                    ImageStore.removeImageForTag(croppedImageUri);
                },
                (err) => {}
            );
        }
        else {
            // send image to server
        }
        // navigate to the next page of your application
        Actions.pageOne();
    }

    onCancel = () => {
        // navigate back
        Actions.pop();
    }

    render() {
        return (
            <AmazingCropper
                // Use your custom footer component
                // Do NOT pass onDone, onRotate and onCancel to the footer component, the Cropper will do it for you
                footerComponent={<CustomCropperFooter />}
                onDone={this.onDone}
                onCancel={this.onCancel}
                imageUri='https://www.lifeofpix.com/wp-content/uploads/2018/09/manhattan_-11-1600x2396.jpg'
                imageWidth={1600}
                imageHeight={2396}
            />
        );
    }
}

export default AmazingCropperPage