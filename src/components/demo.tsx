"use client";
import { useCallback, useState } from "react";

import CommandPalette from "../extensions/CommandPalette";
import BrowserLike from "./BrowserLike";
import { TabsProvider, useTabs } from "../context/TabsContext";
import type { Action } from "../extensions/types";

// Mock shortcuts data
const mockShortcuts = [
  { name: "cycle-tab", shortcut: ["Alt", "Tab"] },
  { name: "open-command", shortcut: ["Ctrl", "Space"] },
];

const DemoContent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { tabs, addTab, setActiveTabId } = useTabs();
  const [actions, setActions] = useState<Action[]>(tabs);

  const handleAction = useCallback(
    (action: Action, query: string) => {
      console.log("Action triggered:", action, "Query:", query);

      if (action.action === "bookmark" || action.action === "history") {
        // For bookmarks and history, add a new tab
        addTab({
          ...action,
          id: action.id || `tab-${Date.now()}`,
          active: true,
        });
      } else if (action.action === "switch-tab") {
        // For switch-tab actions, just activate the tab
        setActiveTabId(action.id as string);
      } else {
        // For other actions, add as a new tab
        addTab({
          ...action,
          id: action.id || `tab-${Date.now()}`,
          active: true,
        });
      }
    },
    [addTab, setActiveTabId]
  );

  const handleSearch = useCallback(
    (query: string) => {
      const filtered = tabs.filter(
        (action) =>
          action.title?.toLowerCase().includes(query.toLowerCase()) ||
          action.desc?.toLowerCase().includes(query.toLowerCase())
      );
      setActions(filtered);
    },
    [tabs]
  );

  const handleGetActions = useCallback(() => {
    setActions(tabs);
  }, [tabs]);

  const handleSearchBookmarks = useCallback(
    (query: string) => {
      const bookmarks = tabs.filter(
        (action) =>
          action.action === "bookmark" &&
          (action.title?.toLowerCase().includes(query.toLowerCase()) ||
            action.desc?.toLowerCase().includes(query.toLowerCase()))
      );
      setActions(bookmarks);
    },
    [tabs]
  );

  const handleSearchHistory = useCallback(
    (query: string) => {
      const history = tabs.filter(
        (action) =>
          action.action === "history" &&
          (action.title?.toLowerCase().includes(query.toLowerCase()) ||
            action.desc?.toLowerCase().includes(query.toLowerCase()))
      );
      setActions(history);
    },
    [tabs]
  );

  const handleAiCommand = useCallback((action: Action, query: string) => {
    console.log("AI command triggered:", action, "Query:", query);
  }, []);

  const handleRemoveAction = useCallback((action: Action) => {
    setActions((prev) => prev.filter((a) => a.id !== action.id));
  }, []);

  return (
    <BrowserLike
      pivoto={
        <CommandPalette
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          setIsOpen={setIsOpen}
          actions={actions}
          shortcuts={mockShortcuts}
          onAction={handleAction}
          onSearch={handleSearch}
          onGetActions={handleGetActions}
          onSearchBookmarks={handleSearchBookmarks}
          onSearchHistory={handleSearchHistory}
          onAiCommand={handleAiCommand}
          onRemoveAction={handleRemoveAction}
        />
      }
    />
  );
};

export default function Demo() {
  return (
    <TabsProvider>
      <DemoContent />
    </TabsProvider>
  );
}
