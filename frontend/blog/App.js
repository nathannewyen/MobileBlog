import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// Stacks
import HomeStack from "./stacks/Drawer";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <HomeStack />
    </ApolloProvider>
  );
};

export default App;
