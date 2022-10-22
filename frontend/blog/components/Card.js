import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import moment from "moment";
import { useMutation, gql } from "@apollo/client";

const LIKE_POST = gql`
  mutation Mutation($likePostId: Int!) {
    likePost(id: $likePostId)
  }
`;

const Card = (props) => {
  const { id, title, description, author, likes, createdAt, image } = props;
  const [likePost] = useMutation(LIKE_POST, {
    variables: {
      likePostId: id,
    },
    onCompleted: (data) => {
      // console.log(data);
    },
  });
  return (
    <View style={styles.cardContainer}>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.title}>{title}</Text>
        <Text
          style={[
            styles.description,
            {
              fontSize: 14,
              marginTop: 5,
              color: "#18181870",
              textAlign: "right",
            },
          ]}
        >
          {moment(createdAt).fromNow()}
        </Text>
      </View>
      <Text style={styles.description}>{description}</Text>
      <Text
        style={[
          styles.description,
          { fontSize: 14, marginTop: 5, color: "#18181870" },
        ]}
      >
        {author}
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <View style={[styles.button, { backgroundColor: "#FFEB81" }]}>
          <Text style={{ fontWeight: "900", color: "gray", fontSize: 18 }}>
            Likes: {likes}
          </Text>
        </View>
        <TouchableOpacity onPress={likePost} style={styles.button}>
          <Text>👍</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    shadowColor: "#00000030",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.9,
    shadowRadius: 8,
  },
  title: {
    color: "#181818",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 15,
  },
  image: {
    width: "100%",
    height: 230,
    borderRadius: 6,
  },
  button: {
    backgroundColor: "#000",
    width: "45%",
    height: 35,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
});

export default Card;
