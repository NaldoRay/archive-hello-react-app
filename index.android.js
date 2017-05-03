/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text, TextInput,
  ScrollView
} from 'react-native';


export default class HelloReactApp extends Component 
{
	render() {
		return (
		  <Text>Hello world!</Text>
		);
	}
}

AppRegistry.registerComponent('HelloReactApp', () => HelloReactApp);
