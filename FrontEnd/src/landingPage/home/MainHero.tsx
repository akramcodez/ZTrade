import React from 'react';

const MainHero: React.FC = () => {
  return (
    <div className="flex flex-col items-center pt-0 pr-[20px] pb-[120px] pl-[20px]">
      <img
        src="/assets/homeHero.png"
        className="mt-[10vh] mb-[60px] max-h-[45vh] w-fit"
      />
      <div className="flex flex-col items-center">
        <h1 className="text-center text-[2.4rem] leading-[1.25]">
          Invest in everything
        </h1>
        <p className="leading-[1.8] mb-[15px] mt-[15px] text-lg text-center">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button className="mt-[25px] bg-[#387ed1] text-white rounded-[5px] px-[30px] py-[10px] text-[1.2em] leading-[1.2em] font-medium hover:bg-black">
          Sign up for free
        </button>
      </div>
    </div>
  );
};

export default MainHero;
