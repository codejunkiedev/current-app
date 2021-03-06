import { useNavigation } from '@react-navigation/native'
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput, Dimensions, KeyboardAvoidingView, ImageBackground, Image } from 'react-native'
import SplashScreen from 'react-native-splash-screen'

import AppButton from '../../components/AppButton'

const { width, height } = Dimensions.get("window")
const LoginScreen = () => {
    const [isSelected, setIsSelected] = useState(false)
    const [isUserName, setIsUserName] = useState(false)
    const [isPassword, setIsPassword] = useState(false)


    console.log("is selected: ", isSelected)
    useEffect(() => {
        SplashScreen.hide();
    }, []);

    const navigation = useNavigation()

    return (
        <ImageBackground source={require('../../assets/Images/bg.png')} resizeMode="cover" style={styles.image}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.container}
            >

                <View style={{ marginBottom: height * 0.08 }}>
                    <Image resizeMode="contain" style={{ width: width * 0.8, height: 30 }} source={require('../../assets/Images/logo.png')} />
                </View>
                <TextInput
                    style={[styles.input, { borderColor: isUserName ? "#031433" : "#ddd" }]}
                    placeholder="Username"
                    onBlur={() => setIsUserName(false)}
                    onFocus={() => setIsUserName(true)}
                />
                <TextInput
                    style={[styles.input, { borderColor: isPassword ? "#031433" : "#ddd" }]}
                    placeholder="Password"
                    onBlur={() => setIsPassword(false)}
                    onFocus={() => setIsPassword(true)}
                />
                <View style={styles.buttonContainer}>
                    <AppButton title="Login" onPress={() => navigation.navigate("GalleryScreen")} />
                </View>
            </KeyboardAvoidingView>
        </ImageBackground>

    )
}

export default LoginScreen

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center"
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        width: width * 0.8,
        backgroundColor: '#fff',
        padding: 15,
        marginVertical: 10,
        borderRadius: 10,
        borderWidth: 1.5
    },
    buttonContainer: {
        width: width * 0.8,
        marginTop: height * 0.08
    }
})
