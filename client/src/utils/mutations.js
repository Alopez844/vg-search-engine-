import gql from 'graphql-tag';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
  `;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
  `;

export const SAVE_VIDEOGAME = gql`
  mutation saveVideoGame($videoGameData: VideoGameInput!) {
    saveVideoGame(videoGameData: $videoGameData) {
      _id
      username
      email
      savedVideoGames {
        videoGameId
        creators
        image
        description
        title
        link
      }
    }
  }
  `;

export const REMOVE_VIDEOGAME = gql`
  mutation removeVideoGame($videoGameId: ID!) {
    removeVideoGame(videoGameId: $videoGameId) {
      _id
      username
      email
      savedVideoGames {
        videoGameId
        creators
        image
        description
        title
        link
      }
    }
  }
  `;