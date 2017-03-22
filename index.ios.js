/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  ListView
} from 'react-native';

import MainView from 'AwesomeProject/src/MainView';

export default class AwesomeProject extends Component {
  render() {
    return (
      <View style={{flex: 1, paddingTop: 22}}>
        <MainView />
      </View>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
