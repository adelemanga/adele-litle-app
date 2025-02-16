import { useQuery } from "@apollo/client";
import { GET_FOODS } from "../graphql/queries";
import { useState } from "react";
import AddFood from "./AddFood";

function FoodList() {
  const { loading, error, data } = useQuery(GET_FOODS);
  const [modalOpen, setModalOpen] = useState(true);
  const [selectedImage, setSelectedImage] = useState("");
  const [captionText, setCaptionText] = useState("");

  const openModal = (imgUrl: string, name: string) => {
    setSelectedImage(imgUrl); 
    setCaptionText(name);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(true);
    setSelectedImage("");
    setCaptionText("");
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="list">
      <h2>Vos plats</h2>
      
      <ul className="liste">
        {data.foods.map((food: any) => (
          <li className="liste1" key={food.id}>
            <p className="foodName">{food.name}</p>
            <div className="gallery">
              <img
                className="img-food"
                src={food.imgUrl} 
                alt={food.name}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FoodList;
