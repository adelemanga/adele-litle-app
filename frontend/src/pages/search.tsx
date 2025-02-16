import { ApolloProvider } from "@apollo/client";
import client from "../graphql/client";
import Header from "@/components/Header";
import FoodList from "@/components/FoodList";
import Footer from "@/components/Footer";
import SearchFood from "@/components/SearchFood";

export default function AddFoodPage() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Header />
        <h1>Recherche ton plat</h1>
        <SearchFood />
        <FoodList />
        <Footer />
      </div>
    </ApolloProvider>
  );
}
