"use client";
import BrowserLike from "./BrowserLike";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Demo from "./demo";
import { PRODUCT_SHOWCASE_HEAD } from "@/extensions/constants";
export const ProductShowcase = () => {
  const appImage = useRef<HTMLImageElement>(null);
  const componentRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const { scrollYProgress } = useScroll({
    target: appImage,
    offset: ["start end", "end end"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const descriptionOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const headingY = useTransform(
    scrollYProgress,
    [0, 0.5],
    [0, PRODUCT_SHOWCASE_HEAD]
  );

  useEffect(() => {
    if (!componentRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    observer.observe(componentRef.current);

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={componentRef}
      id="product-showcase"
      className="z-10 relative bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8] py-[72px] sm:py-24"
    >
      <div className="container">
        <motion.h2
          className="text-center text-5xl font-bold tracking-tighter"
          style={{ y: headingY }}
        >
          Powerful Browser Navigation
        </motion.h2>
        <motion.div
          className="max-w-xl mx-auto mb-8"
          ref={descriptionRef}
          style={{ opacity: descriptionOpacity }}
        >
          <p className="text-xl text-white/70 text-center mt-5">
            Experience seamless tab management and enhanced productivity with
            Pivoto&apos;s intuitive features designed for modern browsing.
          </p>
        </motion.div>
        <div className="flex justify-center w-full" ref={appImage}>
          <motion.div
            style={{
              opacity: opacity,
              rotateX: rotateX,
              transformPerspective: "800px",
              width: "100%",
            }}
          >
            <Demo />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
