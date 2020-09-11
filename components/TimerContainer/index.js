import React from 'react';
import styles from './styles';
import {
  Text,
  View
} from 'react-native';

const TimerContainer = (props) => {
  function secsToMins(secs) {
    let mins = Math.floor(secs / 60);
    secs = secs - mins * 60;
    return secs.toString().length === 1
      ? `${mins}:0${secs}`
      : `${mins}:${secs}`;
  }

  let time = secsToMins(props.seconds);

  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.modeText]}>
        {props.mode}
      </Text>
      <Text style={[styles.text, styles.timeText]}>
        {time}
      </Text>
    </View>
  );
};

export default TimerContainer;
