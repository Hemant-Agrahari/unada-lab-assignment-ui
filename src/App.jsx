import Service from '../src/service/Service';
import SmartIndicators from '../src/smart-indicator/SmartIndicator';
import SignupSteps from '../src/signup-step/SignUpStep';
import PriceList from '../src/price-list/Pricelist';
import FAQSection from '../src/faq/FAQSection';
import MasterSearch from '../src/master-search/MasterSearch';
import Footer from '../src/footer/Footer';
import HeroSection from './hero/Hero';
import IntegrationSection from './integration-section/IntegrationSection';
import SecuritySection from './security-section/SecuritySection';
function App() {
  return (
    <div className='bg-black'>
     <HeroSection/>
     <Service/>
     <SmartIndicators/>
     <SignupSteps/>
     <PriceList/>
     <IntegrationSection/>
     <SecuritySection/>
     <FAQSection/>
     <MasterSearch/>
     <Footer/>
    </div>
  )
}

export default App
