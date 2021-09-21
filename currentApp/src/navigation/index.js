import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GalleryScreen from '../screens/Gallery';
import LoginScreen from '../screens/Gallery';

function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
        </View>
    );
}
const Stack = createStackNavigator();

function MainRouter() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Current App" component={GalleryScreen} />
                <Stack.Screen name="Login Screen" component={LoginScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainRouter;

const styles = StyleSheet.create({})
