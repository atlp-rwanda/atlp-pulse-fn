import React from 'react';
import { Icon } from '@iconify/react';

export default function PricingForm() {
  return (
    <div className="flex flex-col bg-light-bg dark:bg-dark-frame-bg justify-center mx-auto w-full py-32">
      <h2 className="text-light-text dark:text-dark-text-fill text-4xl font-bold mb-4 mx-auto">
        Pro
      </h2>
      <h3 className="text-light-text dark:text-dark-text-fill text-3xl mb-4 mx-auto">
        Fill this form
      </h3>
      <div className="w-3/4 md:w-2/4 mx-auto">
        <form>
          <div className="mb-4">
            <div className="flex flex-row items-center">
              <span>
                <Icon icon="codicon:organization" color="#148fb6" />
              </span>
              <h4 className="text-light-text dark:text-dark-text-fill text-xl ml-2">
                Organization
              </h4>
            </div>
            <div className="my-2 flex flex-col">
              <label className="text-light-text dark:text-dark-text-fill text-lg">
                Country
              </label>
              {/* <input type="text" placeholder="Country"></input> */}
              <input
                className="dark:bg-dark-frame-bg appearance-none border my-1 rounded w-full py-2 px-3 text-light-text dark:text-dark-text-fill leading-tight focus:outline-none focus:shadow-outline"
                id="country"
                type="text"
                placeholder="Country"
              ></input>
            </div>
            <div>
              <label className="text-light-text dark:text-dark-text-fill text-lg">
                Organization Name
              </label>
              {/* <input type="text" placeholder="Organization Name"></input> */}
              <input
                className="appearance-none dark:bg-dark-frame-bg border my-1 rounded w-full py-2 px-3 text-light-text dark:text-dark-text-fill leading-tight focus:outline-none focus:shadow-outline"
                id="organizationName"
                type="text"
                placeholder="Organization name"
              ></input>
            </div>
            <div>
              <div>
                <label className="text-light text dark:text-dark-text-fill text-lg">
                  Street address
                </label>
                {/* <input type="text" placeholder="Street address"></input> */}
                <input
                  className="appearance-none dark:bg-dark-frame-bg border my-1 rounded w-full py-2 px-3 text-light-text dark:text-dark-text-fill leading-tight focus:outline-none focus:shadow-outline"
                  id="streetAddress"
                  type="text"
                  placeholder="Street address"
                ></input>
              </div>
              <div>
                <label className="text-light-text dark:text-dark-text-fill text-lg">
                  City
                </label>
                {/* <input type="text" placeholder="City"></input> */}
                <input
                  className="appearance-none dark:bg-dark-frame-bg border my-1 rounded w-full py-2 px-3 text-light-text dark:text-dark-text-fill leading-tight focus:outline-none focus:shadow-outline"
                  id="city"
                  type="text"
                  placeholder="City"
                ></input>
              </div>
            </div>
            <div>
              <div>
                <label className="text-light-text dark:text-dark-text-fill text-lg">
                  Province
                </label>
                {/* <input type="text" placeholder="Province"></input> */}
                <input
                  className="appearance-none dark:bg-dark-frame-bg border my-1 rounded w-full py-2 px-3 text-light-text dark:text-dark-text-fill leading-tight focus:outline-none focus:shadow-outline"
                  id="province"
                  type="text"
                  placeholder="Province"
                ></input>
              </div>
              <div>
                <label className="text-light-text dark:text-dark-text-fill text-lg">
                  Postal Code
                </label>
                {/* <input type="text" placeholder="Postal Code"></input> */}
                <input
                  className="appearance-none dark:bg-dark-frame-bg border my-1 rounded w-full py-2 px-3 text-light-text dark:text-dark-text-fill leading-tight focus:outline-none focus:shadow-outline"
                  id="pcode"
                  type="text"
                  placeholder="Postal code"
                ></input>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex flex-row items-center">
              <span>
                <Icon icon="fluent:payment-32-filled" color="#148fb6" />
              </span>
              <h4 className="text-light-text dark:text-dark-text-fill text-xl ml-2">
                Payment method
              </h4>
            </div>
            <div>
              <label className="text-light-text dark:text-dark-text-fill text-lg">
                Name
              </label>
              {/* <input type="text" placeholder="Name"></input> */}
              <input
                className="appearance-none border my-1 rounded w-full py-2 px-3 text-light-text dark:text-dark-text-fill dark:bg-dark-frame-bg leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Name"
              ></input>
            </div>
            <div>
              <div>
                <label className="text-light-text dark:text-dark-text-fill text-lg">
                  Card number
                </label>
                {/* <input type="text" placeholder="Card nbumber"></input> */}
                <input
                  className="appearance-none dark:bg-dark-frame-bg border my-1 rounded w-full py-2 px-3 text-light-text dark:text-dark-text-fill leading-tight focus:outline-none focus:shadow-outline"
                  id="cardNumber"
                  type="text"
                  placeholder="Card number"
                ></input>
              </div>
              <div>
                <label className="text-light-text dark:text-dark-text-fill text-lg">
                  Expiration
                </label>
                {/* <input type="text" placeholder="Expiration"></input> */}
                <input
                  className="appearance-none dark:bg-dark-frame-bg border my-1 rounded w-full py-2 px-3 text-light-text dark:text-dark-text-fill leading-tight focus:outline-none focus:shadow-outline"
                  id="expiration"
                  type="text"
                  placeholder="Expiration"
                ></input>
              </div>
            </div>
            <div>
              <div>
                <label className="text-light-text dark:text-dark-text-fill text-lg">
                  CVV
                </label>
                <input
                  className="appearance-none dark:bg-dark-frame-bg border my-1 rounded w-full py-2 px-3 text-light-text dark:text-dark-text-fill leading-tight focus:outline-none focus:shadow-outline"
                  id="cvv"
                  type="text"
                  placeholder="CVV"
                ></input>
              </div>
              <div>
                <label className="text-light-text dark:text-dark-text-fill text-lg ">
                  Postal Code
                </label>
                <input
                  className="appearance-none dark:bg-dark-frame-bg border my-1 rounded w-full py-2 px-3 text-light-text dark:text-dark-text-fill leading-tight focus:outline-none focus:shadow-outline"
                  id="pcode"
                  type="text"
                  placeholder="Postal code"
                ></input>
              </div>
            </div>
          </div>
          <button className="bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-4 mb-2 rounded">
            Request
          </button>
        </form>
      </div>
    </div>
  );
}
