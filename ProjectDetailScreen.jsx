import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, Platform } from 'react-native';
import { AppButton } from './AppButton';
import { commonStyles } from './commonStyles';

export const ProjectDetailScreen = ({ project, setView }) => {
  if (!project) {
    return (
      <View style={commonStyles.screen}>
        <Text>Project not found.</Text>
        <AppButton title="Go Back" onPress={() => setView('landing')} />
      </View>
    );
  }

  return (
    <ScrollView style={commonStyles.screen}>
      <View style={styles.detailContainer}>
        {project.imageUrl && (
          <Image source={{ uri: project.imageUrl }} style={styles.projectImage} />
        )}
        <Text style={styles.title}>{project.title}</Text>
        <Text style={styles.tech}>Built with: {project.technologies}</Text>
        <Text style={styles.description}>{project.description}</Text>
        <Text style={styles.longDescription}>
          Here is where a more detailed breakdown of the project would go. You could include the challenges faced, the solutions implemented, and maybe even some code snippets or links to a live demo and the source code on GitHub. This section provides a deeper dive into the "how" and "why" of the project.
        </Text>
        {project.codeSnippet && (
          <View style={styles.codeBlock}>
            <Text style={styles.codeBlockTitle}>Code Snippet</Text>
            <ScrollView horizontal>
              <Text style={styles.codeText}>{project.codeSnippet}</Text>
            </ScrollView>
          </View>
        )}
      </View>
      <AppButton title="< Back to Works" onPress={() => setView('landing')} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  detailContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderWidth: 2,
    borderColor: '#111',
    marginBottom: 25,
  },
  projectImage: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#111',
  },
  title: { ...commonStyles.title, marginBottom: 10 },
  tech: { fontSize: 16, fontStyle: 'italic', color: '#555', marginBottom: 20 },
  description: { fontSize: 18, color: '#333', marginBottom: 20, lineHeight: 24 },
  longDescription: { fontSize: 16, color: '#444', lineHeight: 22 },
  codeBlock: {
    marginTop: 20,
    backgroundColor: '#2d2d2d',
    padding: 15,
    borderRadius: 5,
  },
  codeBlockTitle: {
    color: '#ccc',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  codeText: {
    color: '#90EE90', // Light green for code text
    fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace',
    fontSize: 14,
  },
});