import { AiOutlineCheck } from "react-icons/ai";
import Circle from "../assets/circle-image.png";

const IntegrationSection = () => {
  return (
    <div className="w-full bg-black text-white px-6 md:px-12 py-10">
      {/* Wrapper for Center Alignment */}
      <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Side Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Smooth Integration for Effortless Workflow
          </h2>
          <p className="text-gray-400 mb-6">
            Easily integrate Wope with your existing tools and platforms for a seamless experience.
          </p>
          <ul className="space-y-3">
            {[
              "Instant Setup",
              "Compatible with Major Platforms",
              "Real-Time Data Sync",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-x-3">
                <span className="bg-blue-500 text-white p-2 rounded-md flex items-center justify-center min-w-[28px] min-h-[28px]">
                  <AiOutlineCheck className="w-5 h-5" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={Circle} alt="Integration" className="w-60 md:w-80 max-w-full" />
        </div>
      </div>
    </div>
  );
};

export default IntegrationSection;
