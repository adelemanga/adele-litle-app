"use client";
import { useState, useContext } from "react";
import { useMutation } from "@apollo/client";
import { ADD_FOOD, GET_FOODS } from "../graphql/queries";
import { useRouter } from "next/navigation";

const AddFood = () => {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [emoji, setEmoji] = useState("");
  const [continent, setContinent] = useState("");
  const [errors, setErrors] = useState<any>({});
  const router = useRouter();

  const [addFood] = useMutation(ADD_FOOD, {
    refetchQueries: [{ query: GET_FOODS }],
    onCompleted: () => {
      router.push("/foods");
    },
    onError: (error) => {
      console.error("Error adding food:", error);
    },
  });

  const validateForm = () => {
    const newErrors: any = {};
    if (!name) newErrors.name = "Name is required";
    if (!code) newErrors.code = "Code is required";
    if (!emoji) newErrors.emoji = "Emoji is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      await addFood({
        variables: {
          name,
          code,
          emoji,
          continent,
        },
      });
    } catch (error) {
      console.error("An error was occured", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="text-field-with-button">
      <div className="name1">
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setErrors({ ...errors, name: "" });
          }}
          placeholder="Name"
        />
        {errors.name && <p className="error"> {errors.name}</p>}
      </div>
      <div className="name1">
        Code:
        <input
          type="text"
          value={code}
          onChange={(e) => {
            setCode(e.target.value);
            setErrors({ ...errors, code: "" });
          }}
          placeholder="Code"
        />
        {errors.code && <p className="error">{errors.code}</p>}
      </div>
      <div className="name1">
        Emoji:
        <input
          type="text"
          value={emoji}
          onChange={(e) => {
            setEmoji(e.target.value);
            setErrors({ ...errors, emoji: "" });
          }}
          placeholder="Emoji"
        />
        {errors.emoji && <p className="error">{errors.emoji}</p>}
      </div>
      <div>
        {errors.continent && <p className="error">{errors.continent}</p>}
      </div>

      <button type="submit">Ajouter un plat</button>
    </form>
  );
};

export default AddFood;
