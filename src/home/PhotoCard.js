/* eslint-disable eol-last */
/* eslint-disable keyword-spacing */
/* eslint-disable no-trailing-spaces */
/* eslint-disable comma-dangle */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { Image, 
         View, 
         Text,
         StyleSheet, 
         TouchableHighlight } from 'react-native'

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
    return(
      <TouchableHighlight>
        <View styles = { styles.container }>
          <Image
            style={styles.image}
            source={{uri:this.props.imageURL}}
          />
          <Text style={styles.title}>{this.props.title}</Text>
          {/* <Text style={styles.description}>{this.props.description}</Text> */}
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        margin: 20
    },
    image: {
        height: 150, 
        width: '100%'
    }, 
    title: {
        fontSize: 25, 
        fontWeight: '900', // 100 - 900
        color: 'white'
    }, 
    description: {
        fontSize: 25, 
        color: 'orange', 
        fontWeight: '600'
    }
})

export default PhotoCard