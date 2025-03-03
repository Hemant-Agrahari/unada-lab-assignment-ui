import React from "react";

/**
 * Card Component with a Linear Gradient Border
 * 
 * Props:
 * - imgSrc (string): The source URL of the image to be displayed.
 * - title (string): The title of the card.
 * - description (string): A short description or content for the card.
 */
const Card = ({ imgSrc, title, description }) => {
  return (
    <div className="relative rounded-lg p-[2px] bg-gradient-to-b from-[rgba(64,43,117,0.37)] via-[rgba(108,73,196,0.37)] to-[#681EE0]">
      {/* Inner Card (content area) */}
      <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
        {/* Image Section */}
        <img src={imgSrc} alt="img" className="w-full h-auto rounded-t-lg" />
        {/* Text Content */}
        <div className="pl-6 pb-6 pt-4">
          <h3 className="font-bold text-xl text-white mb-2">{title}</h3>
          <p className="text-gray-400 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
