const posts = [
  {
    id: 1,
    title: `How Apple's M1 Chips Make macOS Development Much Less Costly`,
    description: `The macOS market share is much smaller than the iOS one. There are many, many more iPhones out there, they dominate Apple’s revenues so that’s where most of their attention goes. The iOS development, thus, is in higher demand, it has superior tools, and is more cost-effective. There had been situations when developers had to give up on creating an extra Mac version of their iOS app or weren’t happy enough with the results when they did pursue the idea.
    The situation is about to change. The Mac made an epic comeback last year equipped with the newest M1 chips, making up with record sales for the years of getting neglected in favor of its iPhone cousin. What’s important to know though is that the introduction of new ARM-based processors, now common for both mobile and desktop devices, means that you can now run iOS apps on Macs natively, making these apps truly universal.`,
    author: "Nate",
    image:
      "https://shakuro.com/_next/image?url=https%3A%2F%2Fblog.cgify.com%2Fwp-content%2Fuploads%2F2021%2F02%2Fnative_ios_apps_on_mac.jpg&w=2560&q=98",
    likes: 10,
    createdAt: "2020-06-01T00:00:00.000Z",
  },
  {
    id: 2,
    title: `A ‘Tripledemic’? Flu and Other Infections Return as Covid Cases Rise.`,
    description:
      "Flu cases are higher than usual for this time of year and are expected to soar. A third virus, R.S.V., is straining pediatric hospitals in some states.",
    author: "Nathan",
    image:
      "https://static01.nyt.com/images/2022/10/21/science/00virus-flu-01/merlin_213125937_e85535bb-ffcf-4235-bec6-0c1e7d91a2e1-threeByTwoMediumAt2X.jpg?format=pjpg&quality=75&auto=webp&disable=upscale",
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
