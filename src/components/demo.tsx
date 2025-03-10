"use client";
import { useCallback, useState } from "react";

import CommandPalette from "../extensions/CommandPalette";
import type { Action } from "../extensions/types";

// Mock data for actions
const mockActions: Action[] = [
  {
    id: "1",
    title: "Google Search",
    desc: "Search on Google",
    url: "https://google.com",
    action: "bookmark",
    favIconUrl: "https://www.google.com/favicon.ico",
  },
  {
    id: "2",
    title: "GitHub",
    desc: "View GitHub repository",
    url: "https://github.com",
    action: "history",
    favIconUrl: "https://github.com/favicon.ico",
  },
  {
    id: "3",
    title: "Ask AI",
    desc: "Get help from AI",
    type: "ai",
    action: "ai_command",
  },
];

// Mock shortcuts data
const mockShortcuts = [
  { name: "cycle-tab", shortcut: ["Alt", "Tab"] },
  { name: "open-command", shortcut: ["Ctrl", "Space"] },
];

export default function Demo() {
  const [isOpen, setIsOpen] = useState(false);
  const [actions, setActions] = useState<Action[]>(mockActions);

  const handleAction = useCallback((action: Action, query: string) => {
    console.log("Action triggered:", action, "Query:", query);
  }, []);

  const handleSearch = useCallback((query: string) => {
    const filtered = mockActions.filter(
      (action) =>
        action.title?.toLowerCase().includes(query.toLowerCase()) ||
        action.desc?.toLowerCase().includes(query.toLowerCase())
    );
    setActions(filtered);
  }, []);

  const handleGetActions = useCallback(() => {
    setActions(mockActions);
  }, []);

  const handleSearchBookmarks = useCallback((query: string) => {
    const bookmarks = mockActions.filter(
      (action) =>
        action.action === "bookmark" &&
        (action.title?.toLowerCase().includes(query.toLowerCase()) ||
          action.desc?.toLowerCase().includes(query.toLowerCase()))
    );
    setActions(bookmarks);
  }, []);

  const handleSearchHistory = useCallback((query: string) => {
    const history = mockActions.filter(
      (action) =>
        action.action === "history" &&
        (action.title?.toLowerCase().includes(query.toLowerCase()) ||
          action.desc?.toLowerCase().includes(query.toLowerCase()))
    );
    setActions(history);
  }, []);

  const handleAiCommand = useCallback((action: Action, query: string) => {
    console.log("AI command triggered:", action, "Query:", query);
  }, []);

  const handleRemoveAction = useCallback((action: Action) => {
    setActions((prev) => prev.filter((a) => a.id !== action.id));
  }, []);

  return (
    <div className="min-h-screen bg-background dark:bg-backgroundDark p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-text dark:text-textDark">
          CommandPalette Demo
        </h1>
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Open Command Palette
        </button>

        <CommandPalette
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
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
      </div>
    </div>
  );
}
