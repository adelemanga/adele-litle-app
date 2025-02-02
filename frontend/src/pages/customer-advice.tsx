import { ApolloProvider } from "@apollo/client";
import client from "../graphql/client";
import Header from "@/components/Header";
import Advice from "@/components/Advice";
import Footer from "@/components/Footer";

export default function AdvicePage() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Header />
        <Advice />
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </div>
    </ApolloProvider>
  );
}
