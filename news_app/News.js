import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, Alert, FlatList, ActivityIndicator, RefreshControl, TouchableOpacity} from 'react-native';
import { Post } from './Post';
import { Loading } from './Loading';

export default function News({ navigation }) {
    const [isLoading, setIsLoading] = React.useState(true);
    const [ items, setItems ] = React.useState([]);

    const fetchPosts = () => {
        setIsLoading(true);
        axios
        .get('https://645fc8b9fe8d6fb29e261c24.mockapi.io/news')
        .then(({ data }) => {
            setItems(data)
        })
        .catch((err) => {
            console.warn(err)
            Alert.alert('Ошибка', 'Не удалось получить статьи')
        })
        .finally(() => {
            setIsLoading(false);
        });
    }

    React.useEffect(fetchPosts, []);

    if (isLoading) {
        return (
            <Loading/>
    )}

  return (
    <View>
        
        <FlatList
            refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />}
            data={[...items, ...items]}
            renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('NewPost', {id: item.id, title: item.title})}>
            <Post 
                    title={item.title}
                    createdAt={item.createdAt}
                    imageUrl={item.imageUrl}
            />
        </TouchableOpacity>
  )}
        />
    </View>
  );
}

const styles = StyleSheet.create({

});
