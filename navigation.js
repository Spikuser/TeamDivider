import React, { useState, useEffect } from 'react';
import Login from './login';
import GameStats from './GameStats';
import Create from './Create';
import Building from './Building';
import App from './App';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();

export default function Navigate() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Create"
                component={Create}
                options={{ title: 'Create' }}
            />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ title: 'Login' }}
            />
        </Stack.Navigator>
    </NavigationContainer>
}