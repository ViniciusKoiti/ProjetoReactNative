import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity, Icon  } from 'react-native';


export default function TelaForm(){
    return(
        <View style={styles.container}>
            <Text>Cadastre uma tarefa</Text>
            <View 
                style={styles.inputConteiner}
                placeholder="Adicionar Tarefa">
                <TextInput 
                    style={styles.texto}
                    placeholder="Adicionar Tarefa"
                >
                </TextInput>
                <TextInput
                    style={styles.texto}
                    placeholder="Adicionar Tarefa"
                >
                </TextInput>
                <TouchableOpacity>
                    <View>
                        <Icon name='save' size={22} color='white' />
                        <Text style={styles.textoBotao}>Salvar</Text>
                    </View>
                </TouchableOpacity>
            </View>
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
    },
    input:{
        
    }
})