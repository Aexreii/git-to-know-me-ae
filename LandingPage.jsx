import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AppButton } from './AppButton';
import { ProjectCard } from './ProjectCard';
import { commonStyles } from './commonStyles';

export const LandingPage = ({ projects, isAdmin, setView, handleLogout, setSelectedProject }) => (
  <ScrollView style={commonStyles.screen}>
    <View style={commonStyles.header}>
      <Text style={commonStyles.title}>Works</Text>
      <View style={styles.headerActions}>
        {isAdmin && (
          <TouchableOpacity onPress={() => setView('admin')}>
            <Text style={styles.adminLink}>Admin Page</Text>
          </TouchableOpacity>
        )}
        <AppButton title={isAdmin ? 'Logout' : 'Login'} onPress={handleLogout} />
      </View>
    </View>
    {projects.map(project => (
      <TouchableOpacity
        key={project.id}
        onPress={() => {
          setSelectedProject(project);
          setView('projectDetail');
        }}>
        <ProjectCard
          title={project.title}
          description={project.description}
          technologies={project.technologies}
        />
      </TouchableOpacity>
    ))}
  </ScrollView>
);

const styles = StyleSheet.create({
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  adminLink: {
    marginRight: 15,
    fontWeight: 'bold',
    color: '#007BFF',
    fontSize: 16,
  },
});