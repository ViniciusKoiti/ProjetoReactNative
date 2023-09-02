import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';


export default function TelaLista() {
    return (
        <View style={styles.container}>
            <Text>Lista Tela</Text>
            <StatusBar style='light'></StatusBar>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
    }
})