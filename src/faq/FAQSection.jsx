import React from 'react'
import FAQAccordion from '../components/faq-accordion/FAQAccordion';
import { faqs } from './faq.utils';

/**
 * FAQSection Component
 *
 * This component renders the FAQ section of the website. 
 * It utilizes the `FAQAccordion` component to display a list of frequently asked questions.
 * 
 * Props:
 * - `title`: The main heading for the FAQ section.
 * - `description`: A short description to guide users about the FAQ section.
 * - `faqs`: An array of question-answer pairs fetched from `faq.utils.js`.
 *
 * Usage:
 * - This component is used to provide answers to common queries about the product and services.
 */
const FAQSection = () => {
  return (
      <FAQAccordion
      title="We've Got The Answer You Are Looking For"
      description="Find answers to common queries about our product and services.If you need more information, we are here to help "
      faqs={faqs}
    />
  )
}

export default FAQSection
