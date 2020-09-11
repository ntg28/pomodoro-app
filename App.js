import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Audio } from 'expo-av';

import colors from './src/colors';

import TimerContainer from './components/TimerContainer';
import DrawerContainer from './components/DrawerContainer';

export default function App() {
  const [mode, setMode] = useState('Session');
  const [started, setStarted] = useState(false);
  const [seconds, setSeconds] = useState(60 * 25);

  useEffect(() => {
    let interval = 0;

    if (started && seconds > 0) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
    } else if (started && seconds === 0) {
      changeMode();
      playAlarmSound();
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [started, seconds])

  async function playAlarmSound() {
    const sound = new Audio.Sound();
    try {
      await sound.loadAsync(require('./src/audios/chicken.mp3'));
      await sound.playAsync();
      setTimeout(async () => {
        await sound.unloadAsync();
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  }

  function playPause() {
    started
      ? setStarted(false)
      : setStarted(true);
  }

  function reset() {
    if (started) { playPause() };
    mode === 'Session'
      ? setSeconds(60 * 25)
      : setSeconds(60 * 5);
  }

  function changeModeAlert() {
    Alert.alert(
      "Toggle between Session and Break",
      "You have sure that you want to toggle?",
      [ 
        { text: 'Yes', onPress: () => changeMode() }, 
        { text: 'No', onPress: () => {} }
      ],
      { cancelable: false });
  }

  function changeMode() {
    if (started) { playPause() };
    mode === 'Session'
      ? setSeconds(60 * 5)
      : setSeconds(60 * 25);
    mode === 'Session'
      ? setMode('Break')
      : setMode('Session');
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor={colors.secondBg} />
      <TimerContainer 
        seconds={seconds}
        mode={mode} />
      <DrawerContainer 
        playPause={playPause}
        reset={reset}
        changeMode={changeModeAlert}
        started={started} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
