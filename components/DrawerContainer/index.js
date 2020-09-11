import React from 'react';
import styles from './styles';
import colors from '../../src/colors';
import {
  View,
  TouchableOpacity
} from 'react-native';

import Play from '../../src/svg/play';
import Pause from '../../src/svg/pause';
import Trash from '../../src/svg/trash';
import Hourglass from '../../src/svg/hourglass';

const DrawerContainer = (props) => {
  function playPauseIcon() {
    return props.started
      ? <Pause style={styles.svg} fill={colors.green} />
      : <Play style={styles.svg} fill={colors.green} />
  }

  return (
      <View style={styles.container}>
        <TouchableOpacity onPress={props.playPause}>
          {playPauseIcon()}
        </TouchableOpacity>
        <TouchableOpacity onPress={props.reset}>
          <Trash style={styles.svg} fill={colors.green} />
        </TouchableOpacity>
        <TouchableOpacity onPress={props.changeMode}>
          <Hourglass style={styles.svg} fill={colors.green} />
        </TouchableOpacity>
      </View>
  );
};

export default DrawerContainer;
