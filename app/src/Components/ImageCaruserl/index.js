/**
 * Created by Aram on 27.05.2019.
 */
import React from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
    Image,
    Button,
    TouchableOpacity,
    TouchableHighlight,
    Dimensions,
    ScrollView,
} from 'react-native';
import {Container} from 'native-base';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export const MyCarousel = ({image}) => {

    if(image !== null){
        console.log('image', image)
    }

    return (
        <Container style={styles.container}>
            <ScrollView horizontal={true}>
                <View style={styles.viewStyle}>
                    <TouchableHighlight>
                        {/*{image !== null ?*/}
                            {/*<Image source={{uri: image}}/>*/}
                            {/*:*/}
                            {/*<Image source={{uri: ''}}/>*/}
                        {/*}*/}
                        <Image source={image ? {uri: image.uri} : {uri: null}}/>
                    </TouchableHighlight>
                </View>
            </ScrollView>
        </Container>
    )
};

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        width: width,
        height: 85,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    viewStyle: {
        marginLeft: 15,
        marginRight: 15,
    }
});
