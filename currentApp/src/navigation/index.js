import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GalleryScreen from '../screens/Gallery';
import LoginScreen from '../screens/Login';


const Stack = createStackNavigator();

function MainRouter() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="LoginScreen"
            >
                <Stack.Screen
                    name="GalleryScreen"
                    component={GalleryScreen}
                    options={{ title: 'Current App' }}
                />
                <Stack.Screen
                    name="LoginScreen"
                    component={LoginScreen}
                    options={{ headerShown: false }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainRouter;

const styles = StyleSheet.create({})
