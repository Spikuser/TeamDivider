import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.username}>username</Text>
      <View style={styles.inputContainer}>
        <Image style={styles.icon} source={require('./assets/login/user.png')} />
        <TextInput
          style={styles.input}
          placeholder="type your username"
          onChangeText={setUsername}
          value={username}
        />
      </View>
      <Text style={styles.password}>password</Text>
      <View style={styles.inputContainer}>
        <Image style={styles.icon} source={require('./assets/login/password.png')} />
        <TextInput
          style={styles.input}
          placeholder="type your password"
          onChangeText={setPassword}
          secureTextEntry
          value={password}
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.or}>Or sign up using</Text>

      <View style={styles.socialLoginContainer}>
        <TouchableOpacity>
          <Image source={require('./assets/login/google.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('./assets/login/facebook.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('./assets/login/apple.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  username: {
    alignSelf: 'flex-start',
    marginBottom: 10,
    fontSize: 25,
  },
  password: {
    alignSelf: 'flex-start',
    marginBottom: 10,
    fontSize: 25,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    marginBottom: 15,
  },
  icon: {
    width: 26,
    height: 30,
    marginRight: 10,
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 20,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  loginButton: {
    width: '100%',
    padding: 15,
    backgroundColor: '#6fda44',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  or: {
    alignSelf: 'center',
    marginBottom: 10,
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
  },
});

export default LoginScreen;
