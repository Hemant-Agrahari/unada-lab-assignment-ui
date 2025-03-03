import React from "react";
import RealTimeUpdate from "../assets/real-time-update.png";
import InstantInsights from '../assets/instant-insights.png'
import EffortlessReporting from '../assets/effortless-reporting.png'
import LightningFast from '../assets/lightning-fast.png'
import IntelligenceTarget from '../assets/intelligence-target.png'
import Card from "../components/card/Card";

const Service = () => {
  return (
    <>
      <div className="max-w-[1320px] mx-auto text-center px-6 py-6">
        <h1 className="text-4xl font-bold text-white">Faster.Smarter.</h1>
        <h1 className="text-4xl font-bold py-4  text-white">Start in Seconds</h1>
        <p className="text-sm pb-4 px-4 text-gray-400">
        Experience lightning-fast setup with intelligent features designed to optimize your workflow instantly
        </p>
      </div>
      <div className="max-w-[1320px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-8 px-6 py-6">
        <Card
          imgSrc={RealTimeUpdate}
          title="Real-Time Updates"
          description="Stay ahead with up-to-the-minute ranking data and keyword performance.."
        />
        <Card
          imgSrc={InstantInsights}
          title="Instant Insights"
          description="Get immediate, actionable data to boost your SEO strategy without delay."
        />
        <Card
          imgSrc={EffortlessReporting}
          title="Effortless Reporting"
          description="Generate easy-to-read reports that provide clear insights into SEO progress."
        />
      </div>
      <div className="max-w-[1320px] mx-auto grid lg:grid-cols-2 md:grid-cols-2 gap-8 px-6">
        <Card
          imgSrc={LightningFast}
          title="Lightning Fast"
          description="From entering your site address to full setup, it’s all done in just 60 seconds—no waiting around."
        />
        <Card
          imgSrc={IntelligenceTarget}
          title="Intelligent Targeting"
          description="From entering your site address to full setup, it’s all done in just 60 seconds—no waiting around."
        />
      </div>
    </>
  );
};

export default Service;
