import React from "react";

const TransactionsCard = (props) => {
  console.log(props.obj);

  return (
    <div className="bg-[#181918] m-4 flex flex-1
      2xl:min-w-[450px]
      2xl:max-w-[500px]
      sm:min-w-[270px]
      sm:max-w-[300px]
      min-w-full
      flex-col p-3 rounded-md hover:shadow-2xl"
    >
      <div className="flex flex-col items-center w-full mt-3">
        <div className="display-flex justify-start w-full mb-6 p-2">
          <h3 className="text-white text-3xl text-center my-2">
            {props.obj.header}
          </h3>

        </div>
        {/* <img
          src={gifUrl || url}
          alt="nature"
          className="w-full h-64 2xl:h-96 rounded-md shadow-lg object-cover"
        /> */}
        <div className="bg-black p-3 px-5 rounded-3xl -mt-5 shadow-2xl">
          <p className="text-[#37c7da] font-bold text-1xl text-center my-2">{props.obj.body}</p>
        </div>
        <button
                  type="button"
                  onClick={''}
                  className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                >
                  {props.obj.button}
                </button>
      </div>
    </div>
  );
};

const Transactions = () => {
  const arr=[
    {
      header: "Liquidity Farming",
      body: "SATOSHI-INU VISION facilitates the broad use of cryptocurrencies in the real economy and allows holders to diversify their portfolio by a liquidity pool developed based on the AMM (Automatic Market Maker) principle. Just like any other DeFi swap,You can provide liquidity in the pools to become a liquidity provider and earn transaction fees and flexible interest.",
      button:"Provide Liquidity"
    },
    {
      header: "Core team",
      body: "SATOSHI-INU VISION  Founder and CEO Hassan Maube previously founded a profitable home equity lending marketplace that facilitated 12,000 home equity offers from seven banks and 25 investors in 1H 2018, created a back office for two hedge funds and managed equity portfolios for 5 years.",
      button:"Read More"
    },
    {
      header: "Value Proposition",
      body: "Our community can benefit from owning apart of our real estate units: satoshi mall, satoshi tower and satoshi palace residential estates. SAV offers a unique opportunity for crypto-holders to gain exposure to the value of illiquid assets accessible only to large investors (such as real estate and artwork) and thus increase their ROI and diversify their portfolio.",
      button:"Join Community"
    },
    {
      header: "Market Place",
      body: "The SATOSHI-INU VISION marketplace allows users to:\n 1.	Offer asset tokens for initial sale \n 2.	Manage a personal portfolio \n An asset owner can create and sell their asset tokens in the SAV marketplace providing the necessary asset information, ask price and settlement date. As soon as all the necessary legal proceedings are complete, asset tokens become available for purchase by all registered crypto-holders.",
      button:"Market Place"
    },
  ]
  return (
    <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
      <div className="flex flex-col md:p-12 py-12 px-4">
       
          <h3 className="text-white text-3xl text-center my-2">
            Explore the Network
          </h3>
        
          <h3 className="text-white text-3xl text-center my-2">
            Connect your account to to Swap Token
          </h3>
       

        <div className="flex flex-wrap justify-center items-center mt-10">
          {/* {arr.forEach(obj=>{
            <TransactionsCard obj={obj}/>
          })} */}
          
          {arr.map((obj, i) => (
            <TransactionsCard key={i} obj={obj} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
