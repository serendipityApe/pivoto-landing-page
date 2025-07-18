// 浏览器相关的类型定义
export interface HistoryItem {
  id: string;
  title: string;
  url: string;
  domain: string;
  visitTime: number;
  visitCount: number;
  favicon?: string;
}

export interface BookmarkItem {
  id: string;
  title: string;
  url: string;
  domain: string;
  addedTime: number;
  folder?: string;
  tags?: string[];
  favicon?: string;
}

export interface SearchResult {
  items: (HistoryItem | BookmarkItem)[];
  totalCount: number;
  hasMore: boolean;
}

export interface SearchOptions {
  query: string;
  type?: 'history' | 'bookmark' | 'all';
  limit?: number;
  offset?: number;
  sortBy?: 'relevance' | 'time' | 'frequency';
  timeRange?: {
    start?: number;
    end?: number;
  };
}

// 搜索过滤器
export interface SearchFilters {
  domains?: string[];
  folders?: string[];
  tags?: string[];
  dateRange?: {
    start: Date;
    end: Date;
  };
}

// 浏览器扩展相关类型
export interface ExtensionCommand {
  id: string;
  name: string;
  description: string;
  shortcut?: string;
  handler: (args?: any) => void | Promise<void>;
}

export interface BrowserState {
  history: HistoryItem[];
  bookmarks: BookmarkItem[];
  recentTabs: string[];
  searchHistory: string[];
}

// 命令面板相关类型
export interface CommandPaletteState {
  isOpen: boolean;
  query: string;
  selectedIndex: number;
  mode: 'command' | 'history' | 'bookmark' | 'search';
}

export interface CommandAction {
  id: string;
  type: 'history' | 'bookmark' | 'command' | 'tab';
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  shortcut?: string;
  action: () => void;
  metadata?: Record<string, any>;
}