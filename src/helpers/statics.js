import { Dimensions, Platform } from 'react-native';

export const DEVICE_WIDTH = Dimensions.get('window').width;
export const DEVICE_HEIGHT = Dimensions.get('window').height;

export const IS_ANDROID = Platform.OS === 'android';

export const LOCAL_STORAGE_KEY = 'mid5LocalStorage';

export const isIphoneX = () => {
    let d = Dimensions.get('window');
    const { height, width } = d;
  
    return (
      // This has to be iOS duh
      Platform.OS === 'ios' &&
  
      // Accounting for the height in either orientation
      (height === 812 || width === 812)
    );
}