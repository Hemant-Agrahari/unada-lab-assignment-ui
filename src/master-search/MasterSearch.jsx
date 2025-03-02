import maincircle from '../assets/main-circle.png'
import leftrightcircle from '../assets/left-right-circle.png'

const MasterSearch =() =>{
    return (
        <div className="relative min-h-screen flex items-center justify-center">
            {/* Left Circle (Partially Hidden) */}
            <img
                src={leftrightcircle}
                alt="Left Circle"
                className="absolute w-[480px] h-auto left-[23%] top-[10%] z-10"
            />

            {/* Right Circle (Partially Hidden) */}
            <img
                src={leftrightcircle}
                alt="Right Circle"
                className="absolute w-[480px] h-auto right-[23%] top-[10%] z-10"
            />

            {/* Main Center Circle (On Top) */}
            <img
                src={maincircle}
                alt="Main Circle"
                className="absolute w-[500px] h-auto z-20 top-[10%]"
            />

            {/* Content */}
            <div className="relative z-30 text-center text-white p-10 max-w-lg">
                <h1 className="text-4xl font-bold">Master Your Search Rankings</h1>
                <p className="text-gray-300 mt-4">
                    Get started with Wope and take control of your rankings quickly and effortlessly.
                </p>
                <button className="mt-6 bg-purple-500 hover:bg-purple-600 px-6 py-3 rounded-full text-white font-medium transition">
                    Get Template
                </button>
            </div>
        </div>
    );
}
export default MasterSearch