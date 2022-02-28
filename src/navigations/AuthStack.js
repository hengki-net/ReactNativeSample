import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../screens';

const Stack = createStackNavigator();

const AuthStack = () => {
    const theme = useContext(ThemeContext);
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerTitleAlign: 'center',
                cardStyle: { backgroundColor: theme.background },
                headerShown: false,
            }}
        >

            <Stack.Screen name="로그인" component={Login} />

        </Stack.Navigator>
    );
};

export default AuthStack;
