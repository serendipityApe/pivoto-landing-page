"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import type { Action } from "../extensions/types";
import Keys from "@/components/Keys";

// Define the shape of our context
interface TabsContextType {
  tabs: Action[];
  activeTabId: string;
  setActiveTabId: (id: string) => void;
  addTab: (tab: Action) => void;
  removeTab: (id: string) => void;
  updateTab: (id: string, updates: Partial<Action>) => void;
}

// Create the context with a default value
const TabsContext = createContext<TabsContextType | undefined>(
  {} as TabsContextType
);

// Initial tabs data combining the structure from both components
const initialTabs: Action[] = [
  {
    id: "command-k",
    title: "Option +  K Guide",
    action: "switch-tab",
    CustomIcon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
      </svg>
    ),
    url: "https://pivoto.command-k.com",
    domain: "pivoto.command-k.com",
    active: true,
    content: (
      <div className="space-y-6 text-white/90">
        <h2 className="text-2xl font-bold">Quick Access with Option + K</h2>
        <div className="space-y-4">
          <p className="text-lg">Welcome to Pivoto! 🎉</p>
          <p>
            To get started, press <Keys>Option + Shift + K</Keys> (or{" "}
            <Keys>Ctrl + Shift + K</Keys> on Windows) to open Pivoto&apos;s
            search interface.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Try typing a keyword to find an open tab, bookmark, or browsing
              history entry.
            </li>
            <li>
              Use @ commands to refine your search (e.g., @bookmarks keyword).
            </li>
          </ul>
          <p className="text-white/70 italic">
            Now, press <Keys>Option + Shift + K</Keys> and explore!
          </p>
        </div>
      </div>
    ),
    lastActiveTime: Date.now(),
  },
  {
    id: "quick-switch",
    title: "Quick Switch Guide",
    action: "switch-tab",
    CustomIcon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
      </svg>
    ),
    url: "https://pivoto.quick-switch.com",
    domain: "pivoto.quick-switch.com",
    active: false,
    content: (
      <div className="space-y-6 text-white/90">
        <h2 className="text-2xl font-bold">
          Switch Tabs Instantly with Option + Q
        </h2>
        <div className="space-y-4">
          <p className="text-lg">Want to switch between tabs faster?</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <b>Press</b> <Keys>Option + Q</Keys> to <b>instantly</b> return to
              your last viewed tab.
            </li>
            <li>
              <b>Hold</b> <Keys>Option</Keys> after <b>pressing</b>{" "}
              <Keys>Q</Keys> to see a quick tab switcher.
            </li>
            <li>
              While holding <Keys>Option</Keys>, <b>keep pressing</b>{" "}
              <Keys>Q</Keys> to cycle through tabs.
            </li>
          </ul>
          <p className="text-white/70 italic">
            Try pressing <Keys>Option + Q</Keys> now!
          </p>
        </div>
      </div>
    ),
    lastActiveTime: Date.now() - 60 * 1000,
  },
  {
    id: "history",
    title: "History Search Guide",
    action: "switch-tab",
    CustomIcon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
      </svg>
    ),
    url: "https://pivoto.history.com",
    domain: "pivoto.history.com",
    active: false,
    content: (
      <div className="space-y-6 text-white/90">
        <h2 className="text-2xl font-bold">
          Find Browsing History with @history
        </h2>
        <div className="space-y-4">
          <p className="text-lg">Need to find something you visited earlier?</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Open Pivoto with <Keys>Option + Shift + K</Keys>.
            </li>
            <li>
              Type <Keys> @history </Keys> followed by a keyword (e.g., @history
              documentation).
            </li>
            <li>
              Select the result you need and press <Keys>Enter</Keys>.
            </li>
          </ul>
          <p className="text-white/70 italic">
            Try searching with @history now!
          </p>
        </div>
      </div>
    ),
    lastActiveTime: Date.now() - 60 * 1000 * 4,
  },
  {
    id: "bookmarks",
    title: "Bookmarks Search Guide",
    action: "switch-tab",
    CustomIcon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      </svg>
    ),
    url: "https://pivoto.bookmarks.com",
    domain: "pivoto.bookmarks.com",
    active: false,
    content: (
      <div className="space-y-6 text-white/90">
        <h2 className="text-2xl font-bold">
          Quickly Find Bookmarks with @bookmarks
        </h2>
        <div className="space-y-4">
          <p className="text-lg">
            Too many bookmarks to remember? Use Pivoto to search them instantly!
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Open Pivoto with <Keys>Option + Shift + K</Keys>.
            </li>
            <li>
              Type <Keys>@bookmarks</Keys> followed by a keyword (e.g.,
              @bookmarks design).
            </li>
            <li>
              Select the desired bookmark and press <Keys>Enter</Keys>.
            </li>
          </ul>
          <p className="text-white/70 italic">Give it a try now!</p>
        </div>
      </div>
    ),
    lastActiveTime: Date.now() - 60 * 1000 * 6,
  },
];

// Provider component
export const TabsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [tabs, setTabs] = useState<Action[]>(initialTabs);
  const [activeTabId, setActiveTabId] = useState<string>("command-k");

  // Add a new tab
  const addTab = (tab: Action) => {
    // Check if tab with this ID already exists
    const existingTabIndex = tabs.findIndex((t) => t.id === tab.id);

    if (existingTabIndex >= 0) {
      // If tab exists, just activate it
      setActiveTabId(tab.id as string);

      // Update tabs to set the active state
      setTabs(
        tabs.map((t) => ({
          ...t,
          active: t.id === tab.id,
        }))
      );
    } else {
      // Add new tab and set it as active
      const newTab = {
        ...tab,
        active: true,
      };

      // Set all other tabs as inactive
      const updatedTabs = tabs.map((t) => ({
        ...t,
        active: false,
      }));

      setTabs([...updatedTabs, newTab]);
      setActiveTabId(tab.id as string);
    }
  };

  // Remove a tab
  const removeTab = (id: string) => {
    const tabIndex = tabs.findIndex((t) => t.id === id);
    if (tabIndex === -1) return;

    const newTabs = [...tabs];
    newTabs.splice(tabIndex, 1);

    // If we're removing the active tab, activate another tab
    if (activeTabId === id && newTabs.length > 0) {
      const newActiveIndex = Math.min(tabIndex, newTabs.length - 1);
      setActiveTabId(newTabs[newActiveIndex].id as string);
      newTabs[newActiveIndex].active = true;
    }

    setTabs(newTabs);
  };

  // Update a tab
  const updateTab = (id: string, updates: Partial<Action>) => {
    setTabs(tabs.map((tab) => (tab.id === id ? { ...tab, ...updates } : tab)));
  };

  // Set active tab
  const handleSetActiveTabId = (id: string) => {
    setActiveTabId(id);
    setTabs(
      tabs.map((tab) => ({
        ...tab,
        active: tab.id === id,
        // Update lastActiveTime when tab is activated
        lastActiveTime: tab.id === id ? Date.now() : tab.lastActiveTime,
      }))
    );
  };

  return (
    <TabsContext.Provider
      value={{
        tabs,
        activeTabId,
        setActiveTabId: handleSetActiveTabId,
        addTab,
        removeTab,
        updateTab,
      }}
    >
      {children}
    </TabsContext.Provider>
  );
};

// Custom hook to use the tabs context
export const useTabs = () => {
  const context = useContext(TabsContext);
  if (context === undefined) {
    throw new Error("useTabs must be used within a TabsProvider");
  }
  return context;
};
