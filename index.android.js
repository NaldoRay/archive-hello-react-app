/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry, View
} from 'react-native';


export default class HelloReactApp extends Component 
{
	render () 
	{
		let pic = {
		  uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
		};
		return (
			<View>
				<View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
				<View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
				<View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
			</View>
		);
	}
}

AppRegistry.registerComponent('HelloReactApp', () => HelloReactApp);
