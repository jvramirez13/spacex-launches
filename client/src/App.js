import "./App.css";
import Launches from "./components/Launches";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import logo from "./logo.png";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <img
          src={logo}
          alt="SpaceX"
          style={{ width: 300, display: "block", margin: "auto" }}
        ></img>
        <Launches />
      </div>
    </ApolloProvider>
  );
}

export default App;
