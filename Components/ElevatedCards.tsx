import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
    return (
        <View>
            <Text style={styles.headingText} >ElevatedCards</Text>
            <ScrollView style={styles.container}>
                <View style={styles.card}>
                    <Text style={styles.cardText}>Card 1</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.cardText}>Card 2</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.cardText}>Card 3</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.cardText}>Card 4</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.cardText}>Card 5</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.cardText}>Card 6</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.cardText}>Card 7</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ccc',
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    container: {
        flex: 1,
        paddingHorizontal: 10,
        display: 'flex',
        flexDirection: 'row'
    },
    card: {
        width: 100,
        height: 100,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#f5f5f5'
    },
    cardText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
    }
})