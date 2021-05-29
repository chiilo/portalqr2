import React from 'react';
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet} from 'react-native';

/* behavior={Platform.OS === "ios" ? "padding" : null} */
export default function Login(props) {
  return (
    <KeyboardAvoidingView style={styles.background}>
      
      <View style={styles.containerLogo}>
        <Image
        source={require('./assets/qr1.png')}
        style={styles.image}/>
      </View>

        <Text style={styles.mainText}>Portal De Horas</Text>
      
      <View style={styles.container}>
        <TextInput
        style={styles.input}
        placeholder="Login"
        autoCorrect={false}
        onChangeText={()=> {}}
        />
        <TextInput
        style={styles.input}
        placeholder="Senha"
        autoCorrect={false}
        onChangeText={()=> {}}
        />

        <TouchableOpacity style={styles.btnSubmit} onPress={()=>props.navigation.navigate('Clock')}>
          <Text style={styles.submitText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnRegister} onPress={()=>props.navigation.navigate('Reader')}>
          <Text style={styles.registerText}>Criar Conta</Text>
        </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#191919'
  },
  containerLogo:{
    flex:1,
    justifyContent: 'center',
  },
  image:{
    width: 200,
    height: 200
  },
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 50,
  },
  input:{
    backgroundColor: '#FFF',
    width:'90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
  },
  btnSubmit:{
    backgroundColor: '#35AAFF',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7
  },
  submitText:{
    color: '#FFF',
    fontSize: 18,
  },
  btnRegister:{
    marginTop: 10,
  },
  registerText:{
    color: '#FFF',
  },
  mainText:{
    color: '#FFF',
    fontSize: 50,
  },
});