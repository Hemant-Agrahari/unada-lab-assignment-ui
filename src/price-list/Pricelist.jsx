import React, { useState } from "react";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import Button from "../components/button/Button";
import { plans } from "./pricelist.utils";

const PriceList = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <div className="bg-black text-white py-16 px-6 flex flex-col items-center">
      {/* Header */}
      <h2 className="text-3xl font-bold mb-4 text-center">
        Innovative Pricing for <br /> Modern Needs
      </h2>
      <p className="text-gray-400 text-center max-w-xl mb-6">
        Choose from our range of plans designed to help you maximize your search
        performance, from basic insights to advanced analytics and customization.
      </p>

      {/* Billing Cycle Toggle */}
      <div className="flex space-x-4 mb-8 bg-gray-800 p-1 rounded-lg">
        <button
          className={`px-4 py-2 rounded-lg transition-all ${
            billingCycle === "monthly" ? "bg-purple-500 text-white" : "text-gray-400"
          }`}
          onClick={() => setBillingCycle("monthly")}
        >
          Monthly
        </button>
        <button
          className={`px-4 py-2 rounded-lg transition-all ${
            billingCycle === "yearly" ? "bg-purple-500 text-white" : "text-gray-400"
          }`}
          onClick={() => setBillingCycle("yearly")}
        >
          Yearly
        </button>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative bg-gray-900 p-6 rounded-lg border ${
              index === 1 ? "border-purple-500 shadow-lg shadow-purple-500/50" : "border-gray-700"
            } text-center`}
          >
            {/* Top Section */}
            <h3 className="text-xl font-bold">{plan.name}</h3>
            <span className="text-sm text-gray-300 bg-gray-800 px-3 py-1 rounded-full inline-block mt-2">
              {plan.users}
            </span>
            <p className="text-gray-400 text-sm mt-3">{plan.description}</p>
            
            {/* Divider */}
            <div className="w-full border-t border-gray-700 my-4"></div>

            {/* Feature List */}
            <ul className="text-gray-300 my-6 space-y-3 text-left">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center space-x-3">
                  <div className="bg-blue-500 text-white p-2 w-7 h-7 flex items-center justify-center rounded-md">
                    <AiOutlineCheck className="w-5 h-5" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Special case for "Gen AI Report" */}
            {!plan.includesGenAI && (
              <div className="border-t border-gray-700 my-4 pt-4">
                <ul>
                  <li className="flex items-center space-x-3 text-gray-500">
                    <div className="bg-gray-600 text-white p-2 w-7 h-7 flex items-center justify-center rounded-md">
                      <AiOutlineClose className="w-5 h-5" />
                    </div>
                    <span>Gen AI Report</span>
                  </li>
                </ul>
              </div>
            )}

            {/* Pricing */}
            <p className="text-2xl font-bold">{plan.price[billingCycle]}</p>
            <p className="text-sm text-gray-400">/ per month</p>

            {/* Get Started Button */}
            <Button className="mt-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg w-full" btnText="Get Started" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceList;
