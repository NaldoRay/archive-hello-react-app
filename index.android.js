/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text, View, Image
} from 'react-native';


class Greeting extends Component 
{
  render ()
  {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

export default class HelloReactApp extends Component 
{
	render () 
	{
		let pic = {
		  uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
		};
		return (
			<View style={{alignItems: 'center'}}>
				<Greeting name='Rexxar' />
				<Greeting name='Jaina' />
				<Greeting name='Valeera' />
				<Image source={pic} style={{width: 193, height: 110}}/>
			</View>
		);
	}
}

AppRegistry.registerComponent('HelloReactApp', () => HelloReactApp);
