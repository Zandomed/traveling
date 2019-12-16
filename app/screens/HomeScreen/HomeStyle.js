import { StatusBar } from 'react-native';

export const style = {
  flexCenter: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  backgroundImage: {
    position: 'relative',
    top: -StatusBar.currentHeight,
    height: 300,
    marginBottom: 10,
    margin: 0,
    zIndex: 1
  },
  searchContainer: {
    backgroundColor: 'white',

    position: 'absolute',
    // width: '100%',
    height: 60,
    elevation: 7,
    zIndex: 2,
    bottom: -30,
    left: 30,
    right: 30,
    borderRadius: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingVertical: 5,
    paddingHorizontal: 30,
    alignItems: 'center'
  }
};
