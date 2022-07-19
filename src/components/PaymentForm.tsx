import React from 'react';
import { Icon } from '@iconify/react';


export default function PaymentForm() {
  return (
    <div className="flex flex-col bg-light-bg dark:bg-dark-frame-bg justify-center mx-auto w-full py-32">
      <h2 className="text-light-text dark:text-dark-text-fill text-4xl font-bold mb-4 mx-auto">
        Pro
      </h2>
      <h3 className="text-light-text dark:text-dark-text-fill text-3xl mb-4 mx-auto">
        Fill this form
      </h3>
      <div className="w-3/4 md:w-2/4 mx-auto items-center py-2">
        <form>
          <div className="mb-4">
            <div className="flex  items-center mx-20  ">
              <span>
                <Icon icon="codicon:organization" color="#148fb6" />
              </span>
              <h4 className="text-light-text dark:text-dark-text-fill text-xl ml-2">
                Organization
              </h4>
            </div>
            <div className="my-2 flex flex-col">
              <div className='flex flex-col bg-blue-300 px-20 md:pl-20 sm:px-12' >
              <label className="text-light-text dark:text-dark-text-fill text-lg">
                Card holder name
              </label>
              <input
                className="dark:bg-dark-frame-bg appearance-none border my-1 rounded w-3/4 sm:w-full py-2 px-3 text-light-text dark:text-dark-text-fill leading-tight focus:outline-none focus:shadow-outline"
                id="country"
                type="text"
                placeholder="card holder name"
              ></input>
              </div>
              
            </div>
            <div className= " flex justify-around flex-wrap  ">
              <div className='flex flex-col'>
                <label className="text-light text dark:text-dark-text-fill text-lg">
                  Card number
                </label>
                <input
                  className="appearance-none dark:bg-dark-frame-bg border my-1 rounded w-full py-2 px-3 text-light-text dark:text-dark-text-fill leading-tight focus:outline-none focus:shadow-outline"
                  id="streetAddress"
                  type="text"
                  placeholder="Card number"
                ></input>
              </div>
              <div className='flex justify-between flex-col'>
                <label className="text-light-text dark:text-dark-text-fill text-lg">
                  expiration       
                </label>
                <input
                  className="appearance-none dark:bg-dark-frame-bg border my-1 rounded w-full py-2 px-3 text-light-text dark:text-dark-text-fill leading-tight focus:outline-none focus:shadow-outline"
                  id="city"
                  type="text"
                  placeholder="expiration year"
                ></input>
              </div>
            </div>
            <div className= "flex justify-around flex-wrap pl-0 py-2">
              <div className='flex flex-col'>
                <label className="text-light-text dark:text-dark-text-fill text-lg">
                  Cvv
                </label>
                <input
                  className="appearance-none dark:bg-dark-frame-bg border my-1 rounded w-full py-2 px-3 text-light-text dark:text-dark-text-fill leading-tight focus:outline-none focus:shadow-outline"
                  id="province"
                  type="text"
                  placeholder="Cvv"
                ></input>
              </div>
              <div  className='flex flex-col'>
                <label className="text-light-text dark:text-dark-text-fill text-lg">
                  Postal Code
                </label>
                <input
                  className="appearance-none dark:bg-dark-frame-bg border my-1 rounded w-full py-2 px-3 text-light-text dark:text-dark-text-fill leading-tight focus:outline-none focus:shadow-outline"
                  id="pcode"
                  type="text"
                  placeholder="Postal code"
                >
                </input>
              </div>
            </div>
          </div>
         <div className='text-center'>
         <button className="bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-4 mb-2  rounded">
            Pay now
         </button>
          </div>
        </form>
      </div>
    </div>
  );
}
