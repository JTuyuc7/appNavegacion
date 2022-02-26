import React from 'react';
import { Button, Text, View } from 'react-native';
import {useNavigation } from '@react-navigation/core';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any>{};

const Pagina3Scree = ({navigation}:Props) => {

    const navigator = useNavigation();

    return(
        <>
            <View style={styles.container}>
                <Text style={styles.title}>Pagina 3 Screen</Text>

                <Button
                    title='Go back'
                    onPress={() => navigator.goBack()}
                />

                <Button
                    title='Go Home'
                    onPress={() => navigation.popToTop()}
                />
            </View>
        </>
    )
}

export default Pagina3Scree;