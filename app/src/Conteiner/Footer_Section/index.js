/**
 * Created by Aram on 27.05.2019.
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
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import Img_delete from '../../Image/icon/delete.png';
import Img_rotate from '../../Image/icon/rotate.png';
import Img_tiles from '../../Image/icon/tiles.png';
export const Footer_Section = () => {
    return (
        <View style={styles.container}>
            <View style={styles.footerButton}>
                <TouchableHighlight>
                    <Image
                        source={Img_tiles}
                    />
                </TouchableHighlight>
                <Text>
                    Tiles
                </Text>
            </View>
            <View style={styles.footerButton}>
                <TouchableHighlight>
                    <Image
                        source={Img_delete}
                    />
                </TouchableHighlight>
                <Text>
                    Delete
                </Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: width,
        height: 110,
        borderTopWidth: 1,
        borderStyle: 'solid',
        borderColor: 'grey',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row'
    },
    footerButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
});