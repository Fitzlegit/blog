import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

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
        title="Save Blog Post"
        color="black"
        onPress={() => onSubmit(title, content)}
      />
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValues: {
    title: "",
    content: "",
  },
};

const styles = StyleSheet.create({
  viewStyle: {
    marginHorizontal: 10,
    justifyContent: "space-between",
  },
  inputStyle: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    textAlignVertical: "top",
    marginBottom: 10,
  },
  labelStyle: {
    fontSize: 20,
    marginBottom: 5,
  },
});

export default BlogPostForm;
