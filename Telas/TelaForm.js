import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';


export default function TelaForm(){
    return(
        <View style={styles.container}>
            <Text>Form Tela</Text>
            <StatusBar style='light'></StatusBar>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    flex:1,
    backgroundColor: '#ccf5ff',
    alignItems:'center',
    justifyContent: 'center',
    }
})