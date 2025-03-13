"use client";

import React from "react";
import { useTabs } from "../context/TabsContext";

const BrowserLike = ({ pivoto }: { pivoto?: React.ReactNode }) => {
  const { tabs, activeTabId, setActiveTabId } = useTabs();

  return (
    <div className="w-full h-[800px] mx-8 bg-[#1E1E1E] rounded-lg overflow-hidden shadow-2xl border border-white/10">
      {/* Browser Header */}
      <div className="bg-[#2D2D2D] p-2 flex items-center gap-2">
        {/* Window Controls */}
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57]"></div>
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
          <div className="w-3 h-3 rounded-full bg-[#28C840]"></div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 ml-4">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              onClick={() => setActiveTabId(tab.id as string)}
              className={`${
                tab.active
                  ? "bg-[#3D3D3D] text-white/90"
                  : "bg-[#2D2D2D] text-white/40 border-b border-[#1E1E1E]"
              } px-4 py-1 rounded-t-lg text-sm cursor-pointer flex items-center gap-2`}
            >
              {tab.CustomIcon}
              {tab.title}
            </div>
          ))}
        </div>
      </div>

      {/* Address Bar */}
      <div className="bg-[#3D3D3D] p-2 flex items-center gap-2">
        <div className="flex gap-2 text-white/50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="flex-1 bg-[#2D2D2D] rounded px-3 py-1">
          <div className="flex items-center gap-2 text-white/70 text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            pivoto.{activeTabId}.com
          </div>
        </div>
      </div>

      {/* Browser Content */}
      <div className="bg-[#1E1E1E] p-8 min-h-[400px] h-full relative">
        <div className="w-full min-h-[200px] max-h-[400px] bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg p-6">
          {tabs.find((tab) => tab.active)?.content}
        </div>
        {pivoto}
      </div>
    </div>
  );
};

export default BrowserLike;
