"use client";
import { useCallback, useState } from "react";

import CommandPalette from "../extensions/CommandPalette";
import type { Action } from "../extensions/types";

// Mock data for actions
const mockActions: Action[] = [
  {
    id: "command-k",
    title: "Command + K Guide",
    action: "switch-tab",
    CustomIcon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
      </svg>
    ),
    url: "https://pivoto.command-k.com",
    domain: "pivoto.command-k.com",
    active: true,
  },
  {
    id: "command-q",
    title: "Quick Switch Guide",
    action: "switch-tab",
    CustomIcon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
      </svg>
    ),
    url: "https://pivoto.command-q.com",
    domain: "pivoto.command-q.com",
    active: false,
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
      </div>
    </div>
  );
}
