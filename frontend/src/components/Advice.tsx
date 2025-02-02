import { useQuery } from "@apollo/client";
import { GET_FOODS } from "../graphql/queries";
import React, { useEffect, useState } from "react";

function Advice() {
  const { loading, error, data } = useQuery(GET_FOODS);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample reviews array
  const reviews = [
    {
      name: "Queen B",
      text: "Service impeccable, je reviendrai sans hésiter !",
      image:
        "https://ancre-magazine.com/wp-content/uploads/2024/02/cecred-beyonce-lancement.jpeg",
    },
    {
      name: "Taylor Swift",
      text: "Un moment magique, toute l'équipe est top !",
      image:
        "https://images.rtl.fr/~c/1540v1026/rtl/www/1672619-taylor-swift-a-cannes-lors-des-nrj-music-awards-en-janvier-2013.jpg",
    },
    {
      name: "Ed Sheeran",
      text: "Une expérience incroyable, un vrai régal pour les papilles !",
      image:
        "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSC5dHXTqKJqX5YeHlzNtNAXWv2owk3fLLBtUOl_CBvnhBLEZiavi1KVYa-Q-6WSpzxVtgbOVZDdXJqi9M",
    },
    {
      name: "Adele",
      text: "J'ai adoré chaque minute passée ici, un service exceptionnel !",
      image:
        "https://ew.com/thmb/KctxjGWRMP_Ggw_lAS_XlHDpDlw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Adele-Munich-090124-7bf08a36f28d48b8a5027bbdd41b02d2.jpg",
    },
    {
      name: "Rihanna",
      text: "J'ai adoré chaque minute passée ici, un service exceptionnel !",
      image:
        "https://images.prismic.io/lvmh-com/146f4860-7769-4bd0-ac1c-1c6f86a8efb4_Fenty+Beauty+-+BLOC+IDENTITY.jpg?auto=compress%2Cformat&fit=max&w=2048",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="list">
      <h2>Les avis clients</h2>
      <div className="reviews-section">
        <h1>Avis de nos Clients</h1>
        <div className="carousel">
          <div
            className="carousel-slides"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {reviews.map((review, index) => (
              <div className="review-card" key={index}>
                <img
                  src={review.image}
                  alt={`Photo de ${review.name}`}
                  className="review-image"
                />
                <div className="review-content">
                  <h3>{review.name}</h3>
                  <p className="review-text">"{review.text}"</p>
                </div>
              </div>
            ))}
          </div>
          <div className="carousel-indicators">
            {reviews.map((_, index) => (
              <button
                key={index}
                className={`indicator ${
                  index === currentSlide ? "active" : ""
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advice;
