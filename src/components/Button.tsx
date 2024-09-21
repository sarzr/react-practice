import { props } from "../types/main.d";

function Button({ type, text, showSvg, className }: props) {
  return (
    <button
      className={`bg-[#4AAA4D] text-White font-medium flex items-center gap-1 py-3 px-8 rounded-md text-sm ${className} `}
      type={type}
    >
      {text}
      {showSvg && (
        <svg
          className="w-5 h-5"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.52582 8.4707L10.2449 6.7516C10.4488 6.54772 10.4488 6.21716 10.2449 6.01328L8.52582 4.29418M10.092 6.38244L2.43506 6.38244"
            stroke="white"
            stroke-width="0.765676"
            stroke-linecap="round"
          />
        </svg>
      )}
    </button>
  );
}
export default Button;
