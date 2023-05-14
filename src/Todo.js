import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Button } from "react-native";

export const Todo = ({ todo, onRemove, onEdit }) => {

    return (
        <TouchableOpacity 
        activeOpacity={0.5} 
        
        >
        <View style={styles.todo}>
            <Text>{todo.title}</Text>
            <Text>
            <Button title="Edit" onPress={onEdit.bind(null, todo.id)}/>
            <Button title="Del" onPress={onRemove.bind(null, todo.id)}/>
            </Text>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5,
    marginBottom: 10
    }
})