import React from 'react';

const Stats = () => {
  return (
    <div className="mt-[30px] px-[20px] py-0 pb-[120px] lg:mx-[100px]">
      <div className="flex flex-col lg:flex-row items-center justify-evenly">
        <div className="w-full lg:w-1/2 lg:max-w-[50%]">
          <h2 className="mb-[40px] text-[2rem] leading-[1.5]">
            Trust with confidence
          </h2>
          <div className="mb-8">
            <h3 className="text-[1.3rem] leading-[1.6]">
              Customer-first always
            </h3>
            <p className="mt-4 text-[1.1rem] leading-[1.8] text-gray-500">
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
              crores of equity investments and contribute to 15% of daily retail
              exchange volumes in India.
            </p>
          </div>
          <div className="mb-8">
            <h3 className="text-[1.3rem] leading-[1.6]">No spam or gimmicks</h3>
            <p className="mt-4 text-[1.1rem] leading-[1.8] text-gray-500">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like. Our
              philosophies.
            </p>
          </div>
          <div className="mb-8">
            <h3 className="text-[1.3rem] leading-[1.6]">
              Do better with money
            </h3>
            <p className="mt-4 text-[1.1rem] leading-[1.8] text-gray-500">
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 max-w-[70vw] lg:max-w-[50%] flex flex-col">
          <img
            src="/assets/ecosystem.png"
            alt="Ecosystem"
            className="w-full max-w-[70vw] lg:max-w-full object-contain"
          />
          <p className="mt-2 mb-2 text-center flex justify-evenly">
            <a href="#" className="text-[#138085]">
              Explore our products →
            </a>
            <a href="#" className="text-[#138085]">
              Try Kite demo →
            </a>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center mt-15">
        <a href="#">
          <img src="/assets/pressLogos.png" />
        </a>
      </div>
    </div>
  );
};

export default Stats;
