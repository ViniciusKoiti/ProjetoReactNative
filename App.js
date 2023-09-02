import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import TelaForm from './Telas/TelaForm';
import TelaLista from './Telas/TelaLista';

export default function App() {


  return (
    <>
      <TelaForm></TelaForm>
      <TelaLista></TelaLista>
    </>
  );

 
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    color: '#FFF',
    justifyContent: 'center',
  },
});
