import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    useColorScheme,
    SafeAreaView
} from 'react-native'

const AppPro = (): JSX.Element => {
    const isdarkMode = useColorScheme() === 'dark';


    return (
        <SafeAreaView style={styles.container} >
            <View style={styles.container} >
                <Text style={isdarkMode ? styles.textStyleWhite : styles.textStyleBlack} >AppPro</Text>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyleWhite: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    },
    textStyleBlack: {
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold'
    }
})

export default AppPro