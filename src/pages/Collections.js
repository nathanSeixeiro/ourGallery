import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export function Collections({navigation}) {
  return (
    <View style={style.container}>
        <Text>Collections screen</Text>
        <Button 
            title='Click here'
            onPress={() => alert('Collections!')}
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