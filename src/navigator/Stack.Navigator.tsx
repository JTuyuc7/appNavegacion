import 'react-native-gesture-handler';
import React from 'react'
//import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Pagina1Screen from '../screens/Pagina1Screen';
import Pagina2Screen from '../screens/Pagina2Screen';
import Pagina3Screen from '../screens/Pagina3Screen';
import PersonaScreen from '../screens/PersonaScreen';

export type RouteStackParams = {
    Pagina1Screen: undefined,
    Pagina2Screen: undefined,
    Pagina3Screen: undefined,
    PersonaScreen: { name: string, age: number, id: number}
}

const Stack = createNativeStackNavigator<RouteStackParams>();

const MyStackNavigator = () => {

    return(
        <Stack.Navigator
            //initialRouteName='pagina1'
            screenOptions={{
                headerStyle: {
                    backgroundColor: 'white',
                },
                contentStyle:{
                    backgroundColor: 'yellow',
                }
            }}
        >
            <Stack.Screen 
                name='Pagina1Screen' 
                component={Pagina1Screen} 
                options={
                    {
                        headerTitleAlign: 'center',
                        title: 'Home',
                        headerLargeTitle: false,
                        headerStyle: {
                            backgroundColor: 'white'
                        },
                    }
                }
            />
            <Stack.Screen 
                name='Pagina2Screen' 
                component={Pagina2Screen} 
                options={{
                    title: 'Pagina 2',
                    headerTitleAlign: 'center',
                    headerBackTitle: 'Back',
                    //headerBackVisible: false
                }}
            />

            <Stack.Screen 
                name='Pagina3Screen' 
                component={Pagina3Screen} 
            />

            <Stack.Screen 
                name='PersonaScreen'
                component={PersonaScreen}
                options={{
                    title:'Persona',
                    headerTitleAlign: 'center'
                }}
            />
        </Stack.Navigator>
    )
}

export default MyStackNavigator;