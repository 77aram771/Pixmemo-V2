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
import Cropper from './src/Conteiner/Cropper';
import MenuIcon from './src/Image/icon/MenuIcon.png'
import Pixmemo from './src/Image/icon/Pixmemo.png';

class App extends Component {
    render() {
        return (
            <Router>
                <Drawer hideNavBar={true}
                        key="drawer"
                        drawerImage={MenuIcon}

                        drawerPosition="left"
                        drawerWidth={300}
                        navigationBarStyle={{backgroundColor: 'red', flex: 1}}
                        navigationBarTitleImage={Pixmemo}
                        navigationBarTitleImageStyle={{marginLeft: 80}}
                    // navigationBarTitleImageStyle={{width: 100}}
                >
                    <Scene key="root">
                        <Scene key="pageOne" component={Main_Page} initial={true}/>
                        <Scene key="pageTwo" component={Cropper}/>
                    </Scene>
                </Drawer>
            </Router>
        )
    }
}

export default App;