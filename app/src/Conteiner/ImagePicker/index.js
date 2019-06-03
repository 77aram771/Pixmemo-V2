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
import {Container, Content, Button, Text} from 'native-base';
import {MyCarousel} from "../../Components/ImageCaruserl/index";
import {Footer_Section} from "../Footer_Section/index";
import {CropperTools} from "../CropperTools/index";
import {ButtonRoundedExample} from "../../Components/Next_Button/index";
import AmazingCropperPage from "../Cropper/index";
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default class ImagesPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filePath: {},
            footerBoolean: true
        };
    }

    handelNext = () => {
        this.setState({
            footerBoolean: !this.state.footerBoolean
        })
    };

    render() {
        console.log(width)
        console.log(height)
        return (
            <Container style={styles.container}>
                <View style={styles.containerImage}>
                    <AmazingCropperPage/>
                </View>
                <MyCarousel image={this.state.filePath.uri}/>

                {/*<ButtonRoundedExample changeBoolean={this.state.footerBoolean}/>*/}
                <Content>
                    <Button rounded style={styles.buttonStyle} onPress={this.handelNext}>
                        <Text>Next</Text>
                    </Button>
                </Content>
                {
                    this.state.footerBoolean ? <Footer_Section/> : <CropperTools/>
                }
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