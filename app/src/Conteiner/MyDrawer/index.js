/**
 * Created by Aram on 10.06.2019.
 */
import React, {Component} from 'react';
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

import {Container, Content, List, ListItem} from 'native-base';
import {Actions} from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';

import background from '../../Image/bg.png';
import icon_home from  '../../Image/icon/home.png'
import icon_cart from  '../../Image/icon/catr.png'
import icon_mail from  '../../Image/icon/mail.png'
import icon_global from  '../../Image/icon/global.png'
import icon_priv from  '../../Image/icon/polici.png'
import icon_share from  '../../Image/icon/share.png'
import MenuIcon from '../../Image/icon/MenuIcon.png'
import Pixmemo from '../../Image/icon/Pixmemo.png';

export default class MyDrower extends Component {

    render() {
        const goToHome = () => {
            Actions.homeScene()
        };
        const goToBack = () => {
            Actions.homeScene()
        };
        return (
            <Container>
                <LinearGradient colors={['#b12995', '#3b5998', '#01b8d7']} style={styles.gradient}>
                    <View style={styles.menuHeader}>
                        <ImageBackground source={background} style={styles.bgColor} imageStyle=
                            {{opacity: 0.2}}>
                            <View style={styles.menuHeaderView}>
                                <Image source={Pixmemo}/>
                                <TouchableHighlight onPress={goToBack}>
                                    <Image source={MenuIcon}/>
                                </TouchableHighlight>
                            </View>
                            <View style={styles.menuHeaderFooter}>
                                <Text style={{color: '#ffffff', fontSize: 16}}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis tempor ex, a
                                    sagittis libero
                                </Text>
                            </View>
                        </ImageBackground>
                    </View>
                </LinearGradient>
                <View style={styles.menuFooter}>
                    <Content style={styles.menuFooterContainer}>
                        <List >
                            <ListItem onPress={goToHome}>
                                <TouchableHighlight style={{marginRight: 20, width: 15, height: 16}} >
                                    <Image source={icon_home}/>
                                </TouchableHighlight>
                                <Text style={{color: '#241332', fontSize: 18}}>Home</Text>
                            </ListItem>
                            <ListItem>
                                <TouchableHighlight style={{marginRight: 20, width: 15, height: 16}}>
                                    <Image source={icon_cart}/>
                                </TouchableHighlight>
                                <Text style={{color: '#241332', fontSize: 18}}>Cart</Text>
                            </ListItem>
                            <ListItem>
                                <TouchableHighlight style={{marginRight: 20, width: 15, height: 16}}>
                                    <Image source={icon_mail}/>
                                </TouchableHighlight>
                                <Text style={{color: '#241332', fontSize: 18}}>Contact Us</Text>
                            </ListItem>
                            <ListItem>
                                <TouchableHighlight style={{marginRight: 20, width: 15, height: 16}}>
                                    <Image source={icon_global}/>
                                </TouchableHighlight>
                                <Text style={{color: '#241332', fontSize: 18}}>Language</Text>
                            </ListItem>
                            <ListItem>
                                <TouchableHighlight style={{marginRight: 20, width: 15, height: 16}}>
                                    <Image source={icon_priv}/>
                                </TouchableHighlight>
                                <Text style={{color: '#241332', fontSize: 18}}>Privacy Policy</Text>
                            </ListItem>
                            <ListItem>
                                <TouchableHighlight style={{marginRight: 20, width: 15, height: 16}}>
                                    <Image source={icon_share}/>
                                </TouchableHighlight>
                                <Text style={{color: '#241332', fontSize: 18}}>Share</Text>
                            </ListItem>
                        </List>
                    </Content>
                </View>
            </Container>

        );
    }
}


const styles = StyleSheet.create({
    gradient: {
        flex: 1,
        // borderTopRightRadius: 80,
        // borderBottomLeftRadius: 80,
        // backgroundColor: '#ffffff'
    },
    menuHeader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuHeaderView: {
        flex: 1,
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
    },
    menuHeaderFooter: {
        flex: 1,
        paddingLeft: 30,
        paddingRight: 30
    },
    bgColor: {
        width: '100%',
        height: '100%',
    },
    menuFooter: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    menuFooterContainer: {
        flex: 1,
        width: '100%',
        paddingLeft: 20,
    }

});