import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Sound,
  VideoPano
} from 'react-vr';

import MainMenu from './components/scenes/main-menu.component';
import MovieTheatre from './components/scenes/movie-theatre.component'
import SceneSelect from './components/scenes/scene-select.component';

export default class OutdoorMovieTheater extends React.Component {
  constructor() {
    super();
    this.state={mainMenu: true, sceneSelect: false};
  }

  updateScene(scene) {
    switch(scene) {
      case 2:
        this.setState({ mainMenu: false, sceneSelect: true});
        break;
      case 3:
        this.setState({ mainMenu: false, sceneSelect: false});
        break;
    }
  }

  render() {
    const mainMenu = this.state.mainMenu;
    const sceneSelect = this.state.sceneSelect;

    return (
      <View>
        <Pano source={asset("fort-night.jpg")}>
          <Sound
            volume={0.98}
            loop={true}
            source={{ mp3: asset("theatre_vr_mix.mp3") }}
          />
        </Pano>
        {mainMenu ? (
          <MainMenu
            text={"Outdoor Movie Theater"}
            buttonText={"Select a Movie"}
            updateScene={this.updateScene.bind(this)}
            scene={1}
          />
        ) : sceneSelect ? (
          <SceneSelect
            text={"Scene Select"}
            buttonText={"Chilling out"}
            updateScene={this.updateScene.bind(this)}
            scene={2}
          />
        ) : (
          <MovieTheatre />
        )}
      </View>
    );
  }
};

AppRegistry.registerComponent('OutdoorMovieTheater', () => OutdoorMovieTheater);