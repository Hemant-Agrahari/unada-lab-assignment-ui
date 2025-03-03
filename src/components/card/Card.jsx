import React from "react";
/**
 * Card Component
 * 
 * This component renders a card layout with an image, title, and description.
 * 
 * Props:
 * - imgSrc (string): The source URL of the image to be displayed.
 * - title (string): The title of the card.
 * - description (string): A short description or content for the card.
 */
const Card = ({ imgSrc, title, description }) => {
  return (
    <div className="border border-indigo-600 rounded-lg shadow-lg bg-gray-900">
      {/* Image Section */}
      <img src={imgSrc} alt="img" className="w-full h-auto rounded-t-lg" />
      {/* Text Content */}
      <div className="pl-6 pb-6 pt-4">
        <h3 className="font-bold text-xl text-white mb-2">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default Card;
