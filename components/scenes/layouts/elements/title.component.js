import React from 'react';
import {
    Text,
    View,
    Animated
  } from 'react-vr';

import { Easing } from 'react-native';

class Title extends React.Component {
  constructor() {
    super();
    this.state = {
      fade: new Animated.Value(0),
      slide: new Animated.Value(1.5),
    };
  }

  componentDidMount() {
    //start sequence
    Animated.sequence([
      //animation 1
      Animated.timing(
        this.state.fade,
        {
         toValue: 1,
         duration: 1000,
         easing: Easing.ease
        }
      ),
      //animation 2
      Animated.timing(
        this.state.slide,
        {
         toValue: 0,
         duration: 1000,
         easing: Easing.ease
        }
      )
    ]).start();
  }

  render() {
    return (
      <View style={{ margin: 0.1, height: 0.5 }}>
        <Animated.Text
          style={{
            fontSize: 0.5,
            opacity: this.state.fade,
            fontWeight: "400",
            textAlign: "center",
            textAlignVertical: "center",
            transform: [{ translateY: this.state.slide }],
          }}
        >
          {this.props.text}
        </Animated.Text>
      </View>
    );
  }
}

export default Title;