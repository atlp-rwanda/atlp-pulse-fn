// import { gql } from '@apollo/client';
import { gql,ApolloClient, InMemoryCache } from '@apollo/client';

import GET_PROFILE from './User';

export const GET_USERS_QUERY = gql`
  query GetUsers($orgToken: String) {
    getUsers(orgToken: $orgToken) {
      email
      id
    }
  }
`;

export const GET_TRAINEES_QUERY = gql`
  query GetTrainees($orgToken: String) {
    getTrainees(orgToken: $orgToken) {
      profile {
        firstName
        lastName
        city
        country
        phoneNumber
        biography
        avatar
        id
        name
      }
      email
      id
      team {
        name
        cohort {
          startDate
          program {
            name
            manager {
              profile {
                name
              }
              email
            }
          }
          name
          phase {
            name
          }
        }
      }
    }
  }
`;
export const GET_COHORT_TRAINEES_QUERY = gql`
  query GetCohortTrainees($cohort: String, $orgToken: String) {
    getCohortTrainees(cohort: $cohort, orgToken: $orgToken) {
      profile {
        name
      }
      email
      id
      team {
        name
        cohort {
          name
          program {
            name
          }
        }
      }
    }
  }
`;

export const GET_COHORTS_QUERY = gql`
  query GetCohorts($orgToken: String) {
    getCohorts(orgToken: $orgToken) {
      name
      id
    }
  }
`;


export const GET_TRAINEE_PROFILE = gql`
  query GetProfile {
    getProfile {
    
      firstName
      name
      city
      country
      address
      phoneNumber
      biography
      avatar
      coverImage
      lastName
      
    }
  }
`;

export const GET_GITHUB_STATISTICS = gql`
query GitHubActivity($organisation: String!, $username: String!) {
  gitHubActivity(organisation: $organisation, username: $username) {
    totalCommits
    pullRequest {
      closed
      merged
      opened
    }
  }
}
`;
export const GET_LOGIN_ACTIVITIES = gql`
query Query {
  getProfile {
    activity {
      
      date
      country_code
      country_name
      city
      IPv4
      state
      latitude
      longitude
      postal
      failed

    }
  }
}`
;


export const GET_ORGANISATION = gql`
query GetOrganization($name: String!) {
  getOrganization(name: $name) {
    name
    activeRepos
    gitHubOrganisation
    description

  }
}
`;






export const ADD_MEMBER_TO_COHORT_MUTATION = gql`
  mutation AddMemberToCohort(
    $cohortName: String!
    $email: String!
    $orgToken: String!
  ) {
    addMemberToCohort(
      cohortName: $cohortName
      email: $email
      orgToken: $orgToken
    )
  }
`;

export const ADD_REPO = gql`
mutation addActiveRepostoOrganization($name: String!, $repoUrl: String!) {
  addActiveRepostoOrganization(name: $name, repoUrl: $repoUrl) {
    name
}
}
`;

export const REMOVE_REPO = gql`
mutation deleteActiveRepostoOrganization($name: String!, $repoUrl: String!) {
  deleteActiveRepostoOrganization(name: $name, repoUrl: $repoUrl) {
    name
}
}
`;

export const UPDATE_ORGANISATION_NAME=gql`
mutation updateGithubOrganisation($name: String!, $gitHubOrganisation: String!) {
  updateGithubOrganisation(name: $name, gitHubOrganisation: $gitHubOrganisation) {
    name
}
}
`

export const REMOVE_MEMBER_FROM_COHORT_MUTATION = gql`
  mutation RemoveMemberFromCohort(
    $teamName: String!
    $orgToken: String!
    $email: String!
  ) {
    removeMemberFromCohort(
      teamName: $teamName
      orgToken: $orgToken
      email: $email
    )
  }
`;

export const EDIT_MEMBER_MUTATION = gql`
  mutation EditMember(
    $removedFromTeamName: String!
    $addedToTeamName: String!
    $email: String!
    $orgToken: String!
  ) {
    editMember(
      removedFromTeamName: $removedFromTeamName
      addedToTeamName: $addedToTeamName
      email: $email
      orgToken: $orgToken
    )
  }
`;

export const INVITE_USER_MUTATION = gql`
  mutation InviteUser($email: String!, $orgToken: String!, $type: String!) {
    inviteUser(email: $email, orgToken: $orgToken, type: $type)
  }
`;
export const ACCEPT_EVENT_MUTATION = gql`
  mutation RespondToEventInvitation(
    $eventId: ID!
    $status: String!
    $reason: String!
    $authToken: String
  ) {
    respondToEventInvitation(
      eventId: $eventId
      status: $status
      reason: $reason
      authToken: $authToken
    ) {
      title
      timeToStart
      timeToEnd
      invitationStatus
      invitationReason
      hostName
      guests
      end
      start
    }
  }
`;
export const GET_TEAM_QUERY = gql`
  query GetAllTeamInCohort($orgToken: String, $cohort: String) {
    getAllTeamInCohort(orgToken: $orgToken, cohort: $cohort) {
      cohort {
        name
      }
      name
    }
  }
`;
export const ADD_MEMBER_TO_TEAM = gql`
  mutation Mutation($teamName: String!, $email: String!, $orgToken: String!) {
    addMemberToTeam(teamName: $teamName, email: $email, orgToken: $orgToken)
  }
`;
export const GET_TEAM_TRAINEE_QUERY = gql`
  query GetTeamTrainees($orgToken: String, $team: String) {
    getTeamTrainees(orgToken: $orgToken, team: $team) {
      profile {
        firstName
        lastName
        city
        country
        phoneNumber
        biography
        avatar
        id
        name
      }
      email
      team {
        name
        cohort {
          startDate
          program {
            name
            manager {
              profile {
                name
              }
              email
            }
          }
          name
          phase {
            name
          }
        }
      }
    }
  }
`;
