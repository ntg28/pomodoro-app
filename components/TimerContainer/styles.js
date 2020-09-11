import { StyleSheet } from 'react-native';
import colors from '../../src/colors';

const styles = StyleSheet.create({
  container: {
    flex: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: { color: colors.fg },
  modeText: { fontSize: 50 },
  timeText: { fontSize: 70 },
});

export default styles;
