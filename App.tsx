import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')



  return (
    <View style={styles.container}>

      <Text style={styles.title}>Login</Text>


      <View style={styles.containerInput}>
        <TextInput
          value={name}
          placeholder='Name'
          placeholderTextColor={"black"}
          onChangeText={(text) => setName(text)}
          style={styles.input}

        />
      </View>


      <View style={styles.containerInput}>
        <TextInput
          value={email}
          placeholder='Email'
          placeholderTextColor={"black"}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}

        />
      </View>

      <View style={styles.containerInput}>
        <TextInput
          value={password}
          placeholder='Password'
          placeholderTextColor={"black"}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}

        />
      </View>


      <StatusBar style="auto" />
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


  title: {
    fontSize: 22,
    fontWeight: 'bold'
  },

  containerInput: {
    width: 340,
    height: 45,
    backgroundColor: '#D3D3D3',
    marginTop: 22,
    overflow: 'hidden',
    borderRadius: 12,
    justifyContent: 'center',
    paddingHorizontal: 10
  },

  input: {
    width: '96%',
    height: '100%',
    fontSize: 17,
    fontWeight: 'bold'
  }


});
