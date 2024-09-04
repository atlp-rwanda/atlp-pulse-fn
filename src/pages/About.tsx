/* eslint-disable react/no-unescaped-entities */
import { useTranslation } from 'react-i18next';
import React, { useState, useEffect } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import Frame from '../assets/Frame.svg';
import second from '../assets/second.svg';
import third from '../assets/third.svg';
import fourth from '../assets/fourth.svg';
import person from '../assets/person.png';
import person2 from '../assets/person2.png';
import ur from '../assets/ur.png';

const testimonials = [
  {
    id: 1,
    name: 'Bernard Dushimimana',
    role: 'Sr.Manager',
    organization: 'Andela',
    image: person,
    content: `I'm extremely impressed with Pulse and their performance management platform.
        Since using their services, it has been a game-changer for our organization.
        The platform is intuitive, easy to navigate, and packed with powerful features.`,
  },
  {
    id: 2,
    name: 'Susan',
    role: 'Sr.Manager',
    organization: 'Andela',
    image: person2,
    content: `I'm delighted to share my positive experience with Pulse and their exceptional
        performance management platform. Implementing their services has led to remarkable
        improvements in our performance tracking and management processes.`,
  },
  {
    id: 3,
    name: 'Dr. Jack',
    role: 'Director',
    organization: 'University of Rwanda',
    image: ur,
    content: `
        We are thrilled with the services provided by Pulse. Their performance management platform
        has exceeded our expectations in every way. The user-friendly interface and comprehensive
        features have made tracking and monitoring our performance metrics a breeze.
        `,
  },
];

function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonials.length) % testimonials.length,
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="block md:hidden flex-col lg:mx-10 md:mx-20 my-20 gap-10 relative ">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`bg-indigo-100 dark:bg-dark-bg  dark:text-slate-300 lg:w-1/3 p-8 md:w-full rounded-b-2xl sm:mx-3 rounded-t-3xl ${
              currentIndex === index ? 'visible' : 'hidden'
            }`}
          >
            <div className="flex flex-col sm:flex-row  mb-6 items-center">
              <img
                className="sm:w-1/4"
                src={testimonial.image}
                alt=""
              />

              <ul>
                <li className="text-xs ml-3  dark:text-slate-300 text-neutral-600">
                  {testimonial.name}
                </li>
                <li className="text-xs mt-2  dark:text-slate-300 ml-3">
                  {testimonial.role}, {testimonial.organization}
                </li>
              </ul>
            </div>
            <p className="text-base  dark:text-slate-300 text-neutral-900">
              {testimonial.content}
            </p>
          </div>
        ))}

        <span className="absolute top-1/2 left-3 transform -translate-y-1/2  text-neutral-600 rounded-full bg-slate-50 p-1 drop-shadow-2xl opacity-50 ">
          <AiOutlineLeft
            size={20}
            onClick={prevTestimonial}
            className="cursor-pointer"
          />
        </span>

        <span className="absolute top-1/2 right-3 transform -translate-y-1/2 text-neutral-600 rounded-full bg-slate-50 p-1 drop-shadow-2xl opacity-50 ">
          <AiOutlineRight
            size={20}
            onClick={nextTestimonial}
            className="cursor-pointer"
          />
        </span>
      </div>

      <div className="hidden md:flex md:flex-row flex-col  lg:mx-0 md:mx-0 my-20 gap-10 md:flex-wrap lg:flex-nowrap ">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className="bg-indigo-100  dark:bg-dark-bg lg:w-1/3 p-8 md:w-full  rounded-b-3xl sm:mx-3 rounded-t-3xl "
          >
            <div className="flex flex-col sm:flex-row  mb-6 items-center">
              <img
                className="md:w-1/5 sm:w-1/3"
                src={testimonial.image}
                alt=""
              />

              <ul>
                <li className="text-sm ml-3  dark:text-slate-300  text-neutral-600">
                  {testimonial.name}
                </li>
                <li className="text-sm  dark:text-slate-300  mt-2 ml-3">
                  {testimonial.role}, {testimonial.organization}
                </li>
              </ul>
            </div>
            <p className="text-base dark:text-slate-300  text-neutral-900">
              {testimonial.content}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

function About({ styles }: any) {
  const { t } = useTranslation();

  const aboutCards = [
    {
      title: t('performance'),
      body: t('body1'),
      img: Frame,
      orientation: 'flex-row',
    },
    {
      title: t('analytics'),
      body: t('body2'),
      img: second,
      orientation: 'flex-row-reverse',
    },
    {
      title: t('continuos'),
      body: t('body3'),
      img: third,
      orientation: 'flex-row',
    },
    {
      title: t('goal'),
      body: t('body4'),
      img: fourth,
      orientation: 'flex-row-reverse',
    },
  ];

  return (
    <div className=" bg-white   mt-auto dark:bg-dark-frame-bg">
      <div className=" justify-between w-full h-full pb-5">
        <div>
          <h1 className="text-center text-neutral-700 mb-5 font lg:text-4xl md:text-2xl pt-10 pb-4  dark:text-slate-100">
            {t('hero2')}
          </h1>
        </div>

        {aboutCards.map(({ title, body, img, orientation }) => (
          <div
            key={body}
            className={`mt-10 card-image lg:mx-10 sm:mx-5 md:flex ${orientation} `}
          >
            <div className="shadow-md sm:shadow-none mx-auto md:mx-0 bg-indigo-100  items-center  md:items-start flex-col dark:bg-dark-bg md:w-[45%] md:py-10 md:px-4 max-w-[35em] sm:w-full   sm:rounded-3xl  md:mr-2">
              <h2 className="pt-3 header-style lg:px-5 lg:text-2xl sm:text-xl lg:text-start sm:text-center md:text-start dark:text-slate-200">
                {title}
              </h2>
              <div>
                <div className="xl:hidden md:hidden mb-0 mt-4">
                  <img src={img} alt="frame" />
                </div>
                <p className="text-style mt-0 lg:px-5 bg-[#E0E7FF] dark:bg-dark-bg rounded-b-3xl md:rounded-none p-8 md:px-0 md:py-4 dark:text-slate-300">
                  {body}
                </p>
              </div>
            </div>
            <div className="sm:hidden md:flex xl:flex lg:flex">
              <img
                className="rounded-2xl dark:opacity-80 lg:max-h-[25em]"
                src={img}
                alt="frame"
              />
            </div>
          </div>
        ))}

        <div className="px-5 mt-20">
          <h1 className="font text-center text-neutral-700 lg:text-4xl sm:text-2xl dark:text-slate-100">
            {' '}
            Come shape the future together{' '}
          </h1>
        </div>
        <Testimonial />
      </div>
    </div>
  );
}
export { About}
