/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Router, Scene, Drawer} from 'react-native-router-flux';
import Main_Page from './src/Conteiner/Main_page';
import AmazingCropperPage from './src/Conteiner/Cropper';
import MenuIcon from './src/Image/icon/MenuIcon.png'
import Pixmemo from './src/Image/icon/Pixmemo.png';
import ImagePickerButton from './src/Components/ImagePicker'
import SplashApp from 'react-native-splashed-app'
class App extends Component {

    render() {
        return (
            <SplashApp imageSource={require('./src/Image/splash.png')} direction="up" duration="3500" withFadeOut>
                <Router>
                    <Drawer hideNavBar={true}
                            key="drawer"
                            drawerImage={MenuIcon}
                            drawerPosition="left"
                            drawerWidth={300}
                            navigationBarStyle={{
                                backgroundColor: '#b12995',
                                borderBottomWidth: 0,
                                borderStyle: 'solid'
                            }}
                            navigationBarTitleImage={Pixmemo}
                            navigationBarTitleImageStyle={{marginLeft: 80}}
                        // navigationBarTitleImageStyle={{width: 100}}
                    >
                        <Scene key="drawer">
                            <Scene key="homeScene" component={Main_Page}/>
                            <Scene key="pageTree" component={AmazingCropperPage}/>
                            <Scene key="pageTwo" component={ImagePickerButton}/>
                        </Scene>
                    </Drawer>
                </Router>
            </SplashApp>
        )
    }
}

export default App;