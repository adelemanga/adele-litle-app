import { ApolloProvider } from "@apollo/client";
import client from "../graphql/client";
import Header from "@/components/Header";
import FoodDetails from "@/components/FoodDetails";
import Footer from "@/components/Footer";

export default function FoodDetailsPage() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Header />
        <h1>Les détails de vos plats préféré !</h1>
        <FoodDetails />
        <Footer />
      </div>
    </ApolloProvider>
  );
}
