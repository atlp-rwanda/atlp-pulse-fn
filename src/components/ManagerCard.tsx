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

function ManagerCard() {
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
  data.getAllTeams.map((team: any) => {
    const Qnty = team.avgRatings.quantity || 0;
    const Qty = team.avgRatings.quality || 0;
    const att = team.avgRatings.attendance || 0;
    const average = (Qnty + Qty + att) / 3;
    let stylebg = '';
    let grade = '';
    let stylebg1 = '';
    let rating = '';

    if (average >= 1.8 && average <= 2) {
      stylebg = 'bg-green-100';
      grade = 'A+';
      stylebg1 = 'bg-green-300 text-green-500';
      rating = 'text-green-700';

    } else if (average >= 1.3 && average < 1.8) {
      stylebg = 'bg-green-100';
      grade = 'A';
      rating = 'text-green-700'; 
    } else if (average >= 1 && average < 1.3) {
      stylebg = 'bg-yellow-100';
      grade = 'B+';
      stylebg1 = 'bg-yellow-300 text-yellow-300';
      rating = 'text-yellow-700';
    }
    else if (average >= 0.5 && average < 1) {
      stylebg = 'bg-yellow-100';
      grade = 'B';
      stylebg1 = 'bg-yellow-300 text-yellow-300';
      rating = 'text-yellow-700';
    } else {
      stylebg = 'bg-red-400';
      grade = 'C';
      stylebg1 = 'bg-red-400 text-red-300';
      rating = 'text-red-700';
    }
    const arrowColor = Qty && Qnty && att > 1 ? 'text-green-500 rotate-45'  : 'text-red-500 rotate-45' ;
    return {
      stylebg,
      stylebg1,
      rating,
      grade,
      teamname: team.name,
      manager: team?.manager?.profile ? team.manager.profile.name : team?.manager?.email,
      ttl: team?.ttl?.profile ? team.ttl.profile.name : team?.ttl?.email,
      phase: team.cohort.phase.name,
      week: calculateWeeks(team.startingPhase) > 0 ? calculateWeeks(team.startingPhase) : 0,
      att,
      Qty,
      Qnty,
      active: team?.members.length,
      drop: 0,
      arrowColor,
    };
  });
  return (
    <div
      className="pt-24 px-4 md:px-0 md:ml-40
    pb-20  w-full dark:bg-dark-frame-bg  dark:text-black h-full flex overflow-x-auto "
    >
      <div className="pl-10 flex">
        {teamData &&
          teamData.map((teamProps: any, index: number) => (
            <Card key={index} {...teamProps} />
          ))}
      </div>
    </div>
  );
}

export default ManagerCard;
