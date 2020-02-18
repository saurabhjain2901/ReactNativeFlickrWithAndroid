/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable jsx-quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable comma-dangle */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableHighlight, FlatList, ActivityIndicator, TouchableOpacity} from 'react-native';
import { searchPhotos } from '../helper/FlickerApi'
import PhotoCard from './PhotoCard'

// create a component
class Home extends Component {

constructor(){
    super()
    this.state = {
        photos: [],
        searchText: '',
        isLoading: false,
        listType : ''
    };

}

search = (keyword) => {
    this.setState({ isLoading: true })
    searchPhotos(keyword)
    .then(results => {
        console.log('there are ' + results.length + ' photos')
        //console.log(results)

        this.setState({
            photos: results,
            isLoading: false,
            listType: 'list'
        })
    })
}
 
searchButtonPressed = () => {
    this.search(this.state.text)
    //this.refs.listRef.scrollToOffset({x:0, y:0, animated:true})
}

onChangeListType = () => {
  (this.state.listType === 'list')
  ? this.setState({ listType: 'grid' })
  : this.setState({ listType: 'list' })
}

  render() {
    if (this.state.isLoading) {
        return (
          <View style = {{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ActivityIndicator size = "large"/>
          </View>
        )
    } else {
        return (
        <View style={styles.container}>
            <View style = {{ height: 50, flexDirection: 'row', backgroundColor: 'white' }}>
              <View style = {{ flex: 5 }}>
                  <TextInput
                  style={styles.input}
                  placeholder='Search'
                  clearButtonMode='while-editing'
                  textAlign={'center'}
                  autoCapitalize='none'
                  autoCorrect={false}
                  onChangeText={(text) => this.setState({ text: text })}
                />
              </View>

                <TouchableOpacity
                  activeOpacity={0.8}
                  style = {{ flex: 1 , justifyContent: 'center', backgroundColor: '#ebebeb',}}
                  onPress={() => this.onChangeListType()}>
                      {
                        (this.state.listType === 'list') 
                        ? <Text style = {{ fontSize: 18, textAlign: 'center' }}>Grid</Text>
                        : <Text style = {{ fontSize: 18, textAlign: 'center' }}>List</Text>
                      }
                </TouchableOpacity>
            </View>
          
            {
              (this.state.listType === 'grid')
              ? 
                  <FlatList
                  data={this.state.photos}
                  numColumns = { 2 }
                  key = {this.state.listType === 'grid' ? 2 : 1}
                  contentContainerStyle={{alignItems: 'stretch'}}
                  keyExtractor={item => item.id}
                  renderItem={({item}) => <PhotoCard
                                            listType = { this.state.listType }
                                            style = {{ margin: 20 }}
                                            imageURL={item.url_m}
                                            title={item.title}
                                            description={item.description._content}
                                        />}
                  />
              :

                  <FlatList
                  data={this.state.photos}
                  numColumns = { 1 }
                  key = {this.state.listType === 'grid' ? 2 : 1}
                  contentContainerStyle={{alignItems: 'stretch'}}
                  keyExtractor={item => item.id}
                  renderItem={({item}) => <PhotoCard
                                            listType = { this.state.listType }
                                            style = {{ margin: 20 }}
                                            imageURL={item.url_m}
                                            title={item.title}
                                            description={item.description._content}
                                        />}
                />
            }
            
            <TouchableHighlight
              style={styles.button}
              underlayColor='white'
              onPress={() => this.searchButtonPressed()}>
                <View>
                    <Text style={styles.buttonText}>Search</Text>
                </View>
            </TouchableHighlight>
        </View>
        );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  item: {
    fontSize: 25, 
    padding: 10, 
  }, 
  input: {
    backgroundColor: 'white',
    fontSize: 20, 
  }, 
  button: {
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: 'orange', 
    height: 47, 
  }, 
  buttonText: {
    color: 'white', 
    fontSize: 25, 
    fontWeight: '900', 
  }
});

//make this component available to the app
export default Home;
