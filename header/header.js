import { Text, View } from 'react-native'
import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      <View>
          <Text style = {{
              textAlign: 'center',
              backgroundColor:'violet',
              fontSize : '50px',
          }}>Daily Routine</Text>
      </View>
    )
  }
}

export default Header