import Button from "../components/button/Button";
import Card from "../components/card/Card";
import Detection from '../assets/detection.png';
import PowerAi from '../assets/power-by-ai.png';
import Tracking from '../assets/tracking.png'
/**
 * SmartIndicators Component
 * 
 * This component showcases AI-powered indicators to help users quickly identify and address issues.
 * It consists of a heading, description, a CTA button, and a set of informative cards.
 */
 const SmartIndicators =()=> {
    return (
        <div className="min-h-screen bg-black text-white px-8 py-12 flex items-center">
            <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="self-start">
                    <h1 className="text-4xl font-bold mb-4">
                        Spot Issues Faster via <br /> Smart Indicators
                    </h1>
                    <p className="text-gray-400 text-lg mb-6">
                        Quickly identify and address problems with advanced AI-driven insights.
                    </p>
                    <Button btnText='Try It Now' />
                </div>
                <div className="flex flex-col gap-6">
                    <Card imgSrc={Detection} title='Cannibalization Detection' description='Uncover and evaluate new growth opportunities to enhance your search strategy.' />
                    <Card imgSrc={PowerAi} title='Market Intelligence Powered by AI' description='  Leverage artificial intelligence to gain deeper market understanding and competitive insights.' />
                    <Card imgSrc={Tracking} title='Market Intelligence Powered by AI' description='  Leverage artificial intelligence to gain deeper market understanding and competitive insights.' />
                </div>
            </div>
        </div>
    );
}
export default SmartIndicators