import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export function Upload({navigation}) {
  return (
    <View style={style.container}>
        <Text>Upload screen</Text>
        <Button 
            title='Click here'
            onPress={() => alert('Upload!')}
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