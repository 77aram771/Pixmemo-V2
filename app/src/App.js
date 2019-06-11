/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Router, Scene, Drawer} from 'react-native-router-flux';
import Main_Page from './Conteiner/Main_page';
import AmazingCropperPage from './Conteiner/Cropper';
import ImagesPicker from './Conteiner/ImagePicker';
import SplashApp from 'react-native-splashed-app';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'
import allReducers from './reducers/index'
import {createStore, applyMiddleware} from 'redux';
const store = createStore(allReducers, applyMiddleware(thunk));

import MenuIcon from './Image/icon/MenuIcon.png'
import Pixmemo from './Image/icon/Pixmemo.png';
import MyDrower from "./Conteiner/MyDrawer/index";
class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <SplashApp imageSource={require('./Image/splash.png')} direction="up" duration="2000" withFadeOut>
                    <Router>
                        <Drawer
                            initial
                            hideNavBar={true}
                            key="drawer"
                            drawerImage={MenuIcon}
                            drawerPosition="left"
                            drawerWidth={325}
                            navigationBarStyle={{
                                backgroundColor: '#b12995',
                                borderBottomWidth: 0,
                                borderStyle: 'solid'
                            }}
                            contentComponent={MyDrower}
                            navigationBarTitleImage={Pixmemo}
                            navigationBarTitleImageStyle={{marginLeft: 80}}
                        >
                            <Scene key="root">
                                <Scene key="homeScene" component={Main_Page}/>
                                <Scene key="Cropper" component={ImagesPicker}/>
                            </Scene>
                        </Drawer>
                    </Router>
                </SplashApp>
            </Provider>
        )
    }
}

export default App;