import React, { useState } from "react";
import Button from "../components/button/Button";

const PriceList = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const plans = [
    {
      name: "Basic",
      users: "Individual",
      features: [
        "30+ Features",
        "Priority Support",
        "4 Team Members",
        "Premium Features",
        "Data Insights",
      ],
      price: { monthly: "$39.99", yearly: "$399.99" },
      includesGenAI: false,
    },
    {
      name: "Standard",
      users: "2 to 10 Users",
      features: [
        "Access 80+ Enterprise Features",
        "Priority Support",
        "10 Team Members",
        "Premium Features",
        "Unlimited Data Insights",
      ],
      price: { monthly: "$69.99", yearly: "$699.99" },
      includesGenAI: true,
    },
    {
      name: "Enterprise",
      users: "10+ Users",
      features: [
        "Access All Features",
        "Priority Support",
        "Unlimited Members",
        "Premium Features",
        "Unlimited Data Insights",
        "Custom Gen AI Report",
      ],
      price: { monthly: "$119.99", yearly: "$1199.99" },
      includesGenAI: true,
    },
  ];

  return (
    <div className="bg-black text-white py-16 px-6 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-4 text-center">
        Innovative Pricing for <br /> Modern Needs
      </h2>
      <p className="text-gray-400 text-center max-w-xl mb-6">
        Choose from our range of plans designed to help you maximize your search
        performance, from basic insights to advanced analytics and customization.
      </p>

      <div className="flex space-x-4 mb-8 bg-gray-800 p-1 rounded-lg">
        <button
          className={`px-4 py-2 rounded-lg transition-all ${billingCycle === "monthly" ? "bg-purple-500" : "text-gray-400"
            }`}
          onClick={() => setBillingCycle("monthly")}
        >
          Monthly
        </button>
        <button
          className={`px-4 py-2 rounded-lg transition-all ${billingCycle === "yearly" ? "bg-purple-500" : "text-gray-400"
            }`}
          onClick={() => setBillingCycle("yearly")}
        >
          Yearly
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-lg border border-gray-700 text-center"
          >
            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
            <span className="text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
              {plan.users}
            </span>
            <ul className="text-gray-300 my-6 space-y-2 text-left">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center space-x-2">
                  ✅ <span>{feature}</span>
                </li>
              ))}
              {!plan.includesGenAI && (
                <li className="flex items-center space-x-2 text-gray-500">
                  ❌ <span>Gen AI Report</span>
                </li>
              )}
            </ul>
            <p className="text-2xl font-bold">{plan.price[billingCycle]}</p>
            <p className="text-sm text-gray-400">/ per month</p>
            <Button className='mt-4' btnText='Get Started' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceList;
