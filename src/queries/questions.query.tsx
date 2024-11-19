import { gql } from '@apollo/client';

export const GET_ALL_QUESTIONS = gql`
  query GetAllQuestions {
    getAllQuestions {
      id
      title
      content
      author {
        id
        email
        profile {
          avatar
          bio
          name
        }
      }
      createdAt
      answers {
        id
        content
        author {
          id
          email
          profile {
            name
          }
        }
        createdAt
      }
    }
  }
`;
// Mutation for creating a new question
export const CREATE_QUESTION = gql`
  mutation CreateQuestion($title: String!, $content: String!) {
    createQuestion(title: $title, content: $content) {
      id
      title
      content
      createdAt
      author {
        id
        email
      }
      answers {
        id
      }
    }
  }
`;

// Mutation for answering a question
export const CREATE_ANSWER = gql`
  mutation CreateAnswer($questionId: ID!, $content: String!) {
    createAnswer(questionId: $questionId, content: $content) {
      id
      content
      createdAt
      author {
        id
        email
      }
      question {
        id
      }
    }
  }
`;

// Mutation for deleting a question
export const DELETE_QUESTION = gql`
  mutation DeleteQuestion($id: ID!) {
    deleteQuestion(id: $id) {
      id
    }
  }
`;

// Mutation for deleting an answer
export const DELETE_ANSWER = gql`
  mutation DeleteAnswer($id: ID!) {
    deleteAnswer(id: $id) {
      id
    }
  }
`;
