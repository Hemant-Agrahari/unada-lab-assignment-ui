import maincircle from '../assets/main-circle.png'
import leftrightcircle from '../assets/left-right-circle.png'

const MasterSearch = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-10">
            <div className="relative w-[60%] max-w-[400px]">
                <img
                    src={maincircle}
                    alt="Main Circle"
                    className="w-full h-auto"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 text-center">
                    <h1 className="text-2xl md:text-4xl font-bold">Master Your Search Rankings</h1>
                    <p className="text-gray-300 mt-2 text-sm md:text-base">
                        Get started with Wope and take control of your rankings quickly and effortlessly.
                    </p>
                    <button className="mt-4 bg-purple-500 hover:bg-purple-600 px-6 py-3 rounded-full text-white font-medium transition">
                        Get Template
                    </button>
                </div>
            </div>
            <img
                src={leftrightcircle}
                alt="Left Circle"
                className="absolute w-[35%] max-w-[409px] h-auto left-[31%]  hidden md:block"
            />
            <img
                src={leftrightcircle}
                alt="Right Circle"
                className="absolute w-[35%] max-w-[409px] h-auto right-[31%]  hidden md:block"
            />
        </div>
    );
};

export default MasterSearch;
