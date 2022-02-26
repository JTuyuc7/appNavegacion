import { createDrawerNavigator } from '@react-navigation/drawer';
import MyStackNavigator from './Stack.Navigator';
import SettingsScreen from '../screens/SettingsScreen';

const Drawer = createDrawerNavigator();

const MenuLateral = () => {

    return(
        <Drawer.Navigator>
            <Drawer.Screen name='StackNavigator' component={MyStackNavigator} />
            <Drawer.Screen name="Settings" component={SettingsScreen} />
        </Drawer.Navigator>
    )
}

export default MenuLateral;