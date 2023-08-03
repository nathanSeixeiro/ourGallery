import React from 'react';
import { View, StyleSheet,TouchableOpacity } from 'react-native';

export function CustomTabBarButton({children, onPress}) {
  return (
    <TouchableOpacity 
        style={styles.container}
        onPress={onPress}
        >

        <View style={styles.content}>
            {children}
        </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container: {
        top: -30,
        alignItems:'center',
        justifyContent: 'center',
        //shadow
    },
    content: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#FF6745'
    }
})