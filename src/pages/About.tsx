
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Frame from '../assets/Frame.svg'
import second from '../assets/second.svg'
import third from '../assets/third.svg'
import fourth from '../assets/fourth.svg'
import person from '../assets/person.png'
import person2 from '../assets/person2.png'
import ur from '../assets/ur.png'


function About({ styles }: any) {
    return (
        <div className="w-full bg-white dark:bg-dark-bg  mt-auto">
            <div className=' justify-between w-full h-full'>
                <div>
                    <h1 className="text-center text-neutral-700 mb-5 font text-4xl pt-10 pb-4 italic">What you can do with us</h1>
                </div>
                <div className="card-image mx-10 flex">
                    <div className="bg-indigo-100 items-start flex-col dark:bg-dark-bg md:w-1/3 xl:w-1/3 py-6 rounded-b-3xl rounded-t-3xl px-8">
                        <h2 className=" header-style">
                            Performance Management/Analytics
                        </h2>
                        <p className='text-style mt-5'>
                            Optimize your organization's potential with Performance Management/Analytics.
                            Our cutting-edge solution uses data-driven insights to track and improve
                            performance across your business. Set and monitor KPIs, identify areas for
                            growth, and make informed decisions with our intuitive platform. Achieve
                            remarkable results today!
                        </p>
                    </div>
                    <div className="">
                        <img src={Frame} alt="frame" />
                    </div>

                </div>
                <div className="flex card-image mx-10 mt-10">
                    <div className="">
                        <img src={second} alt="second" />
                    </div>
                    <div className="bg-indigo-100 dark:bg-dark-bg md:w-3/4 xl:w-1/3 rounded-b-3xl rounded-t-3xl p-4">
                        <h2 className="header-style font mt-2">
                            Talent Analytics and <br /> Reporting
                        </h2>
                        <p className='text-style mt-5 '>
                            Show up your workforce's potential with Talent Analytics and Reporting.
                            Gain deep insights into your talent pool through data analysis. Identify top performers,
                            discover hidden talent, and optimize your workforce with cutting-edge analytics tools. Utilize
                            customizable reports and intuitive dashboards for a holistic view of your talent landscape.
                            Make data-driven decisions to drive strategic talent management initiatives and achieve sustainable
                            growth and success.
                        </p>
                    </div>
                </div>
                <div className="flex card-image mx-10">
                    <div className="bg-indigo-100  dark:bg-dark-bg md:w-3/4 xl:w-1/4 rounded-b-3xl rounded-t-3xl p-4">
                        <h2 className="header-style">
                            Continuous & Tight Feedback Loop
                        </h2>
                        <p className='text-style mt-5 '>
                            Unlock the potential of a Continuous & Tight Feedback Loop. Our innovative solution
                            enables real-time feedback exchange between employees, fostering a culture of continuous
                            improvement. Seamlessly capture feedback and address development areas promptly, driving
                            success and productivity. Embrace the power of a Continuous & Tight Feedback Loop for
                            enhanced performance.
                        </p>
                    </div>
                    <div className="">
                        <img src={third} alt="thirdimage" />
                    </div>
                </div>
                <div className="flex card-image mx-10">
                    <div className="">
                        <img src={fourth} alt="fourthimage" />
                    </div>
                    <div className="bg-indigo-100 dark:bg-dark-bg md:w-3/4 xl:w-1/3 rounded-b-3xl rounded-t-3xl p-4">
                        <h2 className="header-style">
                            Goal Tracking and Progress Monitoring
                        </h2>
                        <p className='text-style mt-5 '>
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
                    <h1 className="text-center font text-neutral-700 text-4xl pt-8 italic">
                        Excellent human resources and companies</h1>
                    <h1 className="font text-center text-neutral-700 text-4xl"> Come shape the future together </h1>
                </div>
                <div className="flex md:flex-row flex-col mx-10 my-20 gap-10 ">
                    <div className="bg-indigo-100  dark:bg-dark-bg w-1/3 px-6 py-3 rounded-b-3xl rounded-t-3xl">
                        <div className="flex flex-col sm:flex-row mt-6 mb-4">
                            <img className='md:w-1/4 sm:w-1/2' src={person} alt="" />
                            <ul>
                                <li className="text-xs mt-4 ml-3 text-neutral-600">Bernard Dushimimana</li>
                                <li className="text-xs mt-4 ml-3">Sr.Manager</li>
                            </ul>
                        </div>
                        <p className='card-text text-neutral-900'>
                            I'm extremely impressed with Pulse and their performance management platform.
                            Since using their services, it has been a game-changer for our organization.
                            The platform is intuitive, easy to navigate, and packed with powerful features.
                            Tracking performance metrics and setting goals has never been easier. Real-time
                            data and analytics provided by Pulse offer valuable insights into our team's
                            performance, enabling data-driven decisions. The customer support team has been
                            highly responsive and knowledgeable, addressing our queries promptly. Pulse has
                            transformed our performance management process, optimizing our operations and
                            driving meaningful results. I highly recommend Pulse to any business seeking to
                            elevate their performance management to the next level.

                        </p>
                    </div>
                    <div className="bg-indigo-100  dark:bg-dark-bg w-1/3 px-6 rounded-b-3xl rounded-t-3xl ">
                        <div className="flex flex-col sm:flex-row mt-6 mb-4">
                            <img className='md:w-1/4 sm:w-1/2' src={person2} alt="" />
                            <ul>
                                <li className="text-xs mt-4 ml-3 text-neutral-900">Susan</li>
                                <li className="text-xs mt-2 ml-3">Sr.Manager</li>
                            </ul>
                        </div>
                        <p className='card-text text-neutral-900'>
                            I'm delighted to share my positive experience with Pulse and their exceptional
                            performance management platform. Implementing their services has led to remarkable
                            improvements in our performance tracking and management processes. The user-friendly
                            interface and comprehensive features have simplified our goal setting and progress
                            monitoring activities. Pulse's in-depth analytics have provided valuable insights
                            into our team's performance trends, enabling informed decisions and continuous growth.
                            Thanks to Pulse, we have achieved greater transparency, accountability, and productivity
                            within our organization. I highly recommend Pulse to any company seeking a robust and
                            reliable performance management solution.

                        </p>
                    </div>
                    <div className="bg-indigo-100  dark:bg-dark-bg  w-1/3 rounded-b-3xl px-6 rounded-t-3xl">
                        <div className="flex flex-col sm:flex-row my-5">
                            <img className='md:w-1/4 sm:w-1/3' src={ur} alt="" />
                            <h3 className="text-xs mt-6 ml-3 text-neutral-900">University of Rwanda</h3>


                        </div>
                        <p className='card-text text-neutral-900'>
                            We are thrilled with the services provided by Pulse. Their performance management platform
                            has exceeded our expectations in every way. The user-friendly interface and comprehensive
                            features have made tracking and monitoring our performance metrics a breeze. Pulse's
                            data-driven insights have revolutionized our approach to performance management,
                            enabling informed decisions and continuous improvement. The support team at Pulse has
                            been exceptional, offering prompt and knowledgeable assistance whenever needed.
                            I wholeheartedly endorse Pulse to any organization seeking to optimize their performance
                            management process and achieve outstanding results.

                        </p>
                    </div>
                </div>
            </div>


        </div>

    )
}

export default About


