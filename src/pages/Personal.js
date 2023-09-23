import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export function Personal({navigation}) {
  return (
    <View style={style.container}>
        <Text>Personal screen</Text>
        <Button 
            title='Click here'
            onPress={() => alert('Personal!')}
        />
    </View>
  );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})