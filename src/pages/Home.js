import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export function Home({navigation}) {
  return (
    <View style={style.container}>
        <Text>Home screen</Text>
        <Button 
            title='Click here'
            onPress={() => alert('Home!')}
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