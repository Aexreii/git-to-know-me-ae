import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export const AppButton = ({ onPress, title, primary = false }) => (
  <View style={styles.buttonContainer}>
    <TouchableOpacity
      style={[styles.button, primary ? styles.primaryButton : styles.secondaryButton]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, primary ? styles.primaryButtonText : styles.secondaryButtonText]}>
        {title}
      </Text>
    </TouchableOpacity>
    <View style={[styles.buttonShadow, primary ? styles.primaryButtonShadow : styles.secondaryButtonShadow]} />
  </View>
);

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'relative',
    width: 'auto',
    marginVertical: 10,
  },
  button: {
    borderWidth: 2,
    borderColor: '#111',
    paddingVertical: 12,
    paddingHorizontal: 25,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    zIndex: 1,
  },
  buttonShadow: {
    position: 'absolute',
    top: 4,
    left: 4,
    right: -4,
    bottom: -4,
    borderWidth: 2,
    borderColor: '#111',
    zIndex: 0,
  },
  primaryButton: {
    backgroundColor: '#FFD700', // Vibrant Yellow
  },
  primaryButtonShadow: {
    backgroundColor: '#111',
  },
  secondaryButton: {
    backgroundColor: '#FFF',
  },
  secondaryButtonShadow: {
     backgroundColor: '#CCC',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  primaryButtonText: {
    color: '#111',
  },
  secondaryButtonText: {
    color: '#111',
  },
});