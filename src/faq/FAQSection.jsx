import React from 'react'
import FAQAccordion from '../components/faq-accordion/FAQAccordion';
import { faqs } from './faq.utils';

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
