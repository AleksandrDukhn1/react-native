import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, Image} from 'react-native';
import { Loading } from './Loading';

export const NewPost =({ route, navigation }) => {

    const [isLoading, setIsLoading] = React.useState(true);
    const [data, setData] = React.useState();
    const { id, title} = route.params;


    React.useEffect(() => {
        navigation.setOptions({
            title,
        });
        axios
        .get('https://645fc8b9fe8d6fb29e261c24.mockapi.io/news/' + id)
        .then(({ data }) => {
            setData(data)
        })
        .catch((err) => {
            console.warn(err);
            Alert.alert('Ошибка', 'Не удалось получить статью')
        })
        .finally(() => {
            setIsLoading(false);
        })
    }, []);

    if (isLoading) {
        return (
            <Loading/>
    )}

    return (
        <View style={{padding: 20}}>
        <Image style={styles.post_image} source={{uri: data.imageUrl}} />
        <Text>{data.text}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    post_image: {
        borderRadius: 10,
        width: '100%',
        height: 250,
        marginBottom: 20,
    },
    post_text: {
        fontSize: 18,
        lineHeight: 24,
    }
})