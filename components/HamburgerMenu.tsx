"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "./Logo";
import { hamburgerLinks } from "@/constants";
import HamburgerLinkItem from "./HamburgerLinkItem";

function HamburgerMenu() {
  const [active, setActive] = useState(false);

  return (
    <div className="hidden max-lg:block">
      <button
        className="text-[#2A9E43] transition-colors hover:text-gray-500"
        onClick={() => setActive(true)}
      >
        <Menu size={27} />
      </button>

      <div
        className={`fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-start transition-opacity duration-300 ease-out ${
          active ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setActive(false)}
      >
        <div
          className={`bg-white w-[290px] h-full shadow-lg p-4 transform transition-all duration-[600ms] ease-in-out ${
            active ? "ml-0" : "ml-[-400px]"
          }`}
        >
          <div className="flex justify-between items-center">
            <Logo />
            <button
              onClick={() => setActive(false)}
              className="text-red-500 hover:text-gray-800"
            >
              <X size={24} />
            </button>
          </div>
          <div className="pt-6 px-[6px] flex flex-col gap-1 overflow-y-auto h-[calc(100vh-100px)] scrollbar-hide">
            {hamburgerLinks.map((link) => (
              <HamburgerLinkItem key={link.id} title={link.link} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HamburgerMenu;
