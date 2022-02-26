import React, { useEffect} from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any>{};

const Pagina2Scree = ({navigation}: Props) => {

    return(
        <>
            <View style={styles.container}>
                <Text style={styles.title}>Pagina 2 Screen</Text>

                <Button 
                    title='Go Back'
                    onPress={ () => navigation.goBack()}
                />

                <Button 
                    title='Next Page'
                    onPress={ () => navigation.navigate('Pagina3Screen')}
                />
            </View>
        </>
    )
}

export default Pagina2Scree;