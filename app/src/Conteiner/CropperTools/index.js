/**
 * Created by Aram on 03.06.2019.
 */
import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    TouchableHighlight,
    Dimensions
} from 'react-native';
import {Container, Content, Button, Text} from 'native-base';

import icon_8X8 from '../../Image/icon/Rectangle_7.png';
import icon_12X8 from '../../Image/icon/Rectangle_7_copy.png';
import icon_8X12 from '../../Image/icon/Rectangle_7_copy_2.png';
import icon_8X24 from '../../Image/icon/Rectangle_7_copy_5.png';
import icon_cnasel from '../../Image/icon/cancel.png';
import icon_check from '../../Image/icon/Path_106.png';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const CropperTools = () => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View>
                    <Text>
                        8X8
                    </Text>
                    <TouchableHighlight>
                        <Image source={icon_8X8}/>
                    </TouchableHighlight>
                </View>
                <View>
                    <Text>
                        8X12
                    </Text>
                    <TouchableHighlight>
                        <Image source={icon_8X12}/>
                    </TouchableHighlight>
                </View>
                <View>
                    <Text>
                        12X8
                    </Text>
                    <TouchableHighlight>
                        <Image source={icon_12X8}/>
                    </TouchableHighlight>
                </View>
                <View>
                    <Text>
                        8X24
                    </Text>
                    <TouchableHighlight>
                        <Image source={icon_8X24}/>
                    </TouchableHighlight>
                </View>
            </View>
            <View style={styles.content}>
                <TouchableHighlight>
                    <Image source={icon_cnasel}/>
                </TouchableHighlight>

                <Text>
                    Tiles
                </Text>
                <TouchableHighlight>
                    <Image source={icon_check}/>
                </TouchableHighlight>

            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height / 7,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
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
        borderColor: 'rgba(0, 0, 0, 0.16)',

    },
    content: {
        width: width,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start'
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