/** @format */
import { Navigation } from 'react-native-navigation';
import { TouchableOpacity } from 'react-native';
import {Routes} from './src/helpers/routes';

TouchableOpacity.defaultProps = { activeOpacity: 0.7 };
Navigation.registerComponent(Routes);
Navigation.events().registerAppLaunchedListener(() => {
Navigation.setRoot({
    root: {
        component: {
        name: "App"
        }
    }
    });
});