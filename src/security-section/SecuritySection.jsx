import SecurityImage from "../assets/ultra-secure.png"; // Replace with actual image path

const SecuritySection = () => {
  return (
    <div className="text-white text-center py-16 px-4">
      {/* Title Section */}
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Robust Security for <br className="hidden md:block" /> Complete Peace of Mind
      </h2>
      <p className="text-gray-400 text-sm md:text-base mb-10 max-w-2xl mx-auto">
        Your data is protected with advanced security measures, ensuring privacy and <br className="hidden md:block" />
        reliability at every step.
      </p>

      {/* Image Section (Single Image with Shield & Logos) */}
      <div className="flex justify-center">
        <img
          src={SecurityImage}
          alt="Ultra Secure"
          className="w-full max-w-[400px] md:max-w-[600px] lg:max-w-[700px]"
        />
      </div>
    </div>
  );
};

export default SecuritySection;
