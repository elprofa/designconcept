import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../apollo/client";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../containers/Layout";

function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default App;
