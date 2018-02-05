//Import libraries
import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

//Make component
const Header = (props) => {
const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    elevation: 2,
    position: 'relative'
  },
    SafeArea: {
      flex: 1,
      backgroundColor: '#ddd'
  },
  textStyle: {
    fontSize: 20,
    color: 'white'
  }
};
// Make component available
export default Header;
