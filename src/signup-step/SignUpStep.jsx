import React from "react";
import AccountInMinute from "../assets/account-in-minutes.png";
import BgAccount from '../assets/bg-account.png'
import Button from "../components/button/Button";

const SignupSteps = () => {
  return (
    <div className="min-h-screen bg-black text-white px-8 py-12 flex flex-col items-center">
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative w-full flex justify-center">
          <img
            src={BgAccount}
            alt="System Analyzing"
            className="absolute left-[30%]  h-auto"
          />
          <img
            src={BgAccount}
            alt="System Analyzing"
            className="absolute  left-[25%]  h-auto"
          />
          <img
            src={AccountInMinute}
            alt="System Analyzing"
            className="relative"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">
            Create your account in <br /> minutes
          </h1>
          <p className="text-gray-400 text-lg mb-6">
            Easily sign up and get started right away with a simple, user-friendly process.
          </p>
          <Button btnText="Let’s Start" />
        </div>
      </div>
      <div className="w-full max-w-[1320px] mt-12">
        <hr className="border-purple-500 mb-4" />
        <div className="grid grid-cols-4 text-center text-gray-400">
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
