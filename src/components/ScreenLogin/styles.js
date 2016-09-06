import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
  },
  section: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionLogin: {
    paddingHorizontal: 40,
    justifyContent: 'center',
    marginTop: 40,
  },
  logo: {
    width: 140,
    height: 140,
  },
  facebook: {
    backgroundColor: '#3C589E',
  },
  google: {
    backgroundColor: '#DE5245',
  },
  margin: {
    marginBottom: 10,
  },
  brandName: {
    color: 'white',
    fontSize: 22,
    fontWeight: '700',
    marginTop: 8,
  },
});
