"use client";
import { PRODUCT_SHOWCASE_HEAD } from "@/extensions/constants";
import LogoImage from "../assets/icons/logo.svg";
import MenuIcon from "../assets/icons/menu.svg";
import { exploreHandler } from "./lib/utils";

export const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="px-4">
        <div className="container bg-black">
          <div className="py-4 flex items-center justify-between">
            <div className="relative">
              <div className="absolute w-full -top-1 -bottom-1 bg-[linear-gradient(to_right,#F7AABE,#B57CEC,#E472D1)] blur-[15px] opacity-70"></div>
              <svg className="h-12 w-12" viewBox="0 0 24 24" height={16}>
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop
                      offset="0%"
                      className="text-purple-400"
                      style={{ stopColor: "rgb(192, 132, 252)" }}
                    />
                    <stop
                      offset="100%"
                      className="text-sky-400"
                      style={{ stopColor: "rgb(56, 189, 248)" }}
                    />
                  </linearGradient>
                  <mask id="circle-mask">
                    <rect width="24" height="24" fill="white" />
                    <circle cx="12" cy="12" r="3" fill="black" />
                  </mask>
                </defs>

                <g mask="url(#circle-mask)">
                  <path
                    d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"
                    fill="url(#gradient)"
                  />
                </g>
              </svg>
            </div>
            <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
              <MenuIcon className="text-white" />
            </div>
            <nav className="text-white gap-6 items-center hidden sm:flex">
              <a
                href="#"
                className="text-opacity-60 text-white hover:text-opacity-100 transition"
                onClick={(e) => {
                  e.preventDefault();
                  exploreHandler();
                }}
              >
                Explore
              </a>
              <a
                href="#"
                className="text-opacity-60 text-white hover:text-opacity-100 transition"
                onClick={(e) => {
                  e.preventDefault();
                  const faqSection = document.querySelector(
                    ".bg-gradient-to-b.from-\\[\\#5D2CA8\\].to-black"
                  );
                  if (faqSection) {
                    faqSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Help
              </a>
              <a
                href="https://discord.gg/QS7rty8d"
                className="text-opacity-60 text-white hover:text-opacity-100 transition"
                target="_blank"
              >
                Community
              </a>
              <button
                className="bg-white py-2 px-4 rounded-lg text-black"
                onClick={() => {
                  window.open(
                    "https://chromewebstore.google.com/detail/pivoto/iegmcjfaancbpebgdgjldfadenkceffl",
                    "_blank"
                  );
                }}
              >
                Install Pivoto
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
