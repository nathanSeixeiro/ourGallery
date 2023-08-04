import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import { Logo } from '../components/Logo/Logo';
import { InputSearch } from '../components/InputSearch/InputSearch';

export function Home({navigation}) {
  return (
    <SafeAreaView style={style.container}>
        <Logo />
    <View style={style.header}>
        <InputSearch />
        {/* teclado sobre junto com tabs*/}
    </View>  
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 35,
        paddingLeft: 14,
        paddingRight: 14,
        marginRight: 30
    },
    header:{
      left: 20
    },
})