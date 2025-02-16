import { ApolloProvider } from "@apollo/client";
import client from "../graphql/client";
import FoodList from "@/components/FoodList";
import AddFood from "@/components/SearchFood";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Food() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Header />
        <h1>Le meilleur restaurant Français !</h1>
        <FoodList />
        <Footer />
      </div>
    </ApolloProvider>
  );
}
