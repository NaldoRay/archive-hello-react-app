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
			<View style={{flex: 1}}>
				<View style={{flex: 1, backgroundColor: 'powderblue'}} />
				<View style={{flex: 2, backgroundColor: 'skyblue'}} />
				<View style={{flex: 3, backgroundColor: 'steelblue'}} />
			</View>
		);
	}
}

AppRegistry.registerComponent('HelloReactApp', () => HelloReactApp);
