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
      slide: new Animated.Value(0),
    };
  }

  componentDidMount() {

    this.state.fade.setValue(1);
    this.state.slide.setValue(1.5);
    
    Animated.sequence([
      //animation 1
      Animated.timing(this.state.fade, {
        toValue: 0,
        duration: 2000,
        easing: Easing.ease,
      }),
      //fire animation 2 and 3 at same time
      Animated.stagger(500, [
        //animation 2
        Animated.timing(this.state.fade, {
          toValue: 1,
          duration: 2000,
          easing: Easing.ease,
        }),
        //animation 3
        Animated.timing(this.state.slide, {
          toValue: 0,
          duration: 2000,
          easing: Easing.ease,
        }),
      ]),
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