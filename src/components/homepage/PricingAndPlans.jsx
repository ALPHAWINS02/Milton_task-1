import React, { useState } from "react";
import Title from "../ui/buttons/Title";
import HeadText from "../ui/headings/HeadText";
import Switch from "react-switch";

const PricingAndPlans = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const pricingContent = {
    upperText: 'Pricing and plans 💰',
    title: 'Find the best plan for your needs',
    timeChoice: ['Monthly', 'Annual'],
    cardConfig: [
      {
        plan: 'Free',
        subText: 'So you can see how incredible our product is',
        monthlyPrice: '0',
        yearlyPrice: '0',
        bestDeal: false,
        features: [
          '✔ A cool feature',
          '✔ A basic feature',
          '✔ A top feature with limitations'
        ]
      },
      {
        plan: 'Starter',
        subText: 'So you can see how incredible our product is',
        monthlyPrice: '19',
        yearlyPrice: '15',
        totalYearly: '180',
        bestDeal: true,
        features: [
          '✔ A cool feature',
          '✔ A basic feature',
          '✔ A top feature with limitations'
        ]
      },
      {
        plan: 'Pro',
        subText: 'So you can see how incredible our product is',
        monthlyPrice: '49',
        yearlyPrice: '45',
        totalYearly: '540',
        bestDeal: false,
        features: [
          '✔ A cool feature',
          '✔ A basic feature',
          '✔ A top feature with limitations'
        ]
      }
    ]
  };

  const handleBillingCycleChange = () => {
    setBillingCycle((prevCycle) => (prevCycle === "monthly" ? "annual" : "monthly"));
  };

  return (
    <section className="bg-soapstone">
      <div className="flex flex-col">
        <div className="flex flex-col pt-52 pb-20 px-10">
          <Title text={pricingContent.upperText} />
          <HeadText text={pricingContent.title} />
        </div>
        {/* Toggle Switch for Monthly and Annual */}
        <div className="flex items-center justify-center mb-6">
          <Switch
            onChange={handleBillingCycleChange}
            checked={billingCycle === "annual"}
            className="react-switch mx-2"
            onColor="#86d3ff"
            onHandleColor="#2693e6"
            handleDiameter={24}
            uncheckedIcon={false}
            checkedIcon={false}
            height={30}
          />
          <span className={`text-white ${billingCycle === "monthly" ? 'opacity-50' : ''}`}>Monthly</span>
          <span className="mx-2">|</span>
          <span className={`text-white ${billingCycle === "annual" ? 'opacity-50' : ''}`}>Annual</span>
        </div>
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10">
          {pricingContent.cardConfig.map((card, index) => (
            <div key={index} className="bg-white p-6 rounded-md shadow-md">
              <h3 className="text-2xl font-bold mb-4">{card.plan}</h3>
              <p className="text-gray-600 mb-4">{card.subText}</p>
              <p className="text-3xl font-bold mb-4">
                {billingCycle === 'monthly' ? `$${card.monthlyPrice}/month` : `$${card.yearlyPrice}/year`}
              </p>
              {billingCycle === 'yearly' && <p className="text-gray-600 mb-4">{`(${card.totalYearly}/year)`}</p>}
              {card.bestDeal && <p className="text-green-500 font-bold mb-4">🔥 Best Deal! 🔥</p>}
              <button style={{ backgroundColor: 'black', color: 'white', borderRadius: '9999px', width: '150px', height: '40px' }}>
                Get Started
              </button>

              <ul className="text-boulder dark:text-gray-400 text-base text-start font-medium">
                {card.features.map((feature, index) => (
                  <li className="mb-2" key={index}>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingAndPlans;
