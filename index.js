/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';

import { Provider } from 'react-redux';
import { appReduxStore } from './src/redux/store';

import {default as AppNavigationContainer }  from './src/navigation'
import {name as appName} from './app.json';



function App(){
      return (
        <Provider store={appReduxStore}>
            <AppNavigationContainer />
        </Provider>
      );
  }



AppRegistry.registerComponent(appName, () => App);
