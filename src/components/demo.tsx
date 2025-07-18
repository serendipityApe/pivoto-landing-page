"use client";
import { useCallback, useEffect, useState, useMemo } from "react";

import CommandPalette from "../extensions/CommandPalette";
import BrowserLike from "./BrowserLike";
import { TabsProvider, useTabs } from "../context/TabsContext";
import { mockHistoryData, mockBookmarksData, searchData, getRecentItems } from "../data/mockData";
import { advancedSearch, fuzzySearch, SearchHistoryManager, createDebouncedSearch } from "../utils/searchUtils";
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
  useEffect(() => {
    setActions(tabs);
  }, [tabs]);
  const handleAction = useCallback(
    (action: Action, query: string) => {
      if (action.action === "bookmark" || action.action === "history") {
        // For bookmarks and history, add a new tab
        addTab({
          ...action,
          id: action.id || `tab-${Date.now()}`,
          active: true,
          action: 'switch-tab',
          lastActiveTime: Date.now(),
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

  // 创建防抖搜索函数
  const debouncedBookmarkSearch = useMemo(
    () => createDebouncedSearch((query: string) => {
      const searchResult = advancedSearch(mockBookmarksData, {
        query,
        type: 'bookmark',
        limit: 10,
        sortBy: 'relevance'
      });
      setActions(searchResult.items);
      
      // 添加到搜索历史
      if (query.trim()) {
        SearchHistoryManager.addToHistory(query);
      }
    }, 200),
    []
  );

  const debouncedHistorySearch = useMemo(
    () => createDebouncedSearch((query: string) => {
      const searchResult = advancedSearch(mockHistoryData, {
        query,
        type: 'history',
        limit: 10,
        sortBy: 'time'
      });
      setActions(searchResult.items);
      
      // 添加到搜索历史
      if (query.trim()) {
        SearchHistoryManager.addToHistory(query);
      }
    }, 200),
    []
  );

  const handleSearchBookmarks = useCallback(
    (query: string) => {
      if (!query.trim()) {
        // 如果没有查询，显示最近的书签
        const recentBookmarks = getRecentItems(mockBookmarksData, 10);
        setActions(recentBookmarks);
        return;
      }
      
      // 使用防抖搜索
      debouncedBookmarkSearch(query);
    },
    [debouncedBookmarkSearch]
  );

  const handleSearchHistory = useCallback(
    (query: string) => {
      if (!query.trim()) {
        // 如果没有查询，显示最近的历史记录
        const recentHistory = getRecentItems(mockHistoryData, 10);
        setActions(recentHistory);
        return;
      }
      
      // 使用防抖搜索
      debouncedHistorySearch(query);
    },
    [debouncedHistorySearch]
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
