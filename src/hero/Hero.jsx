import Button from "../components/button/Button";

const HeroSection = () => {
    return (
        <div className="relative w-full min-h-[80vh] flex flex-col items-center justify-center text-center bg-black text-white px-6">
            <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-20"></div>
            <div className="relative z-10">
                <div className="inline-flex items-center px-4 py-1 bg-gray-800 text-xs text-white rounded-full mb-4">
                    <span className="bg-blue-500 text-white px-2 py-0.5 rounded-full text-xs mr-2">New</span>
                    4.8 Beta is available to download →
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Revolutionizing the <br /> Future of Data Tracking
                </h1>
                <p className="text-gray-400 text-lg mb-6">
                    Discover what drives results and what doesn’t to boost your search traffic.
                </p>
                <Button btnText='    Take Free Trial' />
            </div>
        </div>
    );
};

export default HeroSection;
