import React, {Component} from 'react';
import {
    Platform, View, Text, StyleSheet, ScrollView, Alert,
    Image, TouchableOpacity, NativeModules, Dimensions
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import AmazingCropper from 'react-native-amazing-cropper';
import CustomCropperFooter from '../../../src/Components/CustomCropperFooter';
import ImagePicker from 'react-native-image-crop-picker';

export default class AmazingCropperPage extends Component {

    constructor() {
        super();
        this.state = {
            image: null,
            images: null
        };
    }


    pickSingle(cropit, circular=false, mediaType) {
        ImagePicker.openPicker({
            width: 500,
            height: 500,
            cropping: cropit,
            cropperCircleOverlay: circular,
            compressImageMaxWidth: 1000,
            compressImageMaxHeight: 1000,
            compressImageQuality: 1,
            compressVideoPreset: 'MediumQuality',
            includeExif: true,
        }).then(image => {
            console.log('received image', image);
            this.setState({
                image: {uri: image.path, width: image.width, height: image.height, mime: image.mime},
                images: null
            });
        }).catch(e => {
            console.log(e);
            // Alert.alert(e.message ? e.message : e);
        });
    }
    renderImage(image) {
        return <Image style={{width: 300, height: 300, resizeMode: 'contain'}} source={image} />
    }

    renderVideo(video) {
        console.log('rendering video');
        return (<View style={{height: 300, width: 300}}>
            <Video source={{uri: video.uri, type: video.mime}}
                   style={{position: 'absolute',
                       top: 0,
                       left: 0,
                       bottom: 0,
                       right: 0
                   }}
                   rate={1}
                   paused={false}
                   volume={1}
                   muted={false}
                   resizeMode={'cover'}
                   onError={e => console.log(e)}
                   onLoad={load => console.log(load)}
                   repeat={true} />
        </View>);
    }

    renderAsset(image) {
        if (image.mime && image.mime.toLowerCase().indexOf('video/') !== -1) {
            return this.renderVideo(image);
        }

        return this.renderImage(image);
    }



    render() {
        return (
            <View>
                <ScrollView>
                    {this.state.image ? this.renderAsset(this.state.image) : null}
                    {this.state.images ? this.state.images.map(i => <View key={i.uri}>{this.renderAsset(i)}</View>) : null}
                </ScrollView>
                <TouchableOpacity onPress={() => this.pickSingle(true)}>
                    <Text>Select Single With Cropping</Text>
                </TouchableOpacity>
            </View>
        )
    }

}