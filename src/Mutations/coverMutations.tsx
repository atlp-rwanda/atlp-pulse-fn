import { gql } from '@apollo/client';

export const UPDATE_AVATAR = gql`
  mutation UpdateAvatar($avatar: String) {
    updateAvatar(avatar: $avatar) {
      avatar
    }
  }
`;
export const UPDATE_COVER = gql`
  mutation UpdateCover($cover: String) {
    updateCoverImage(cover: $cover) {
      cover
    }
  }
`;
