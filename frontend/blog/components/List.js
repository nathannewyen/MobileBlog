import React, { useEffect } from "react";
import { Text, View, ScrollView, SafeAreaView } from "react-native";
import { useQuery, gql } from "@apollo/client";
import Card from "./Card";
const GET_POSTS = gql`
  query GetPosts {
    posts {
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

const List = () => {
  const { loading, error, data, refetch } = useQuery(GET_POSTS, {
    pollInterval: 1000,
  });
  if (loading) return <Text>Loading</Text>;
  if (error) return <Text>Error</Text>;

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          paddingVertical: 30,
          backgroundColor: "#FAF5F0",
        }}
      >
        <Text
          style={{
            color: "#00000090",
            fontSize: 26,
            fontWeight: "900",
          }}
        >
          This are the news
        </Text>
        {data.posts.map((post) => {
          return <Card key={post.id} {...post} />;
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default List;
