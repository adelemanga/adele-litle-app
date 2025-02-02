import { ApolloProvider } from "@apollo/client";
import client from "../graphql/client";
import Header from "@/components/Header";
import FoodList from "@/components/FoodList";
import AddFood from "@/components/AddFood";
import Footer from "@/components/Footer";

export default function AddFoodPage() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Header />
        <h1>Ajoute un plat</h1>
        <AddFood />
        <FoodList />
        <Footer />
      </div>
    </ApolloProvider>
  );
}
