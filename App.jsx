import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';

import { LoginScreen } from './LoginScreen';
import { LandingPage } from './LandingPage';
import { AdminPage } from './AdminPage';
import { ProjectDetailScreen } from './ProjectDetailScreen';
import { ChatbotScreen } from './ChatbotScreen';
import { DeveloperInfoScreen } from './DeveloperInfoScreen';
import { commonStyles } from './commonStyles';

// --- Mock Data ---
const initialProjects = [
  {
    id: 1,
    title: 'Portfolio Website V1',
    description: 'My first personal website built with just HTML, CSS, and vanilla JavaScript.',
    technologies: 'HTML, CSS, JS',
    imageUrl: 'https://picsum.photos/seed/project1/400/300',
  },
  {
    id: 2,
    title: 'React To-Do App',
    description: 'A classic to-do application to learn the fundamentals of React state management.',
    technologies: 'React, CSS',
    imageUrl: 'https://picsum.photos/seed/project2/400/300',
    codeSnippet: `const [tasks, setTasks] = useState([]);

const addTask = (text) => {
  if (text) {
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  }
};`,
  },
  {
    id: 3,
    title: 'Mobile Weather App',
    description: 'A cross-platform weather app using React Native and a public weather API.',
    technologies: 'React Native, API',
    imageUrl: 'https://picsum.photos/seed/project3/400/300',
  },
];

// --- Main App Component ---

export default function App() {
  const [view, setView] = useState('login'); // 'login', 'landing', 'admin', 'projectDetail', 'chatbot', 'developerInfo'
  const [isAdmin, setIsAdmin] = useState(false);
  const [projects] = useState(initialProjects);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  const handleLogout = () => {
    setUsername('');
    setPassword('');
    setIsAdmin(false);
    setView('login');
  };

  const renderContent = () => {
    switch (view) {
      case 'landing':
        return <LandingPage projects={projects} isAdmin={isAdmin} setView={setView} handleLogout={handleLogout} setSelectedProject={setSelectedProject} />;
      case 'admin':
        return <AdminPage projects={projects} setView={setView} />;
      case 'projectDetail':
        return <ProjectDetailScreen project={selectedProject} setView={setView} />;
      case 'chatbot':
        return <ChatbotScreen setView={setView} />;
      case 'developerInfo':
        return <DeveloperInfoScreen setView={setView} />;
      case 'login':
      default:
        return <LoginScreen setView={setView} setIsAdmin={setIsAdmin} username={username} password={password} setUsername={setUsername} setPassword={setPassword} />;
    }
  };

  return (
    <SafeAreaView style={commonStyles.container}>
      <StatusBar barStyle="dark-content" />
      {renderContent()}
    </SafeAreaView>
  );
}