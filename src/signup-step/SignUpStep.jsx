import React from "react";
import AccountInMinute from "../assets/account-in-minutes.png";
import BgAccount from '../assets/bg-account.png';
import Button from "../components/button/Button";

/**
 * SignupSteps Component
 * 
 * This section highlights a quick and easy signup process. 
 * It includes a visually engaging image, a call-to-action, and a step-by-step guide.
 */
const SignupSteps = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-12 py-12 flex flex-col items-center">
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="relative w-full flex justify-center">
          <img
            src={BgAccount}
            alt="Background Effect"
            className="absolute left-1/3 md:left-[25%] w-3/4 md:w-auto max-w-xs md:max-w-md"
          />
          <img
            src={BgAccount}
            alt="Background Effect"
            className="absolute left-1/4 md:left-[30%] w-3/4 md:w-auto max-w-xs md:max-w-md"
          />
          <img
            src={AccountInMinute}
            alt="Account in Minutes"
            className="relative w-4/5 md:w-auto max-w-xs md:max-w-md"
          />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Create your account in <br className="hidden md:block" /> minutes
          </h1>
          <p className="text-gray-400 text-base md:text-lg mb-6">
            Easily sign up and get started right away with a simple, user-friendly process.
          </p>
          <div className="flex justify-center md:justify-start">
            <Button btnText="Let’s Start" />
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1320px] mt-12">
        <hr className="border-purple-500 mb-4" />
        <div className="grid grid-cols-2 md:grid-cols-4 text-center text-gray-400 gap-6 md:gap-0">
          <div>
            <p className="text-sm">01.</p>
            <p className="text-lg">Sign Up</p>
          </div>
          <div>
            <p className="text-sm">02.</p>
            <p className="text-lg">Attach Site</p>
          </div>
          <div>
            <p className="text-sm">03.</p>
            <p className="text-lg">Run AI Analytics</p>
          </div>
          <div className="text-white">
            <p className="text-sm">04.</p>
            <p className="text-lg font-bold">Get Smart Insights</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupSteps;
