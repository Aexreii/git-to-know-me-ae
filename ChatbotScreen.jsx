import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { AppButton } from './AppButton';
import { commonStyles } from './commonStyles';

export const ChatbotScreen = ({ setView }) => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello! I am a bot. How can I help you with these projects?', sender: 'bot' },
  ]);
  const [inputText, setInputText] = useState('');
  const scrollViewRef = useRef();

  const handleSend = () => {
    if (inputText.trim().length === 0) return;

    const userMessage = { id: Date.now(), text: inputText, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInputText('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: "Thanks for your message! This is a demo. For a real inquiry, please contact Aexrei directly. This bot will be powered by a real AI soon!",
        sender: 'bot',
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  // Auto-scroll to the bottom when new messages are added
  useEffect(() => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={90}
    >
      <View style={commonStyles.screen}>
        <View style={commonStyles.header}>
          <Text style={commonStyles.title}>Chatbot</Text>
          <AppButton title="< Back" onPress={() => setView('landing')} />
        </View>

        <ScrollView style={styles.messagesContainer} ref={scrollViewRef}>
          {messages.map(msg => (
            <View
              key={msg.id}
              style={[
                styles.messageBubble,
                msg.sender === 'bot' ? styles.botBubble : styles.userBubble,
              ]}
            >
              <Text style={styles.messageText}>{msg.text}</Text>
            </View>
          ))}
        </ScrollView>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type a message..."
            value={inputText}
            onChangeText={setInputText}
            onSubmitEditing={handleSend}
          />
          <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  messagesContainer: {
    flex: 1,
    marginBottom: 10,
  },
  messageBubble: {
    padding: 12,
    borderRadius: 15,
    marginBottom: 10,
    maxWidth: '80%',
  },
  botBubble: {
    backgroundColor: '#E5E5EA',
    alignSelf: 'flex-start',
    borderBottomLeftRadius: 0,
  },
  userBubble: {
    backgroundColor: '#007BFF',
    alignSelf: 'flex-end',
    borderBottomRightRadius: 0,
  },
  messageText: {
    fontSize: 16,
    color: '#000',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 2,
    borderColor: '#111',
    paddingTop: 10,
  },
  input: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#111',
    backgroundColor: '#fff',
    padding: 12,
    fontSize: 16,
    marginRight: 10,
  },
  sendButton: {
    padding: 12,
    backgroundColor: '#111',
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});