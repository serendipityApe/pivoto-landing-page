"use client";
import BrowserLike from "./BrowserLike";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
export const ProductShowcase = () => {
  const appImage = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll({
    target: appImage,
    offset: ["start end", "end end"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8] py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center text-5xl font-bold tracking-tighter">
          Powerful Browser Navigation
        </h2>
        <div className="max-w-xl mx-auto mb-8">
          <p className="text-xl text-white/70 text-center mt-5 ">
            Experience seamless tab management and enhanced productivity with
            Pivoto's intuitive features designed for modern browsing.
          </p>
        </div>
        <div className="flex justify-center w-full" ref={appImage}>
          <motion.div
            style={{
              opacity: opacity,
              rotateX: rotateX,
              transformPerspective: "800px",
              width: "100%",
            }}
          >
            <BrowserLike />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
