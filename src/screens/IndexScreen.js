import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { Context } from '../context/BlogContext';
import { Entypo } from '@expo/vector-icons'


const IndexScreen = ({ navigation }) => {
  const { state, addBlogPost, deleteBlogPost } = useContext(Context);

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
              <View style={styles.rowStyle}>
                  <Text style={styles.titleStyle}>{item.title} - {item.id}</Text>
                  <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                    <Entypo style={styles.iconStyle} name="trash" />
                  </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  )
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
      headerRight: () => <TouchableOpacity onPress={() => navigation.navigate('Create')}>
      <Entypo name="plus" size={30} style={{ marginRight: 15 }} />
      </TouchableOpacity>
  };
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
