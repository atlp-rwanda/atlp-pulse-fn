import React from 'react';
import { gql, useQuery } from '@apollo/client';
import Card from './TeamCard';

export const GET_TEAMS_CARDS = gql`
  query GetAllTeams($orgToken: String!) {
    getAllTeams(orgToken: $orgToken) {
      name
      manager {
        email
        profile {
          name
          lastName
          firstName
        }
      }
      ttl {
        email
      }
      avgRatings {
        quantity
        quality
        attendance
      }
      members {
        profile {
          name
        }
      }
      active
      startingPhase
      cohort {
        name
        phase {
          name
          id
        }
        startDate
        endDate
        program {
          name
          manager {
            email
            profile {
              name
              lastName
              firstName
            }
          }
        }
      }
      id
    }
  }
`;

const ManagerCard = () => {
  const { data, loading, error, refetch } = useQuery(GET_TEAMS_CARDS, {
    variables: {
      orgToken: localStorage.getItem('orgToken'),
    },
  });

  data && data?.getAllTeams.map((team: any) => console.log(team));

  const calculateWeeks = (startingPhase: string) => {
    const currentDay = new Date();
    const startDate = new Date(startingPhase);
    const millisecondsPerWeek = 7 * 24 * 60 * 60 * 1000;
    const weeks = Math.floor(
      (currentDay.getTime() - startDate.getTime()) / millisecondsPerWeek,
    );
    return weeks;
  };
  const teamData =
    data &&
    data?.getAllTeams.map((team: any) => ({
      stylebg: 'bg-green-100',
      stylebg1: 'bg-green-300 text-green-500',
      rating: 'text-green-700',
      grade: 'A +',
      teamname: team.name,
      manager: team.manager.profile.name,
      ttl: team.ttl,
      phase: team.cohort.phase.name,
      week: calculateWeeks(team.startingPhase),
      att: team.avgRatings.attendance,
      Qty: team.avgRatings.quality,
      Qnty: team.avgRatings.quantity,
    }));

  return (
    <div
      className="pt-24 px-4 md:px-0 md:ml-40
    pb-20  w-full dark:bg-dark-frame-bg  dark:text-black h-full flex overflow-x-auto "
    >
      <div className="pl-10 flex">
        <Card
          stylebg="bg-green-100"
          stylebg1="bg-green-300 text-green-500"
          rating="text-green-700"
          grade="A +"
          teamname="Legends"
          manager="Dodo"
          ttl="Florien"
          phase="team project"
          week={4}
          att={2}
          Qty={2}
          Qnty={1.3}
        />
        {teamData &&
          teamData.map((teamProps: any, index: number) => (
            <Card key={index} {...teamProps} />
          ))}

        {/* <Card
          stylebg="bg-yellow-100"
          stylebg1="bg-yellow-300 text-yellow-500"
          rating="text-yellow-700"
          grade="B +"
          teamname="Champions"
        /> */}

        {/* <Card
          stylebg="bg-red-100"
          stylebg1="bg-red-300 text-red-500"
          rating="text-red-700"
          grade="C +"
          teamname="Team Sostene"
        /> */}
      </div>
    </div>
  );
};

export default ManagerCard;
