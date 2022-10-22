import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { gql, useMutation } from "@apollo/client";

const CREATE_POST = gql`
  mutation CreatePostMutation(
    $title: String!
    $description: String!
    $image: String!
    $author: String!
  ) {
    addPost(
      title: $title
      description: $description
      image: $image
      author: $author
    ) {
      id
      title
      description
      author
      image
      likes
      createdAt
    }
  }
`;

const Add = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [author, setAuthor] = useState("");

  const [createPost] = useMutation(CREATE_POST, {
    variables: {
      title,
      description,
      author,
      image,
    },
    onCompleted: (data) => {
      console.log(data);
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          fontSize: 26,
          marginVertical: 20,
          fontWeight: "900",
          color: "#00000090",
        }}
      >
        Share something with the community
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={setTitle}
          placeholder="Title"
          style={styles.textInput}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={setDescription}
          placeholder="Description"
          style={styles.textInput}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={setAuthor}
          placeholder="author"
          style={styles.textInput}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={setImage}
          value={image}
          placeholder="Image uri"
          style={styles.textInput}
        />
      </View>
      <TouchableOpacity onPress={createPost} style={styles.button}>
        <Text style={{ fontWeight: "bold", fontSize: 16, color: "#00000090" }}>
          Publish
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF5F0",
    alignItems: "center",
  },
  inputContainer: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "#ECE6E0",
  },
  textInput: {
    paddingLeft: 10,
    flex: 1,
    height: 50,
    fontWeight: "bold",
    fontSize: 16,
    color: "#00000090",
  },
  button: {
    borderRadius: 20,
    height: 50,
    width: "90%",
    backgroundColor: "#FFBBC2",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});

export default Add;
