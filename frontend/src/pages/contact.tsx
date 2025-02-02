import { ApolloProvider } from "@apollo/client";
import client from "../graphql/client";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Header />
        <h1>Le meilleur restaurant Français !</h1>
        <Contact />
        <Footer />
      </div>
    </ApolloProvider>
  );
}
