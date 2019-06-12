/**
 * Created by Aram on 24.05.2019.
 */
import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    TouchableHighlight,
    Dimensions,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import {Container, Content, Button, Text} from 'native-base';
import {MyCarousel} from "../../Components/ImageCaruserl/index";
import {Footer_Section} from "../Footer_Section/index";
import {ButtonRoundedExample} from "../../Components/Next_Button/index";
import AmazingCropperPage from "../Cropper/index";
import ImagePicker from 'react-native-image-crop-picker';
import myButton from '../../Image/icon/myButton.png';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default class ImagesPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            images: null
        };
    }

    pickSingle(cropit, circular = false, mediaType) {
        ImagePicker.openPicker({
            cropping: cropit,
            cropperCircleOverlay: circular,
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
        });
    }

    renderImage(image) {
        return <Image style={{width: 300, height: 300, resizeMode: 'contain'}} source={image}/>
    }

    renderVideo(video) {
        console.log('rendering video');
        return (<View style={{height: 300, width: 300}}>
            <Video source={{uri: video.uri, type: video.mime}}
                   style={{
                       position: 'absolute',
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
                   repeat={true}/>
        </View>);
    }

    renderAsset(image) {
        if (image.mime && image.mime.toLowerCase().indexOf('video/') !== -1) {
            return this.renderVideo(image);
        }

        return this.renderImage(image);
    }

    handleDeleteImg = () => {
        this.setState({
            image: null,
            images: null
        })
    };


    handelNext = () => {

    };

    render() {
        return (
            <Container style={styles.container}>
                <View style={styles.containerImage}>
                    <ScrollView>
                        {this.state.image ? this.renderAsset(this.state.image) : null}
                        {this.state.images ? this.state.images.map(i => <View
                            key={i.uri}>{this.renderAsset(i)}</View>) : null}
                    </ScrollView>
                    <View style={this.state.image ? {display: 'none'} : {display: 'flex'}}>
                        <TouchableOpacity onPress={() => this.pickSingle(true)} style={styles.ButtonIcon}>
                            <Image
                                source={myButton}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <MyCarousel image={this.state.image}/>

                {/*<ButtonRoundedExample changeBoolean={this.state.footerBoolean}/>*/}
                <Content>
                    <Button rounded style={styles.buttonStyle} onPress={this.handelNext}>
                        <Text>Next</Text>
                    </Button>
                </Content>
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
    ButtonIcon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
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
    buttonStyle: {
        marginTop: 10,
        width: 151,
        height: 41,
        borderRadius: 30,
        backgroundColor: '#0091c1',
        display: 'flex',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 3,
    },
    buttonText: {
        fontSize: 16,
    }
});