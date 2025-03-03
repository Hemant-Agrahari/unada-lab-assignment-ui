import React, { useState } from "react";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import Button from "../components/button/Button";
import { plans } from "./pricelist.utils";

/**
 * PriceList Component
 * 
 * This component displays pricing plans with a toggle for monthly or yearly billing.
 * 
 * State:
 * - billingCycle (string): Tracks whether the user selects "monthly" or "yearly" pricing.
 * 
 * - plans (array): An array of plan objects, each containing:
 *    - name (string): The plan's name.
 *    - users (string): Description of user access.
 *    - features (array): List of included features.
 *    - includesGenAI (boolean): Whether "Gen AI Report" is included.
 *    - price (object): Contains pricing details for "monthly" and "yearly".
 */
const PriceList = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");
  return (
    <div className="bg-black text-white py-16 px-6 flex flex-col items-center">
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
            billingCycle === "monthly" ? "bg-purple-500" : "text-gray-400"
          }`}
          onClick={() => setBillingCycle("monthly")}
        >
          Monthly
        </button>
        <button
          className={`px-4 py-2 rounded-lg transition-all ${
            billingCycle === "yearly" ? "bg-purple-500" : "text-gray-400"
          }`}
          onClick={() => setBillingCycle("yearly")}
        >
          Yearly
        </button>
      </div>
      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl">
        {plans && plans.map((plan, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-lg border border-gray-700 text-center"
          >
            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
            <span className="text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded">
              {plan.users}
            </span>

            {/* Feature List */}
            <ul className="text-gray-300 my-6 space-y-3 text-left">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center space-x-3">
                  <div className="bg-blue-500 text-white p-1 w-6 h-6 flex items-center justify-center rounded-md">
                    <AiOutlineCheck className="w-4 h-4" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
              {!plan.includesGenAI && (
                <li className="flex items-center space-x-3 text-gray-500">
                  <div className="bg-gray-600 text-white p-1 w-6 h-6 flex items-center justify-center rounded-md">
                    <AiOutlineClose className="w-4 h-4" />
                  </div>
                  <span>Gen AI Report</span>
                </li>
              )}
            </ul>

            {/* Price */}
            <p className="text-2xl font-bold">{plan.price[billingCycle]}</p>
            <p className="text-sm text-gray-400">/ per month</p>
            <Button className="mt-4" btnText="Get Started" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceList;
