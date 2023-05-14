import React from "react";
import AppTodo from "./src/AppTodo";
import Main from "./Main";
import News from "./news_app/News";
import { NewPost } from "./news_app/NewPost";


import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function Navigate() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
                name='Main'
                component={Main}
                options={{title: 'Главная'}}
            />
            <Stack.Screen 
                name='AppTodo'
                component={AppTodo}
                options={{title: 'AppTodo'}}
            />
            <Stack.Screen 
                name='News'
                component={News}
                options={{title: 'Новости'}}
            />
            <Stack.Screen 
                name='NewPost'
                component={NewPost}
                options={{title: 'Статья'}}
            />
        </Stack.Navigator>
    </NavigationContainer>
}