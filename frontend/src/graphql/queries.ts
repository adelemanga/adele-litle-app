import { gql } from "@apollo/client";

export const GET_FOODS = gql`
  query GetFoods {
    foods {
      id
      code
      name
      emoji
      description
      imgUrl
      continent
    }
  }
`;

export const ADD_FOOD = gql`
  mutation AddFood(
    $name: String!
    $code: String!
    $emoji: String!
    $continent: String!
    $imgUrl: String!
    $description: String!
    $price: String!
  ) {
    addFood(
      input: {
        name: $name
        code: $code
        emoji: $emoji
        description: $description
        imgUrl: $imgUrl
        continent: $continent
        price: $price
      }
    ) {
      id
      name
    }
  }
`;

export const GET_FOOD_DETAILS = gql`
  query GetFoodDetails {
    foods {
      id
      code
      name
      emoji
      description
      imgUrl
      continent
      price
    }
  }
`;

export const GET_FOOD_BY_ID = gql`
  query GetFoodById($foodId: String!) {
    getFoodById(foodId: $foodId) {
      id
      code
      name
      emoji
      description
      imgUrl
      price
      continent
    }
  }
`;

// export const GET_JWT = gql`
//   query Login($password: String!, $email: String!) {
//     login(password: $password, email: $email)
//   }
// `;

export const GET_ALL_CONTACTS = gql`
  query GetAllContacts {
    getAllContacts {
      id
      name
      lastname
      email
      message
    }
  }
`;

export const GET_ALL_ADVICES = gql`
  query GetAllAdvices {
    getAllAvis {
      id
      name
      lastname
      message
      rating
      title
    }
  }
`;
