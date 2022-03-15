import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">
        {subtitle}
      </p>
    </div>
  </div>
);

const Services = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
          Satoshi Inu 
          <br />
          Vision & Ecosystem
        </h1>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
          SAV token has by itself real estate projects as a backup real asset. Unlike meme coins that have no actual projects, SAV targets to achieve a consensus real estate ownership mechanism to its community by investing in commercial real estate, open source code 2-layer network that would enable young developers to bring solutions to humanity through developing their projects with very low network charges which will be achieved through merge between PoH, PoS and PoW consensus mechanism that would also be scaled. 
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-start items-center">
        <ServiceCard
          color="bg-[#2952E3]"
          title="Satoshi Team"
          icon={<BsShieldFillCheck fontSize={21} className="text-white text-gradient" />}
          subtitle="The SAV team has a strong track record in hedge fund management, development of marketplaces, trading terminals and has developed companies such as Dollar Code corporation and microfinances that offer lending services to millions of people across the world."
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="Liquidity "
          icon={<BiSearchAlt fontSize={21} className="text-white text-gradient" />}
          subtitle="SAV is the main currency for trading asset tokens as it is used for market making and liquidity enhancement by the SAV liquidity fund. Thus, the demand for SAV correlates with trading volume on the SATOSHI-INU VISION platform."
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="Satoshi Vision"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="Total value of asset cryptocurrencies could reach $10 trillion by 2030 with global trading volume exceeding $90 trillion. The value of asset cryptocurrencies traded on the SATOSHI-INU VISION network platform could reach $2 trillion by 2030 with trading volume exceeding $20 trillion"
        />
      </div>
    </div>
  </div>
);

export default Services;
