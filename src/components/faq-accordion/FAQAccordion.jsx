import React, { useState, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

/**
 * FAQAccordion Component
 * 
 * This component displays a list of FAQs in an accordion format.
 * Users can toggle each question to reveal or hide the answer.
 * 
 * Props:
 * - title (string): The main heading of the FAQ section.
 * - description (string): A brief description or subtitle for the FAQ section.
 * - faqs (array): An array of objects containing:
 *    - question (string): The FAQ question.
 *    - answer (string): The FAQ answer.
 */
const FAQAccordion = ({ title, description, faqs }) => {
  const [openFaqs, setOpenFaqs] = useState({}); // Store open/closed state for each FAQ

  useEffect(() => {
    setOpenFaqs({}); // Reset state on page refresh
  }, []);

  const toggleFAQ = (question) => {
    setOpenFaqs((prev) => ({
      [question]: !prev[question], // Open the clicked FAQ, close others
    }));
  };

  return (
    <div className="text-white px-6 py-16 flex flex-col items-center">
      {title && <h2 className="text-4xl font-bold text-center mb-4">{title}</h2>}
      {description && <p className="text-gray-400 text-center max-w-2xl mb-8">{description}</p>}

      <div className="w-full max-w-3xl">
        {faqs.map((faq) => (
       <div
       key={faq.question}
       className={`relative rounded-lg mb-4 overflow-hidden transition-all duration-300 shadow-lg 
         border border-gray-600 bg-[radial-gradient(23.18%_162.56%_at_2.44%_15.49%,_#241C36_0%,_#0C0512_100%)]`}
     >
            <button
              className="w-full text-left px-6 py-4 flex justify-between items-center text-lg font-medium transition-all duration-300 hover:bg-[#211a3b] cursor-pointer"
              onClick={() => toggleFAQ(faq.question)}
            >
              {faq.question}
              {openFaqs[faq.question] ? <FaMinus /> : <FaPlus />}
            </button>
            {openFaqs[faq.question] && (
              <div className="px-6 pb-4 text-gray-300 text-sm animate-fadeIn">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
