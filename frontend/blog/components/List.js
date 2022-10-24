import { Text, View, ScrollView, SafeAreaView, StyleSheet } from "react-native";
import { useQuery, gql } from "@apollo/client";

// Components
import Card from "./Card";

// Styles
import { spacing, fonts, list } from "../styles/index";

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
  const { loading, error, data } = useQuery(GET_POSTS, {
    pollInterval: 1000,
  });
  if (loading) return <Text>Loading</Text>;
  if (error) return <Text>Error</Text>;

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={spacing.view}>
        <View style={styles.headerTitle}>
          <Text style={fonts.xlarge}>This is where we tell stories</Text>
        </View>
        {data.posts.map((post, index) => {
          return (
            <Card key={post.id} {...post} index={index} posts={data.posts} />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    ...list.listViewTitle,
  },
});

export default List;
