import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

const SettingsScreen = () => {
    return(
        <>
            <View style={styles.container}>
                <Text style={styles.title}>Settings</Text>
            </View>
        </>
    )
}

export default SettingsScreen;