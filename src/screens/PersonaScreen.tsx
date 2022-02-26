import React, {useEffect} from 'react';
import { Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RouteStackParams } from '../navigator/Stack.Navigator';

//interface RouteParams {
//    id: number;
//    name: string;
//    age: number;
//}

interface Props extends StackScreenProps<RouteStackParams, 'PersonaScreen'>{};

const PersonaScreen = ({route, navigation}: Props) => {

    //console.log(route.params);
    const params = route.params;
    useEffect(() => {
        navigation.setOptions({
            title: params.name
        })
    },[]);

    return (
        <>
            <View>
                <Text>Persona: {params.name}</Text>
                <Text>Edad: {params.age}</Text>
            </View>
        </>
    )
}

export default PersonaScreen;