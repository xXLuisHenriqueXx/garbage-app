import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../pages/Home";
import User from "../pages/User";
import Login from "../pages/Login";

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                animation: "none"
            }}
        >
            <Stack.Screen 
                name="Login"
                component={Login}
            />
            
            <Stack.Screen 
                name="Home" 
                component={Home} 
            />

            <Stack.Screen
                name="User"
                component={User}
            />
        </Stack.Navigator>
    )
}