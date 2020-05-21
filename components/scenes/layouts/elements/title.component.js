import React from 'react';
import {
    Text,
    View,
    Animated
  } from 'react-vr';

import { Easing } from 'react-native';

class Title extends React.Component {
    constructor() {
        super()
        this.state = { slideValue: new Animated.Value(2) };
    }

    componentDidMount() {
        Animated.spring(
          this.state.slideValue,
          {
            toValue: 1,
            friction: 2, //default 7
            tension: 10 //default 40
          }
        ).start();
    }

    render() {
        return (
            <View style={{ margin: 0.1, height: 0.5 }}>
                <Animated.Text style={{
                    fontSize: 0.5,
                    fontWeight: '400',
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    transform: [
                        {scaleY: this.state.slideValue}
                      ]
                    }}>
                    {this.props.text}
                    </Animated.Text>
            </View>
        )
    }
}

export default Title;