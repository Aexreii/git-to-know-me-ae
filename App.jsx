import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Alert,
} from 'react-native';

// --- Mock Data ---
const initialProjects = [
  {
    id: 1,
    title: 'Portfolio Website V1',
    description: 'My first personal website built with just HTML, CSS, and vanilla JavaScript.',
    technologies: 'HTML, CSS, JS',
  },
  {
    id: 2,
    title: 'React To-Do App',
    description: 'A classic to-do application to learn the fundamentals of React state management.',
    technologies: 'React, CSS',
  },
  {
    id: 3,
    title: 'Mobile Weather App',
    description: 'A cross-platform weather app using React Native and a public weather API.',
    technologies: 'React Native, API',
  },
];

// --- Reusable Components ---

const AppButton = ({ onPress, title, primary = false }) => (
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

const ProjectCard = ({ title, description, technologies }) => (
    <View style={styles.cardContainer}>
        <View style={styles.card}>
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.cardDescription}>{description}</Text>
            <Text style={styles.cardTech}>Technologies: {technologies}</Text>
        </View>
        <View style={styles.cardShadow} />
    </View>
);

// --- Screen Components ---

const LoginScreen = ({ setView, setIsAdmin, setUsername, setPassword, username, password }) => {
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
    <View style={styles.screen}>
      <Text style={styles.title}>git-to-know-me</Text>
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

const LandingPage = ({ projects, isAdmin, setView, handleLogout }) => (
  <ScrollView style={styles.screen}>
    <View style={styles.header}>
      <Text style={styles.title}>Works</Text>
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
      <ProjectCard
        key={project.id}
        title={project.title}
        description={project.description}
        technologies={project.technologies}
      />
    ))}
  </ScrollView>
);

const AdminPage = ({ projects, setView }) => (
  <ScrollView style={styles.screen}>
    <View style={styles.header}>
      <Text style={styles.title}>Admin Dashboard</Text>
      <AppButton title="Back to Site" onPress={() => setView('landing')} />
    </View>
    <Text style={styles.subtitle}>Manage Projects</Text>
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

// --- Main App Component ---

export default function App() {
  const [view, setView] = useState('login'); // 'login', 'landing', 'admin'
  const [isAdmin, setIsAdmin] = useState(false);
  const [projects, setProjects] = useState(initialProjects);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogout = () => {
    setUsername('');
    setPassword('');
    setIsAdmin(false);
    setView('login');
  };

  const renderContent = () => {
    switch (view) {
      case 'landing':
        return <LandingPage projects={projects} isAdmin={isAdmin} setView={setView} handleLogout={handleLogout} />;
      case 'admin':
        return <AdminPage projects={projects} setView={setView} />;
      case 'login':
      default:
        return <LoginScreen setView={setView} setIsAdmin={setIsAdmin} username={username} password={password} setUsername={setUsername} setPassword={setPassword} />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {renderContent()}
    </SafeAreaView>
  );
}

// --- Styles ---

const styles = StyleSheet.create({
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
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
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
  // --- Button Styles ---
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
  // --- Login Screen ---
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
  // --- Landing Page ---
  adminLink: {
    marginRight: 15,
    fontWeight: 'bold',
    color: '#007BFF',
    fontSize: 16,
  },
  // --- Project Card ---
  cardContainer: {
    position: 'relative',
    marginBottom: 25,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderWidth: 2,
    borderColor: '#111',
    position: 'relative',
    zIndex: 1,
  },
  cardShadow: {
    position: 'absolute',
    top: 5,
    left: 5,
    right: -5,
    bottom: -5,
    backgroundColor: '#90EE90', // Light Green
    borderWidth: 2,
    borderColor: '#111',
    zIndex: 0,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#111',
  },
  cardDescription: {
    fontSize: 16,
    color: '#333',
    marginBottom: 12,
  },
  cardTech: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#555',
  },
  // --- Admin Page ---
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