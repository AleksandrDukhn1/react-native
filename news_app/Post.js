import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';



export const Post = ({ title, imageUrl, createdAt}) => {
    return (
        
            <View style={styles.post}>
                <Image style={styles.post_image} source={{uri: imageUrl}} />
                <View style={styles.post_details}>
                    <Text style={styles.post_title}>{title}</Text>
                    <Text style={styles.post_date}>{new Date(createdAt).toLocaleDateString()}</Text>
                </View>
            </View>
        
      );

}

const styles = StyleSheet.create({
    post: {
      flexDirection: 'row',
      padding: 15,
      borderBottomWidth: 1,
      borderBottomColor: "red",
    },
    post_image: {
      marginEnd: 10,
      width: 60,
      height: 60,
      borderRadius: 12,
      marginBottom: 12,
    },
    post_title: {
      fontSize: 17,
      fontWeight: 700,
    },
    post_details: {
      justifyContent: 'center',
      flex: 1,
    },
    post_date: {
      fontSize: 12,
      color: "blue",
      marginTop: 2,
    }
  });