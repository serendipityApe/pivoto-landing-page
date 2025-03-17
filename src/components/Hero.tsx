"use client";
import CursorImage from "../assets/images/cursor.png";
import ArrowIcon from "../assets/icons/arrow-w.svg";
import MessageImage from "../assets/images/message.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedGradientTextDemo } from "./animatedtext";
import { PRODUCT_SHOWCASE_HEAD } from "@/extensions/constants";
import { exploreHandler } from "./lib/utils";

export const Hero = () => {
  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-24 relative overflow-clip">
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] llg:h-[800px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>
      <div className="container relative">
        <div className="flex items-center justify-center -mt-10">
          <AnimatedGradientTextDemo />
        </div>
        <div className="flex justify-center mt-8">
          <div className="inline-flex relative">
            <h1 className="font-bold tracking-tightner text-center inline-flex flex-col">
              <span className="text-7xl sm:text-9xl ">Pivoto</span>
              <span className="text-5xl sm:text-7xl">Stay Focused</span>
            </h1>
            <motion.div
              className="absolute right-[478px] top-[108px] hidden sm:inline"
              drag
              dragSnapToOrigin
            >
              <Image
                src={CursorImage}
                alt="cursor"
                height={200}
                width={200}
                className="max-w-none"
                draggable="false"
              />
            </motion.div>
            <motion.div
              className="absolute left-[498px] top-[56px] hidden sm:inline"
              drag
              dragSnapToOrigin
            >
              <Image
                src={MessageImage}
                alt="cursor"
                height={200}
                width={200}
                className="max-w-none"
                draggable="false"
              />
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-xl text-center mt-8 max-w-md">
            Transform your browsing experience with lightning-fast tab
            navigation, intelligent search with commands, and cross-window
            switching. Boost your productivity with customizable shortcuts and
            seamless workflow integration.
          </p>
        </div>
        <div className="flex justify-center mt-8 gap-4">
          <button
            className="bg-white text-black py-3 px-5 rounded-lg font-medium"
            onClick={() => {
              window.open(
                "https://chromewebstore.google.com/detail/pivoto/iegmcjfaancbpebgdgjldfadenkceffl",
                "_blank"
              );
            }}
          >
            Install Pivoto
          </button>
          <motion.button
            className="bg-gradient-to-r from-[#5D2CA8] to-[#A46EDB] text-white py-3 px-5 rounded-lg font-medium flex items-center gap-2 relative overflow-hidden group shadow-lg shadow-purple-500/30 border border-purple-400/30"
            onClick={exploreHandler}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-purple-600/40 to-purple-300/40"
              initial={{ x: "-100%", opacity: 0.5 }}
              animate={{ x: "200%", opacity: 0.3 }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            />
            Explore
            <motion.div
            // className="w-5 h-5 bg-white rounded-full flex items-center justify-center"
            >
              <ArrowIcon className="w-6 h-6 text-purple-700 scale-125" />
            </motion.div>
          </motion.button>
        </div>
      </div>
    </div>
  );
};
