import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useQuery } from '@apollo/client';
import { GET_ALL_TEAMS } from '../queries/team.queries';
import { FETCH_ALL_RATINGS } from '../queries/ratings.queries';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

interface Props {}

// eslint-disable-next-line react/function-component-definition
const BarChart: React.FC<Props> = () => {
  const orgToken = localStorage.getItem('orgToken');
  const { data, loading, error } = useQuery(GET_ALL_TEAMS, {
    variables: {
      orgToken,
    },
    fetchPolicy: 'network-only',
  });

  const {
    data: ratingsData,
    loading: ratingsLoading,
    error: ratingsError,
  } = useQuery(FETCH_ALL_RATINGS, {
    variables: {
      orgToken,
    },
    fetchPolicy: 'network-only',
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (ratingsLoading) return <p>Loading ratings...</p>;
  if (ratingsError) return <p>Error loading ratings: {ratingsError.message}</p>;

  const teamNames = data?.getAllTeams?.map(
    (team: { name: string }) => team.name,
  );
  const ratingsArray = ratingsData?.fetchAllRatings || [];

  const professionalismData = ratingsArray.map(
    (rating: { professional_Skills: string }) =>
      parseFloat(rating.professional_Skills),
  );
  const qualityData = ratingsArray.map((rating: { quality: string }) =>
    parseFloat(rating.quality),
  );
  const quantityData = ratingsArray.map((rating: { quantity: string }) =>
    parseFloat(rating.quantity),
  );
  if (!teamNames || teamNames.length === 0) {
    return <p>No team data available.</p>;
  }

  const datas = {
    labels: teamNames,
    datasets: [
      {
        label: 'Professionalism',
        data: professionalismData,
        backgroundColor: '#5A6ACF',
        borderRadius: 20,
        barThickness: 14,
      },
      {
        label: 'Quality',
        data: qualityData,
        backgroundColor: '#fcffa4',
        borderRadius: 20,
        barThickness: 14,
      },
      {
        label: 'Quantity',
        data: quantityData,
        backgroundColor: '#9f5233',
        borderRadius: 20,
        barThickness: 14,
      },
    ],
  };

  return (
    <div className="w-full h-[300px]">
      <Bar data={datas} options={{ responsive: true }} className="-ml-2" />
    </div>
  );
};

export default BarChart;
