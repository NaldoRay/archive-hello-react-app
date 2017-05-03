/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry, 
  ListView, Text, View
} from 'react-native';


export default class HelloReactApp extends Component 
{
	// Initialize the hardcoded data
	constructor(props)
	{
		super(props);
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			jsonURL: 'https://facebook.github.io/react-native/movies.json',
			dataSource: ds.cloneWithRows([])
		};
	}
	
	
	componentDidMount ()
	{
		fetch(this.state.jsonURL)
			.then((response) => {console.log(response); return response.json()})
			.then((responseJson) => {
				
				this.setState({ dataSource: this.state.dataSource.cloneWithRows(responseJson.movies) });
			})
			.catch((error) => {
				console.error(error);
			});
	}
	
	
	render () 
	{
		return (
			<View style={{flex: 1, paddingTop: 22}}>
				<ListView
					dataSource={this.state.dataSource}
					renderRow={(rowData) => <Text>{rowData.title} ({rowData.releaseYear})</Text>}
				/>
			</View>
		);
	}
}

AppRegistry.registerComponent('HelloReactApp', () => HelloReactApp);
