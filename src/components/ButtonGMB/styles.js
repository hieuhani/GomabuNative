import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 40,
    alignSelf: 'stretch',
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 18,
    borderRadius: 20,
  },
  icon: {
    marginRight: 30,
    width: 20,
    height: 20,
  },
  caption: {
    letterSpacing: 1,
    fontSize: 14,
    color: 'white',
  },
});
