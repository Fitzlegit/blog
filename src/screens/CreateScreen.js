import React, { useContext, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { Context } from '../context/BlogContext';

const CreateScreen = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { addBlogPost } = useContext(Context);

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.labelStyle}>Title:</Text>
      <TextInput
        value={title}
        onChangeText={(text) => setTitle(text)}
        style={styles.inputStyle}
        />
      <Text style={styles.labelStyle}>Content:</Text>
      <TextInput
        multiline
        numberOfLines={5}
        value={content}
        onChangeText={(text) => setContent(text)}
        style={styles.inputStyle}
        />
        <Button
          title="Add Blog Post"
          color="black"
          onPress={() => addBlogPost(title, content)}
         />
    </View>
  )
};

const styles = StyleSheet.create({
  viewStyle: {
    marginHorizontal: 10,
    justifyContent: 'space-between'
  },
  inputStyle: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    textAlignVertical: 'top',
    marginBottom: 10,
  },
  labelStyle: {
    fontSize: 20,
    marginBottom: 5
  },

})


export default CreateScreen;
