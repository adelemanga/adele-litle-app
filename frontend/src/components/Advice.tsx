import { useMutation } from "@apollo/client";
import { useState } from "react";
import { ADD_ADVICE } from "../graphql/mutations";

function Advice() {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    message: "",
    rating: 0, // La note en étoiles (de 0 à 5)
    title: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const [addAvis, { loading, error }] = useMutation(ADD_ADVICE);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRatingChange = (value: number) => {
    setFormData({
      ...formData,
      rating: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Mutation avec les nouveaux champs
      await addAvis({ variables: formData });
      setSuccessMessage("Votre message a été envoyé avec succès !");
      setFormData({
        name: "",
        lastname: "",
        message: "",
        rating: 0,
        title: "",
      });
    } catch (err) {
      console.error("Erreur lors de l'envoi du formulaire :", err);
    }
  };

  return (
    <div className="contact1">
      <h2>Laissez votre avis</h2>

      <form className="avis" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nom :</label>

          <input
            type="text"
            id="name1"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Prénom :</label>

          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Titre de l'avis :</label>

          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="rating">Évaluation :</label>
          <div className="stars">
            {[1, 2, 3, 4, 5].map((value) => (
              <span
                key={value}
                onClick={() => handleRatingChange(value)}
                style={{
                  cursor: "pointer",
                  color: value <= formData.rating ? "gold" : "gray", // Changer la couleur selon la note
                  fontSize: "30px",
                }}
              >
                &#9733; {/* Caractère étoile */}
              </span>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="message">Votre Avis :</label>

          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Envoi en cours..." : "Envoyer"}
        </button>

        {successMessage && <p className="success-message">{successMessage}</p>}
      </form>

      {error && (
        <p className="error-message">
          Une erreur est survenue, veuillez réessayer.
        </p>
      )}

      <div className="image-container1">
        <img
          src="https://adelemanga-portfolio.netlify.app/static/media/girlme.0acab6167e7db055cb7a.png"
          alt="Original Image"
          className="clone-1"
        />
      </div>
    </div>
  );
}

export default Advice;

// import { useQuery } from "@apollo/client";
// import { GET_FOODS } from "../graphql/queries";
// import React, { useEffect, useState } from "react";

// function Advice() {
//   const { loading, error, data } = useQuery(GET_FOODS);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   // Sample reviews array
//   const reviews = [
//     {
//       name: "Queen B",
//       text: "Service impeccable, je reviendrai sans hésiter !",
//       image:
//         "https://ancre-magazine.com/wp-content/uploads/2024/02/cecred-beyonce-lancement.jpeg",
//     },
//     {
//       name: "Taylor Swift",
//       text: "Un moment magique, toute l'équipe est top !",
//       image:
//         "https://images.rtl.fr/~c/1540v1026/rtl/www/1672619-taylor-swift-a-cannes-lors-des-nrj-music-awards-en-janvier-2013.jpg",
//     },
//     {
//       name: "Ed Sheeran",
//       text: "Une expérience incroyable, un vrai régal pour les papilles !",
//       image:
//         "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSC5dHXTqKJqX5YeHlzNtNAXWv2owk3fLLBtUOl_CBvnhBLEZiavi1KVYa-Q-6WSpzxVtgbOVZDdXJqi9M",
//     },
//     {
//       name: "Adele",
//       text: "J'ai adoré chaque minute passée ici, un service exceptionnel !",
//       image:
//         "https://ew.com/thmb/KctxjGWRMP_Ggw_lAS_XlHDpDlw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Adele-Munich-090124-7bf08a36f28d48b8a5027bbdd41b02d2.jpg",
//     },
//     {
//       name: "Rihanna",
//       text: "J'ai adoré chaque minute passée ici, un service exceptionnel !",
//       image:
//         "https://images.prismic.io/lvmh-com/146f4860-7769-4bd0-ac1c-1c6f86a8efb4_Fenty+Beauty+-+BLOC+IDENTITY.jpg?auto=compress%2Cformat&fit=max&w=2048",
//     },
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % reviews.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [reviews.length]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   return (
//     <div className="list">
//       <h2>Les avis clients</h2>
//       <div className="reviews-section">
//         <h1>Avis de nos Clients</h1>
//         <div className="carousel">
//           <div
//             className="carousel-slides"
//             style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//           >
//             {reviews.map((review, index) => (
//               <div className="review-card" key={index}>
//                 <img
//                   src={review.image}
//                   alt={`Photo de ${review.name}`}
//                   className="review-image"
//                 />
//                 <div className="review-content">
//                   <h3>{review.name}</h3>
//                   <p className="review-text">"{review.text}"</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="carousel-indicators">
//             {reviews.map((_, index) => (
//               <button
//                 key={index}
//                 className={`indicator ${
//                   index === currentSlide ? "active" : ""
//                 }`}
//                 onClick={() => setCurrentSlide(index)}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Advice;
