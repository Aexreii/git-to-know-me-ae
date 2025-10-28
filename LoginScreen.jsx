import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { AppButton } from './AppButton';
import { commonStyles } from './commonStyles';

export const LoginScreen = ({ setView, setIsAdmin, setUsername, setPassword, username, password }) => {
  const handleLogin = () => {
    // Mock authentication logic
    if (username.toLowerCase() === 'admin' && password === 'password') {
      setIsAdmin(true);
      setView('landing');
    } else if (username && password) {
      setIsAdmin(false);
      setView('landing');
    } else {
      Alert.alert('Invalid Credentials', 'Please enter a username and password.');
    }
  };

  const handleGuest = () => {
    setIsAdmin(false);
    setView('landing');
  };

  return (
    <View style={commonStyles.screen}>
      <Text style={commonStyles.title}>git-to-know-me</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <AppButton title="Log In" onPress={handleLogin} primary />
        <TouchableOpacity onPress={handleGuest}>
          <Text style={styles.guestText}>Continue as Guest</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  input: {
    borderWidth: 2,
    borderColor: '#111',
    padding: 15,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: '#FFF',
  },
  guestText: {
    marginTop: 15,
    textAlign: 'center',
    color: '#555',
    textDecorationLine: 'underline',
    fontSize: 16,
  },
});