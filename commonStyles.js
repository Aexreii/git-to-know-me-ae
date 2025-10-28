import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', // Off-white background
  },
  screen: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontFamily: 'System', // Using system default, can be replaced with Archivo Black
    fontWeight: 'bold',
    color: '#111',
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111',
    marginBottom: 20,
  },
});