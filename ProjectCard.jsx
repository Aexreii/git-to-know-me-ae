import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const ProjectCard = ({ title, description, technologies }) => (
    <View style={styles.cardContainer}>
        <View style={styles.card}>
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.cardDescription}>{description}</Text>
            <Text style={styles.cardTech}>Technologies: {technologies}</Text>
        </View>
        <View style={styles.cardShadow} />
    </View>
);

const styles = StyleSheet.create({
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
});