import { useState } from "react";
import Button from "./Button";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex justify-between py-5 xl:max-w-[1340px] m-auto px-4">
      <div className="flex gap-2 items-center">
        <img className="w-6 h-5" src="/assets/images/Icon.png" alt="logo" />
        <h2 className="text-Secondary font-bold text-xl">Nexcent</h2>
      </div>
      {/* for desktop */}
      <div className="gap-6 items-center hidden md:flex">
        <ul className="flex gap-10 text-sm">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Community</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
        </ul>
        <Button type="button" text="Register Now" showSvg={true} />
      </div>

      {/* hamburger icon */}
      <div className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? (
          <svg
            className="h-6 w-6 text-gray-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg
            className="h-6 w-6 text-gray-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        )}
      </div>

      {/* hamburger menu for tablet and mobile */}
      <div
        className={`gap-6 items-center ${
          menuOpen ? "flex flex-col sm:flex-row md:hidden" : "hidden"
        } absolute md:top-[40px] top-[55px] left-0 px-8 py-6 sm:px-6 sm:py-3 w-full bg-White sm:justify-center md:items-center items-baseline transition-all duration-700 ease-in-out`}
      >
        <ul className="flex gap-10 text-sm flex-col sm:flex-row">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Community</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
        </ul>
        <Button
          className="!p-[10px] mt-4"
          type="button"
          text="Register Now"
          showSvg={true}
        />
      </div>
    </div>
  );
}

export default Header;
