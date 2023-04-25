import { useState } from 'react';
import { Button } from 'react-native';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [numero1, setNumero1] = useState(0)

  return (
    <View style={styles.container}>
      <Text>numero: {numero1}</Text>
      <Button title='acrescentar' onPress={()=>{
        setNumero1(numero1 + 1)
      }}/>
      <Button title='tirar' onPress={()=>{
        setNumero1(numero1 - 1)
      }}/>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
