import { gql } from "@apollo/client";

export const SEARCH_FOODS = gql`
  query SearchFoods($keyword: String!) {
    searchFoods(keyword: $keyword) {
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

export const ADD_CONTACT = gql`
  mutation AddContact(
    $name: String!
    $lastname: String!
    $email: String!
    $message: String!
  ) {
    addContact(
      name: $name
      lastname: $lastname
      email: $email
      message: $message
    ) {
      id
      name
      lastname
      email
      message
    }
  }
`;

export const CREATE_FOOD = gql`
  mutation createNewFood($data: NewFoodInput!) {
    createNewFood(data: $data) {
      id
      name
      description
      price
      emoji
      continent
      imgUrl
    }
  }
`;

export const ADD_ADVICE = gql`
  mutation AddAvis(
    $name: String!
    $lastname: String!
    $message: String!
    $rating: Int!
    $title: String!
  ) {
    addAvis(
      name: $name
      lastname: $lastname
      message: $message
      rating: $rating
      title: $title
    ) {
      id
      name
      lastname
      message
      rating
      title
    }
  }
`;
