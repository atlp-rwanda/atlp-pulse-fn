/* eslint-disable react/no-unescaped-entities */

import React,  { useState, useEffect } from 'react';
import {AiOutlineLeft,AiOutlineRight } from "react-icons/ai";
import Frame from '../assets/Frame.svg'
import second from '../assets/second.svg'
import third from '../assets/third.svg'
import fourth from '../assets/fourth.svg'
import person from '../assets/person.png'
import person2 from '../assets/person2.png'
import ur from '../assets/ur.png'

const testimonials = [
    {   id:1,
        name: 'Bernard Dushimimana',
        role: 'Sr.Manager',
        image: person,
        content: `I'm extremely impressed with Pulse and their performance management platform.
        Since using their services, it has been a game-changer for our organization.
        The platform is intuitive, easy to navigate, and packed with powerful features.
        Tracking performance metrics and setting goals has never been easier. Real-time
        data and analytics provided by Pulse offer valuable insights into our team's
        performance, enabling data-driven decisions. The customer support team has been
        highly responsive and knowledgeable, addressing our queries promptly. Pulse has
        transformed our performance management process, optimizing our operations and
        driving meaningful results. I highly recommend Pulse to any business seeking to
        elevate their performance management to the next level.`,
    },
    {   id:2,
        name: 'Susan',
        role: 'Sr.Manager',
        image: person2,
        content: `I'm delighted to share my positive experience with Pulse and their exceptional
        performance management platform. Implementing their services has led to remarkable
        improvements in our performance tracking and management processes. The user-friendly
        interface and comprehensive features have simplified our goal setting and progress
        monitoring activities. Pulse's in-depth analytics have provided valuable insights
        into our team's performance trends, enabling informed decisions and continuous growth.
        Thanks to Pulse, we have achieved greater transparency, accountability, and productivity
        within our organization. I highly recommend Pulse to any company seeking a robust and
        reliable performance management solution.`,
    },
    {   id:3,
        name: 'University of Rwanda',
        role: 'organisation',
        image: ur,
        content: `
        We are thrilled with the services provided by Pulse. Their performance management platform
                            has exceeded our expectations in every way. The user-friendly interface and comprehensive
                            features have made tracking and monitoring our performance metrics a breeze. Pulse's
                            data-driven insights have revolutionized our approach to performance management,
                            enabling informed decisions and continuous improvement. The support team at Pulse has
                            been exceptional, offering prompt and knowledgeable assistance whenever needed.
                            I wholeheartedly endorse Pulse to any organization seeking to optimize their performance
                            management process and achieve outstanding results.
        `,
    },]


function Testmoniol() {
    const [currentIndex, setCurrentIndex] = useState(0);


    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
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
      <div className="relative flex-col block gap-10 my-20 md:hidden lg:mx-10 md:mx-20 ">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`bg-indigo-100 dark:bg-dark-bg lg:w-1/3 p-8 md:w-full rounded-b-3xl sm:mx-3 rounded-t-3xl ${
              currentIndex === index ? 'visible' : 'hidden'
            }`}
          >
            <div className="flex flex-col items-center mb-4 sm:flex-row">
              <img className="md:w-1/4 sm:w-1/3" src={testimonial.image} alt="" />
  
              <ul>
                <li className="mt-4 ml-3 text-xs text-neutral-600">{testimonial.name}</li>
                <li className="mt-2 ml-3 text-xs">{testimonial.role}</li>
              </ul>
            </div>
            <p className="card-text text-neutral-900">{testimonial.content}</p>
          </div>
        ))}
       
       <span className="absolute p-1 transform -translate-y-1/2 rounded-full opacity-50 top-1/2 left-3 text-neutral-600 bg-slate-50 drop-shadow-2xl ">
        <AiOutlineLeft size={20} onClick={prevTestimonial} className="cursor-pointer" />
      </span>

      <span className="absolute p-1 transform -translate-y-1/2 rounded-full opacity-50 top-1/2 right-3 text-neutral-600 bg-slate-50 drop-shadow-2xl ">
  <AiOutlineRight size={20} onClick={nextTestimonial} className="cursor-pointer" />
</span>
       
        
           
       
      </div>

      <div className="flex-col hidden gap-10 my-20 md:flex md:flex-row lg:mx-10 md:mx-20 ">
        
        {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="p-8 bg-indigo-100 dark:bg-dark-bg lg:w-1/3 md:w-full rounded-b-3xl sm:mx-3 rounded-t-3xl">
            <div className="flex flex-col items-center mb-4 sm:flex-row">
              <img className="md:w-1/4 sm:w-1/3" src={testimonial.image} alt="" />
  
              <ul>
                <li className="mt-4 ml-3 text-xs text-neutral-600">{testimonial.name}</li>
                <li className="mt-2 ml-3 text-xs">{testimonial.role}</li>
              </ul>
            </div>
            <p className="card-text text-neutral-900">{testimonial.content}</p>
          </div>
        ))}
      </div>
      </>
    );
  }

function About({ styles }: any) {
    return (
        <div className="mt-auto bg-white  dark:bg-dark-bg">
            <div className='justify-between w-full h-full '>
                <div>
                    <h1 className="pt-10 pb-4 mb-5 italic text-center text-neutral-700 font lg:text-4xl md:text-2xl">What you can do with us</h1>
                </div>
                <div className="flex card-image lg:mx-10 sm:mx-5 md:flex">
                    <div className=" bg-[#CCD2E8] md:bg-indigo-100   items-center  md:items-start flex-col dark:bg-dark-bg xl:w-1/3 sm:w-full  py-4 lg:rounded-b-3xl lg:rounded-t-3xl sm:rounded-b-3xl px-3">
                    
                        <h2 className=" header-style lg:px-5 lg:text-2xl sm:text-xl lg:text-start sm:text-center md:text-start">
                            Performance Management/Analytics
                        </h2>
                        <div>
                    <div className="mt-4 mb-0 xl:hidden md:hidden">
                        <img src={Frame} alt="frame" />
                    </div>
                        <p className='text-style mt-0 lg:px-5 bg-[#E0E7FF] dark:bg-dark-bg rounded-b-3xl md:rounded-none p-8 md:px-0 md:py-4 ' >
                            Optimize your organization's potential with Performance Management/Analytics.
                            Our cutting-edge solution uses data-driven insights to track and improve
                            performance across your business. Set and monitor KPIs, identify areas for
                            growth, and make informed decisions with our intuitive platform. Achieve
                            remarkable results today!
                        </p>
                    </div>
                    </div>
                    <div className="sm:hidden md:flex xl:flex lg:flex">
                        <img src={Frame} alt="frame" />
                    </div>

                </div>
                <div className="flex mt-10 card-image lg:mx-10 sm:mx-5 md:flex">
                    <div className="sm:hidden md:flex xl:flex lg:flex">
                        <img src={second} alt="second" />
                    </div>
                    <div className=" bg-[#CCD2E8] md:bg-indigo-100  items-center  md:items-start flex-col dark:bg-dark-bg xl:w-1/3 sm:w-full  py-4 lg:rounded-b-3xl lg:rounded-t-3xl sm:rounded-b-3xl px-3">
                   <div>
                   
                        
                        <h2 className=" header-style lg:text-2xl lg:px-5 sm:text-xl lg:text-start sm:text-center">
                            Talent Analytics and <br /> Reporting
                        </h2>
                        <div className="xl:hidden md:hidden">
                        <img src={second} alt="second" />
                    </div>
                        <p className='text-style mt-0 lg:px-5 bg-[#E0E7FF]  dark:bg-dark-bg rounded-b-3xl md:rounded-none p-8 md:px-0 md:py-4 ' >
                            Show up your workforce's potential with Talent Analytics and Reporting.
                            Gain deep insights into your talent pool through data analysis. Identify top performers,
                            discover hidden talent, and optimize your workforce with cutting-edge analytics tools. Utilize
                            customizable reports and intuitive dashboards for a holistic view of your talent landscape.
                            Make data-driven decisions to drive strategic talent management initiatives and achieve sustainable
                            growth and success.
                        </p>
                        </div>
                    </div>
                    
                </div>
                <div className="flex card-image lg:mx-10 sm:mx-5 sm:mt-10 md:flex">
                <div className=" bg-[#CCD2E8] md:bg-indigo-100  items-center  md:items-start flex-col dark:bg-dark-bg xl:w-1/3 sm:w-full  py-4 lg:rounded-b-3xl lg:rounded-t-3xl sm:rounded-b-3xl px-3">
                         <h2 className=" header-style lg:text-2xl lg:px-5 sm:text-xl lg:text-start sm:text-center">
                            Continuous & Tight Feedback Loop
                        </h2>
                        <div>
                        <div className="mt-4 mb-0 xl:hidden md:hidden">
                        <img src={third} alt="thirdimage" />
                    </div>
                        <p className='text-style mt-0 lg:px-5 bg-[#E0E7FF]  dark:bg-dark-bg rounded-b-3xl md:rounded-none p-8 md:px-0 md:py-4 ' >
                            Unlock the potential of a Continuous & Tight Feedback Loop. Our innovative solution
                            enables real-time feedback exchange between employees, fostering a culture of continuous
                            improvement. Seamlessly capture feedback and address development areas promptly, driving
                            success and productivity. Embrace the power of a Continuous & Tight Feedback Loop for
                            enhanced performance.
                        </p>
                    </div>
                    </div>
                    <div className="sm:hidden md:flex xl:flex lg:flex">
                        <img src={third} alt="thirdimage" />
                    </div>
                </div>
                                 <div className="flex card-image lg:mx-10 sm:mx-5 md:flex sm:mt-10">
                    <div className="sm:hidden md:flex xl:flex lg:flex">
                         <img src={fourth} alt="fourthimage" />
                     </div>
                     <div className=" bg-[#CCD2E8] md:bg-indigo-100  items-center  md:items-start flex-col dark:bg-dark-bg xl:w-1/3 sm:w-full  py-4 lg:rounded-b-3xl lg:rounded-t-3xl sm:rounded-b-3xl px-3">
                         <h2 className=" header-style lg:text-2xl lg:px-5 sm:text-xl lg:text-start sm:text-center">
                             Goal Tracking and Progress Monitoring
                         </h2>
                         <div className="mt-4 mb-0 xl:hidden md:hidden">
                         <img src={fourth} alt="fourthimage" />
                     </div>
                     <p className='text-style mt-0 lg:px-5 bg-[#E0E7FF]  dark:bg-dark-bg rounded-b-3xl md:rounded-none p-8 md:px-0 md:py-4 ' >
                             Achieve your goals with Goal Tracking and Progress Monitoring. Our solution
                          empowers individuals and teams to set clear objectives, monitor progress,
                             and stay accountable. Effortlessly define SMART goals, track milestones,
                            and visualize progress in real-time on our user-friendly platform. Gain valuable
                          insights, identify obstacles, and make data-driven adjustments for success.
                             Whether you're an individual professional or a team leader, our tool will
                            keep you focused, motivated, and on the path to accomplishing your goals.

                        </p>
                     </div>
                 </div>
                <div>
                    <h1 className="pt-8 italic text-center font text-neutral-700 lg:text-4xl sm:text-2xl">
                        Excellent human resources and companies</h1>
                    <h1 className="text-center font text-neutral-700 lg:text-4xl sm:text-2xl"> Come shape the future together </h1>
                </div>
                <Testmoniol/>
                
            </div>
        </div>
    )
}
export default About
