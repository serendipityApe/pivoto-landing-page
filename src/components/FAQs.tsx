"use client";
import { useState } from "react";
import PlusIcon from "../assets/icons/plus.svg";
import MinusIcon from "../assets/icons/minus.svg";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
const items = [
  {
    question: "How do I install and get started with Pivoto Chrome extension?",
    answer:
      "Getting started with Pivoto is easy! First, install the extension from the Chrome Web Store. After installation, you can use Cmd+Shift+K (Command+Shift+K) to open the main interface or Cmd+Q (Command+Q) for quick tab switching. Spend a few minutes exploring the interface, including the search bar with @ commands and tab navigator for easy access to all your open browser tabs.",
  },
  {
    question: "What are Pivoto's main keyboard shortcuts for tab management?",
    answer:
      "Pivoto offers two powerful keyboard shortcuts: Cmd+Shift+K to open the main interface with full search capabilities across tabs, history, and bookmarks, and Cmd+Q for lightning-fast tab switching. When using Cmd+Q, hold Command to access a simplified interface for rapid tab navigation across different browser windows. These shortcuts work seamlessly across Chrome and Chromium-based browsers.",
  },
  {
    question: "How does Pivoto's intelligent search with @ commands work?",
    answer:
      "Pivoto's search bar is highly powerful and supports @ commands for quick searching through your browser data. You can search through open tabs, browsing history, and bookmarks using @ symbols. The search provides instant input suggestions using Tab completion. This intelligent search functionality makes it easy to find exactly what you're looking for across your entire browsing session.",
  },
  {
    question: "Can I customize Pivoto for my productivity workflow?",
    answer:
      "Absolutely! Pivoto is designed to be flexible and customizable for maximum productivity. You can configure your preferred keyboard shortcuts and focus options to match your workflow. We recommend saving websites with relevant keywords for easier future access, and utilizing features like cross-window navigation and installed-as-app page switching for enhanced browsing efficiency.",
  },
  {
    question: "Is Pivoto compatible with all Chromium-based browsers?",
    answer:
      "Yes! Pivoto works seamlessly with Chrome and all Chromium-based browsers including Microsoft Edge, Brave, Opera, and Vivaldi. The extension maintains consistent performance across different browser environments, ensuring your tab management and productivity features work reliably regardless of your preferred browser.",
  },
  {
    question: "How does Pivoto improve browser productivity for power users?",
    answer:
      "Pivoto significantly enhances browser productivity through lightning-fast tab navigation, cross-window switching, intelligent search capabilities, and customizable keyboard shortcuts. It's perfect for developers, researchers, and power users who manage multiple tabs daily. The extension reduces time spent searching for tabs and improves focus by streamlining your browsing workflow.",
  },
];

const AccordinationItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className=" py-7 border-b border-white/30"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center ">
        <span className="flex-1 text-lg font-bold">{question}</span>
        {isOpen ? <MinusIcon /> : <PlusIcon />}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: "16px" }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQs = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24 bg-gradient-to-b from-[#5D2CA8] to-black ">
      <div className="container">
        <h2 className="text-5xl sm:text-6xl sm:w-[648px] mx-auto text-center text-white tracking-tighter">
          Frequently Asked Questions
        </h2>
        <div className="mt-12 max-w-[648px] mx-auto">
          {items.map(({ question, answer }) => (
            <AccordinationItem
              question={question}
              answer={answer}
              key={question}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
