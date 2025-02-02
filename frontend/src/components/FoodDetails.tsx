import { useQuery } from "@apollo/client";
import { GET_FOOD_DETAILS } from "../graphql/queries";

function FoodDetails() {
  const { loading, error, data } = useQuery(GET_FOOD_DETAILS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Détails de Nos plats</h2>
      <ul className="ul">
        {data.foods.map((food: any) => (
          <li className="food-details" key={food.id}>
            {food.emoji} <br />
            Name: {food.name} <br />
            <br />
            <a href={food.imgUrl} target="_blank" rel="noopener noreferrer">
              <img className="img-food1" src={food.imgUrl} alt="image" />
            </a>
            <p className="price">{food.price} €</p>
            Code: {food.code} <br />
            Continent: {food.continent}
            <p className="description">{food.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FoodDetails;
