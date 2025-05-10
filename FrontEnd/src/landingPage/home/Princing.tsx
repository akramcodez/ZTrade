import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Pricing: React.FC = () => {
  return (
    <div className="mt-[30px] px-[20px] py-0 pb-[120px] lg:mx-[100px]">
      <div className="flex flex-col lg:flex-row items-center justify-evenly">
        <div className="w-full lg:w-1/2 lg:max-w-[50%] flex flex-col">
          <h1 className="mb-[30px] text-[2rem] leading-[1.5]">
            Unbeatable pricing
          </h1>
          <span className="text-[1.1rem] leading-[1.8] text-gray-500 mb-[20px]">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </span>
        </div>
        <div className="w-full lg:w-1/2 max-w-[100vw] lg:max-w-[50%]">
          <div className="flex flex-row gap-4">
            <div className="flex flex-row items-center">
              <img src="/assets/pricing0.svg" className="w-1/2" />
              <span className="text-gray-500 leading-[1.2] text-[0.4rem]  lg:text-[0.6rem]">
                Free account
                <br />
                opening
              </span>
            </div>
            <div className="flex flex-row items-center">
              <img src="/assets/pricing0.svg" className="w-1/2" />
              <span className="text-gray-500 leading-[1.2] text-[0.4rem] lg:text-[0.6rem]">
                Free equity delivery
                <br /> and direct mutual funds
              </span>
            </div>
            <div className="flex flex-row items-center">
              <img src="\assets\intradayTrades.svg" className="w-1/2" />
              <span className="text-gray-500 leading-[1.2] text-[0.4rem] lg:text-[0.6rem]">
                Intraday and <br />
                F&O
              </span>
            </div>
          </div>
        </div>
      </div>
      <a href="#">
        <p className="text-[#138085] text-[1rem] mt-[20px] hover:text-black">
          See pricing <FontAwesomeIcon icon={faArrowRight} />
        </p>
      </a>
    </div>
  );
};

export default Pricing;
