import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any>{};

const Pagina1Screen = ({navigation}: Props) => {
    //console.log(props, 'Props')
    return(
        <>
            <View style={styles.container}>
                <Text style={styles.title}>Pagina 1 Screen</Text>

                <Button 
                    onPress={() => navigation.navigate('Pagina2Screen')}
                    title="Next Page"
                />


                <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                    <TouchableOpacity
                        style={styles.botonStyle}
                        onPress={ () => navigation.navigate('PersonaScreen', {name: 'James', age: '24', id: 1})}
                    >
                        <Text style={styles.textButton}>Persona 1</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.botonStyle}
                        onPress={ () => navigation.navigate('PersonaScreen', {name: 'Sheldon', age: '40', id: 1})}
                    >
                        <Text style={styles.textButton}>Persona 2</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

export default Pagina1Screen;