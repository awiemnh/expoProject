import React from 'react';
import { Button, View } from 'react-native';
const BasicButton = () => {
    const handlePress = () => {
        console. log('Button pressed!');
    };

    return (
        <View>
            <Button title="Press me" onPress={handlePress} />
        </View>
    );
};

export default BasicButton;