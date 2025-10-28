import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { AppButton } from './AppButton';
import { commonStyles } from './commonStyles';

export const AdminPage = ({ projects, setView }) => (
  <ScrollView style={commonStyles.screen}>
    <View style={commonStyles.header}>
      <Text style={commonStyles.title}>Admin Dashboard</Text>
      <AppButton title="Back to Site" onPress={() => setView('landing')} />
    </View>
    <Text style={commonStyles.subtitle}>Manage Projects</Text>
    {/* Mock CRUD controls */}
    <AppButton title="Create New Project" onPress={() => Alert.alert('Action', 'Navigate to Create Form')} primary />
    {projects.map(project => (
      <View key={project.id} style={styles.adminProjectItem}>
        <Text style={styles.adminProjectTitle}>{project.title}</Text>
        <View style={styles.adminButtons}>
          <TouchableOpacity onPress={() => Alert.alert('Action', `Editing "${project.title}"`)}>
            <Text style={styles.editButton}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Alert.alert('Confirm', `Delete "${project.title}"?`)}>
            <Text style={styles.deleteButton}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    ))}
  </ScrollView>
);

const styles = StyleSheet.create({
  adminProjectItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderWidth: 2,
    borderColor: '#111',
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  adminProjectTitle: {
    fontSize: 18,
    fontWeight: '500',
  },
  adminButtons: {
    flexDirection: 'row',
  },
  editButton: {
    color: '#007BFF',
    fontWeight: 'bold',
    marginRight: 20,
  },
  deleteButton: {
    color: '#DC3545',
    fontWeight: 'bold',
  },
});