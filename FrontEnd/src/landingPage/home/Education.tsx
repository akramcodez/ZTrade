import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Education: React.FC = () => {
  return (
    <div className="mt-[30px] px-[20px] py-0 pb-[120px] lg:mx-[100px]">
      <div className="flex flex-col lg:flex-row items-center justify-evenly">
        <div className="w-full lg:w-1/2 max-w-[100vw] lg:max-w-[50%]">
          <img src="/assets/education.svg" className="mb-[30px]" />
        </div>
        <div className="w-full lg:w-1/2 lg:max-w-[50%] flex flex-col">
          <h1 className="mb-[30px] text-[2rem] leading-[1.5]">
            Free and open market education
          </h1>
          <span className="text-[1.1rem] leading-[1.8] text-gray-500 mb-[30px]">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </span>
          <a href="#">
            <p className="text-[#138085] text-[1rem] hover:text-black">
              Varsity <FontAwesomeIcon icon={faArrowRight} />
            </p>
          </a>
          <span className="text-[1.1rem] leading-[1.8] text-gray-500 mb-[30px] mt-[40px]">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </span>
          <a href="#">
            <p className="text-[#138085] text-[1rem] hover:text-black">
              TradingQ&A <FontAwesomeIcon icon={faArrowRight} />
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Education;
