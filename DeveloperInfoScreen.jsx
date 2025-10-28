import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';
import { AppButton } from './AppButton';
import { commonStyles } from './commonStyles';

export const DeveloperInfoScreen = ({ setView }) => {
  return (
    <ScrollView style={commonStyles.screen}>
      <View style={styles.container}>
        <Image
          source={{ uri: 'https://picsum.photos/seed/aexrei/400/400' }} // Placeholder image for the developer
          style={styles.avatar}
        />
        <Text style={styles.name}>Aexrei</Text>
        <Text style={styles.bio}>
          A passionate full-stack developer with a love for creating beautiful, functional, and user-centric applications. With a background in both front-end and back-end technologies, I enjoy bringing ideas to life from concept to deployment.
        </Text>
        <Text style={styles.bio}>
          This portfolio is a showcase of my journey in software development, highlighting my skills in React Native, Supabase, and modern UI/UX design principles.
        </Text>
      </View>
      <AppButton title="< Back to Works" onPress={() => setView('landing')} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    borderWidth: 2,
    borderColor: '#111',
    marginBottom: 25,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: '#111',
    marginBottom: 20,
  },
  name: {
    ...commonStyles.title,
    fontSize: 28,
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 15,
  },
});