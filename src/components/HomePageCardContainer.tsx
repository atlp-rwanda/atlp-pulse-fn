import React from 'react'
import HomePageCard from './HomePageCard'


function HomePageCardContainer() {
  return (
    <div
      className='font-serif bg-white text-center flex flex-col md:flex-row justify-center items-center h-[700px] w-full dark:bg-dark-blue'>
      <HomePageCard />
    </div>
  )
}

export default HomePageCardContainer