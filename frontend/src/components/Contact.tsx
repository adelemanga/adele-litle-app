

import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact">
      <h2>Contactez-nous</h2>

      {formSubmitted ? (
        <p className="success-message">
          Merci pour votre message, nous vous répondrons bientôt !
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nom :</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message :</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit">Envoyer</button>
        </form>
      )}

      <div className="contact-info">
        <h3>Adresse</h3>
        <p>123 Rue de la Gastronomie, Paris, France</p>
        <h3>Téléphone</h3>
        <p>+33 1 23 45 67 89</p>
        <h3>Email</h3>
        <p>contact@restaurant.com</p>
      </div>
    </div>
  );
}

export default Contact;
