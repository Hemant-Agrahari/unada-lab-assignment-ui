const Button = ({ btnText,className}) => {
    return (
      <button
        className={`px-6 py-3 text-white font-medium text-lg rounded-[52px] transition-all duration-300 bg-[radial-gradient(67%_140%_at_4.6%_40.8%,#FA93FA_0%,#983AD6_100%)] hover:opacity-90 active:scale-95 cursor-pointer ${className}`}
      >
        {btnText}
      </button>
    );
  };
  
  export default Button;
  