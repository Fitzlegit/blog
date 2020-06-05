import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native'
import BlogContext from '../context/BlogContext';


const IndexScreen = () => {
  const blogPosts = useContext(BlogContext);

  return (
    <>
      <Text>Index Screen</Text>
      <FlatList
        data={blogPosts}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>
        }}
      />
    </>
  )
};

const styles = StyleSheet.create({

});

export default IndexScreen;
