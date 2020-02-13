/* eslint-disable jsx-quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable comma-dangle */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableHighlight, FlatList} from 'react-native';
import { searchPhotos } from '../helper/FlickerApi'
import PhotoCard from './PhotoCard'

// create a component
class Home extends Component {

constructor(){
    super()
    this.state = {
        photos: [],
        searchText: ''
    };

}

search = (keyword) => {
    searchPhotos(keyword)
    .then(results => {
        console.log('there are ' + results.length + ' photos')
        //console.log(results)

        this.setState({
            photos: results
        })
    })
}

 
searchButtonPressed = () => {
    this.search(this.state.text)
    //this.refs.listRef.scrollToOffset({x:0, y:0, animated:true})
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='enter your search'
          clearButtonMode='while-editing'
          textAlign={'center'}
          autoCapitalize='none'
          autoCorrect={false}
          onChangeText={(text) => this.setState({
                                    text: text
                                  })}
        />
        <FlatList
          data={this.state.photos}
          renderItem={({item}) => <PhotoCard
                                    imageURL={item.url_m}
                                    title={item.title}
                                    description={item.description._content}
                                  />}
          keyExtractor={item => item.id}
          //ref={'listRef'}
        />
        <TouchableHighlight
          style={styles.button}
          underlayColor='white'
          onPress={() => this.searchButtonPressed()}
        >
          <View>
            <Text style={styles.buttonText}>Search</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
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
    height: 64, 
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
