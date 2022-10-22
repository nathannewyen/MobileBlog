const posts = [
  {
    id: 1,
    title: "The Awakening",
    description: "Post 1",
    author: "Nate",
    image:
      "https://images.unsplash.com/photo-1665925246028-1175f2e51757?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    likes: 10,
    createdAt: "2020-06-01T00:00:00.000Z",
  },
  {
    id: 2,
    title: "City of Glass",
    description: "Post 2",
    author: "Nathan",
    image:
      "https://images.unsplash.com/photo-1665916712273-d5d74843683b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    likes: 1000,
    createdAt: "2021-06-01T00:00:00.000Z",
  },
];

const resolvers = {
  Query: {
    posts: () => posts,
  },

  Mutation: {
    addPost: (_, { title, description, image, author }) => {
      const newPost = {
        id: posts.length + 1,
        title: title,
        description: description,
        image: image,
        author: author,
        likes: 0,
        createdAt: new Date().toISOString(),
      };
      posts.push(newPost);
    },

    deletePost: (_, { id }) => {
      const index = posts.findIndex((post) => post.id === id);
      if (index === -1) {
        return false;
      }
      posts.splice(index, 1);
      return true;
    },

    likePost: (_, { id }) => {
      const index = posts.findIndex((post) => post.id === id);
      if (index === -1) {
        return false;
      }
      posts[index].likes++;
      return true;
    },
  },
};

export default resolvers;
