"use client"
import { useState } from "react";
import PlusIcon from "../assets/icons/plus.svg";
import MinusIcon from "../assets/icons/minus.svg";
import clsx from "clsx";
import {motion , AnimatePresence} from 'framer-motion';
const items = [
  {
    question: "How do I get started with Pivoto?",
    answer:
      "Getting started is easy! After installing Pivoto, you can use Command + Shift + K to open the main interface or Command + Q for quick tab switching. Spend a few minutes exploring the interface, including the search bar with @ commands and tab navigator for easy access to all your open tabs.",
  },
  {
    question: "What are the main keyboard shortcuts?",
    answer:
      "Pivoto offers two main shortcuts: Command + Shift + K to open the main interface with full search capabilities, and Command + Q for quick tab switching. When using Command + Q, hold Command to access a simplified interface for rapid tab navigation across different windows.",
  },
  {
    question: "How does the search functionality work?",
    answer:
      "Pivoto's search bar is highly powerful and supports @ commands for quick searching. You can instantly get input suggestions using Tab at any time. The search functionality works across all your open tabs, history, and bookmarks, making it easy to find exactly what you're looking for.",
  },
  {
    question: "Can I customize Pivoto to my workflow?",
    answer:
      "Yes! Pivoto is designed to be flexible and customizable. You can configure your preferred shortcuts and focus options to match your workflow. We recommend saving sites with relevant keywords for easier future access, and utilizing features like cross-window navigation and installed-as-app page switching for enhanced productivity.",
  },
];

const AccordinationItem = ({question, answer}:{question:string, answer: string}) => {
  const[isOpen, setIsOpen] = useState(false);
  return(
   
    <div className=" py-7 border-b border-white/30" onClick={() => setIsOpen(!isOpen)}>
    <div className="flex items-center ">
      <span className="flex-1 text-lg font-bold">{question}</span>
      {isOpen ? <MinusIcon /> :<PlusIcon />}
      
      </div>
      <AnimatePresence>
      {isOpen && (
        <motion.div 
        initial={{opacity: 0, height: 0, marginTop: 0}}
        animate={{opacity: 1, height: "auto" , marginTop:'16px'}}
        exit={{opacity: 0, height: 0, marginTop: 0}}
          >{answer}</motion.div>

      )}
      </AnimatePresence>
    
  </div>
  
    
  )
}

export const FAQs = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24 bg-gradient-to-b from-[#5D2CA8] to-black ">
      <div className="container">
        <h2 className="text-5xl sm:text-6xl sm:w-[648px] mx-auto text-center text-white tracking-tighter">
          Frequently Asked Questions
        </h2>
        <div className="mt-12 max-w-[648px] mx-auto">
         {items.map(({question, answer}) => (
            <AccordinationItem question={question} answer={answer} key={question}/>
         ))}
        </div>
      </div>
    </div>
  )
};
