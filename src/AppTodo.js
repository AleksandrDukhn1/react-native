import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert} from 'react-native';
import { AddTodo } from './AddTodo';
import { Navbar } from './Navbar';
import { Todo } from './Todo';

export default function AppTodo() {
  const [todos, setTodos] = useState([])

  const addTodo = (title) => {
    setTodos(prev => [...prev, {
      id: Date.now().toString(),
      title
    } ])
  }

  const removeTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  };

  const editTodo = id => {
  };

  return (
    <View>
      <Navbar title='Todo App!'/>
          <View style={styles.container}>
            <AddTodo onSubmit={addTodo}/>
              <FlatList
              keyExtractor={item => item.id.toString()}
              data={todos}
              renderItem={({item}) => (<Todo todo={item} onEdit={editTodo} onRemove={removeTodo}/>)}
              />
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  }
});
