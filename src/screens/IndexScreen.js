import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native'
import { Context } from '../context/BlogContext';
import { Entypo } from '@expo/vector-icons'


const IndexScreen = () => {
  const { state, addBlogPost, deleteBlogPost } = useContext(Context);

  return (
    <View>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({ item }) => {
          return <View style={styles.rowStyle}>
            <Text style={styles.titleStyle}>{item.title} - {item.id}</Text>
            <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
              <Entypo style={styles.iconStyle} name="trash" />
            </TouchableOpacity>
          </View>
        }}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  rowStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10
  },
  titleStyle: {
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 24
  }

});

export default IndexScreen;
