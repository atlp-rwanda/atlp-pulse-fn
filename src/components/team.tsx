import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../assets/img1.png';
import image2 from '../assets/img2.png';
import image3 from '../assets/img3.png';

interface TeamMember {
  id: number;
  name: string;
  title: string;
  description: string;
}

// eslint-disable-next-line react/function-component-definition
const Team: React.FC = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    // Fetch team members data or set it manually
    const fetchData = async () => {
      const data: TeamMember[] = [
        {
          id: 1,
          name: 'John Doe',
          title: 'Software Engineer',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          id: 2,
          name: 'Jane Smith',
          title: 'UI/UX Designer',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          id: 3,
          name: 'Alex Johnson',
          title: 'Product Manager',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          id: 4,
          name: 'Sarah Thompson',
          title: 'Marketing Specialist',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          id: 5,
          name: 'Michael Brown',
          title: 'Sales Executive',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          id: 6,
          name: 'Emily Davis',
          title: 'Graphic Designer',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
      ];

      setTeamMembers(data);
    };

    fetchData();
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          autoplay: false,
        },
      },
    ],
  };

  return (
    <div className="p-4 bg-card-container flex justify-center items-center dark:bg-primary w-full">
      <div className="p-4 bg-card-container dark:bg-primary w-4/5">
        <Slider {...settings}>
          {teamMembers.map((member) => (
            <div key={member.id} className="px-4 ">
              <div className=" bg-white dark:bg-card-dark rounded-lg shadow p-4">
                <div className="mb-4">
                  <img
                    className="rounded-full w-16 h-16 mx-auto"
                    src={image1}
                    alt={member.name}
                  />
                </div>
                <div className="text-center">
                  <h3 className=" text-black-100 dark:text-white-500 font-medium">
                    {member.name}
                  </h3>
                  <p className="text-black-100 dark:text-gray-200 font-black">
                    {member.title}
                  </p>
                  <p className="text-black-100 dark:text-gray-400">
                    {member.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="flex justify-center mt-4">
          <div className="flex space-x-2">
            {Array.from(
              Array(Math.ceil(teamMembers.length / 3)),
              (_, index) => (
                <div
                  key={index}
                  className={`w-4 h-4 rounded-full ${
                    index === 0 ? 'bg-gray-700' : 'bg-gray-300'
                  }`}
                />
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
