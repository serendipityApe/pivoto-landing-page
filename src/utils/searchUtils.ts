import type { Action } from "../extensions/types";
import type { SearchOptions, SearchFilters } from "../types/browser";

// 修正 SearchResult 类型以使用 Action
interface SearchResult {
  items: Action[];
  totalCount: number;
  hasMore: boolean;
}

// 高级搜索函数
export const advancedSearch = (
  data: Action[],
  options: SearchOptions
): SearchResult => {
  const { query, type, limit = 10, offset = 0, sortBy = 'relevance' } = options;
  
  let filteredData = data;
  
  // 按类型过滤
  if (type && type !== 'all') {
    filteredData = data.filter(item => item.action === type);
  }
  
  // 搜索过滤
  if (query.trim()) {
    const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 0);
    filteredData = filteredData.filter(item => {
      const searchableText = [
        item.title,
        item.url,
        item.domain,
        item.action
      ].join(' ').toLowerCase();
      
      return searchTerms.every(term => searchableText.includes(term));
    });
  }
  
  // 排序
  switch (sortBy) {
    case 'time':
      filteredData.sort((a, b) => (b.lastActiveTime || 0) - (a.lastActiveTime || 0));
      break;
    case 'frequency':
      // 可以根据访问频率排序（如果有相关数据）
      filteredData.sort((a, b) => (b.lastActiveTime || 0) - (a.lastActiveTime || 0));
      break;
    case 'relevance':
    default:
      // 相关性排序：优先显示标题匹配的结果
      if (query.trim()) {
        const queryLower = query.toLowerCase();
        filteredData.sort((a, b) => {
          const aTitle = a.title?.toLowerCase() || '';
          const bTitle = b.title?.toLowerCase() || '';
          const aExactMatch = aTitle.includes(queryLower);
          const bExactMatch = bTitle.includes(queryLower);
          
          if (aExactMatch && !bExactMatch) return -1;
          if (!aExactMatch && bExactMatch) return 1;
          
          // 如果都匹配或都不匹配，按时间排序
          return (b.lastActiveTime || 0) - (a.lastActiveTime || 0);
        });
      }
      break;
  }
  
  const totalCount = filteredData.length;
  const paginatedData = filteredData.slice(offset, offset + limit);
  
  return {
    items: paginatedData,
    totalCount,
    hasMore: offset + limit < totalCount
  };
};

// 模糊搜索函数
export const fuzzySearch = (data: Action[], query: string, threshold: number = 0.6): Action[] => {
  if (!query.trim()) return data;
  
  const queryLower = query.toLowerCase();
  
  return data
    .map(item => {
      const title = item.title?.toLowerCase() || '';
      const url = item.url?.toLowerCase() || '';
      const domain = item.domain?.toLowerCase() || '';
      
      // 计算相似度分数
      let score = 0;
      
      // 精确匹配得分最高
      if (title.includes(queryLower)) score += 1;
      if (url.includes(queryLower)) score += 0.8;
      if (domain.includes(queryLower)) score += 0.6;
      
      // 部分匹配
      const queryWords = queryLower.split(' ');
      queryWords.forEach(word => {
        if (word.length > 2) {
          if (title.includes(word)) score += 0.5;
          if (url.includes(word)) score += 0.3;
          if (domain.includes(word)) score += 0.2;
        }
      });
      
      return { item, score };
    })
    .filter(({ score }) => score >= threshold)
    .sort((a, b) => b.score - a.score)
    .map(({ item }) => item);
};

// 搜索建议函数
export const getSearchSuggestions = (data: Action[], query: string, limit: number = 5): string[] => {
  if (!query.trim()) return [];
  
  const queryLower = query.toLowerCase();
  const suggestions = new Set<string>();
  
  data.forEach(item => {
    const title = item.title?.toLowerCase() || '';
    const domain = item.domain?.toLowerCase() || '';
    
    // 添加标题建议
    if (title.includes(queryLower) && title !== queryLower) {
      suggestions.add(item.title || '');
    }
    
    // 添加域名建议
    if (domain.includes(queryLower) && domain !== queryLower) {
      suggestions.add(item.domain || '');
    }
  });
  
  return Array.from(suggestions).slice(0, limit);
};

// 高亮搜索结果
export const highlightSearchTerm = (text: string, query: string): string => {
  if (!query.trim()) return text;
  
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return text.replace(regex, '<mark>$1</mark>');
};

// 搜索历史管理
export class SearchHistoryManager {
  private static readonly STORAGE_KEY = 'browser_search_history';
  private static readonly MAX_HISTORY = 50;
  
  static getHistory(): string[] {
    if (typeof window === 'undefined') return [];
    
    try {
      const history = localStorage.getItem(this.STORAGE_KEY);
      return history ? JSON.parse(history) : [];
    } catch {
      return [];
    }
  }
  
  static addToHistory(query: string): void {
    if (typeof window === 'undefined' || !query.trim()) return;
    
    const history = this.getHistory();
    const filteredHistory = history.filter(item => item !== query);
    const newHistory = [query, ...filteredHistory].slice(0, this.MAX_HISTORY);
    
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(newHistory));
    } catch {
      // 忽略存储错误
    }
  }
  
  static clearHistory(): void {
    if (typeof window === 'undefined') return;
    
    try {
      localStorage.removeItem(this.STORAGE_KEY);
    } catch {
      // 忽略存储错误
    }
  }
}

// 防抖搜索函数
export const createDebouncedSearch = (
  searchFn: (query: string) => void,
  delay: number = 300
) => {
  let timeoutId: NodeJS.Timeout;
  
  return (query: string) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => searchFn(query), delay);
  };
};

// 搜索性能监控
export const measureSearchPerformance = async <T>(
  searchFn: () => T | Promise<T>,
  label: string = 'Search'
): Promise<T> => {
  const startTime = performance.now();
  const result = await searchFn();
  const endTime = performance.now();
  
  console.log(`${label} took ${endTime - startTime} milliseconds`);
  return result;
};