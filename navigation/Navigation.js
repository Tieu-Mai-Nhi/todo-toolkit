import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import TodoList from '../features/TodoList';
import FormEdit from '../screens/FormEdit';

const Stack = createNativeStackNavigator();
const Navigation = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName="Task"
            >
                <Stack.Screen name="Task" component={TodoList} />
                <Stack.Screen name="Edit" component={FormEdit} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation