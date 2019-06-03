/**
 * Created by Aram on 27.05.2019.
 */
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TouchableHighlight,
    Dimensions
} from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import Img_delete from '../../Image/icon/delete.png';
import Img_tiles from '../../Image/icon/tiles.png';

export const Footer_Section = () => {
    return (
        <View style={styles.container}>
            <View style={styles.footerButton}>
                <TouchableHighlight style={styles.footerItem}>
                    <Image
                        source={Img_tiles}
                    />
                </TouchableHighlight>
                <Text>
                    Tiles
                </Text>
            </View>
            <View style={styles.footerButton}>
                <TouchableHighlight style={styles.footerItem}>
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
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 12,
            height: 500,
        },
        shadowOpacity: 0.9,
        shadowRadius: 5,
        elevation: 2,
        borderStyle: 'solid',
        borderTopWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.16)'
    },
    footerButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerItem: {
        marginBottom: 10,
    }
});