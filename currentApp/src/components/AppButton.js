import React from 'react'
import { StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native'

const { width, height } = Dimensions.get("window")

const AppButton = (props) => {
    return (
        <TouchableOpacity 
           activeOpacity={0.8}
        style={styles.button}>
            <Text style={styles.title}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default AppButton

const styles = StyleSheet.create({
    button: {
        // width: width - 20,
        backgroundColor: '#031433',
        borderRadius: 10
    },
    title: {
        textAlign: 'center',
        padding: 15,
        color: '#fff'
    }
})
