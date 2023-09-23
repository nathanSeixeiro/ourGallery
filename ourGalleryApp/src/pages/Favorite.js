import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export function Favorite({navigation}) {
  return (
    <View style={style.container}>
        <Text>Favorite screen</Text>
        <Button 
            title='Click here'
            onPress={() => alert('Favorite!')}
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