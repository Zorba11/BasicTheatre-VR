import React from 'react';
import {
  View,
  Text,
  VrButton
} from 'react-vr';
import SceneSelectMenu from './layouts/sceneselect-menu.component';

class SceneSelect extends React.Component {

    render() {
        return (
          <SceneSelectMenu
            text={this.props.text}
            buttonText={this.props.buttonText}
            updateScene={this.props.updateScene}
            scene={this.props.scene}
          />
        );
    }
}

export default SceneSelect;