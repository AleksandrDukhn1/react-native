import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function Main ({ navigation }) {

   return (
    <View style={style.container}>
        <Button title="Open AppTodo" onPress={() => navigation.navigate('AppTodo')} />
        <Button title="Open News" onPress={() => navigation.navigate('News')} />
    </View>
   )
}

const style = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 50,
      }
})