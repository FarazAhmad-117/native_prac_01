import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
    return (
        <View>
            <Text style={styles.headingText}>FlatCards</Text>
            <View style={styles.container}>
                {
                    ['Red', 'Blue', 'Green', 'SkyBlue', 'Purple', 'Magenta'].map((clr, idx) => (
                        <View key={idx} style={[styles.card, { backgroundColor: clr.toLowerCase() }]}>
                            <Text>{clr}</Text>
                        </View>
                    ))
                }
            </View>
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
        flexDirection: 'row',
        justifyContent: 'space-around',
        gap: 10,
        paddingHorizontal: 10,
        marginBottom: 20,
        flexWrap: 'wrap'
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
    }
});
