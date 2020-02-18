/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eol-last */
/* eslint-disable keyword-spacing */
/* eslint-disable no-trailing-spaces */
/* eslint-disable comma-dangle */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { Image, View, Text, StyleSheet } from 'react-native'

class PhotoCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imageURL: '',
      title: '', 
      description: '', 
    }
  }

  render() {
    if(this.props.listType === 'list'){
          return(
            <View style = { styles.container }>
              <View style>
                <Image
                  style={styles.imageInList}
                  source={{uri:this.props.imageURL}}
                />
                <Text numberOfLines={1} style={styles.title}>{this.props.title}</Text>
              </View>
            </View>
        )
    }else {
        return(
          <View style = { styles.container }>
            <View style = {{ width: '100%', height: 200}}>
              <Image
                style = { styles.imageStyleItems }
                source={{uri:this.props.imageURL}}
              />
                <Text numberOfLines={1} style={styles.title}>{this.props.title}</Text>
            </View>
          </View>
      )
    }
    
  }
}

const styles = StyleSheet.create({
    container:{
      backgroundColor: 'white',
      paddingLeft: 5,
      paddingTop: 5,
      paddingRight: 5,
      paddingBottom: 10,
      flex: 1,
    },
    imageInList: {
        height: 150, 
        width: '100%'
    }, 
    title: {
        fontSize: 18, 
        color: 'black',
    }, 
    description: {
        fontSize: 18, 
        color: 'orange'
    },
  imageStyleItems: {
    width: '100%',
    height: '80%',
    borderRadius: 1,
},
})

export default PhotoCard