# 浏览器扩展功能文档

## 概述

本项目已成功集成了浏览器扩展功能，支持通过命令面板快速访问浏览历史和书签。用户可以使用 `@history` 和 `@bookmark` 命令来搜索和创建新的标签页。

## 主要功能

### 1. 命令面板集成
- **快捷键**: `Alt + Shift + K` (macOS) / `Ctrl + Shift + K` (Windows/Linux)
- **支持命令**: `@history`, `@bookmark`
- **智能搜索**: 支持模糊搜索和实时过滤

### 2. 历史记录功能
- 模拟浏览历史数据
- 按时间排序显示
- 支持关键词搜索
- 丰富的内容展示

### 3. 书签功能
- 模拟书签数据
- 按相关性排序
- 支持多关键词搜索
- 完整的书签信息展示

### 4. 高级搜索功能
- **防抖搜索**: 200ms 延迟，提升性能
- **多种排序方式**: 相关性、时间、频率
- **搜索历史**: 自动保存搜索记录
- **模糊匹配**: 智能匹配算法

## 文件结构

```
src/
├── components/
│   ├── demo.tsx                 # 主演示组件
│   └── BrowserLike.tsx         # 浏览器界面组件
├── context/
│   └── TabsContext.tsx         # 标签页状态管理
├── data/
│   └── mockData.tsx            # 模拟数据
├── types/
│   └── browser.ts              # 类型定义
├── utils/
│   └── searchUtils.ts          # 搜索工具函数
└── extensions/
    ├── CommandPalette/         # 命令面板组件
    └── types.ts               # 扩展类型定义
```

## 技术特性

### 性能优化
- **防抖搜索**: 减少不必要的搜索请求
- **记忆化**: 使用 `useMemo` 和 `useCallback` 优化渲染
- **虚拟化**: 大数据集的高效渲染
- **懒加载**: 按需加载搜索结果

### 类型安全
- 完整的 TypeScript 类型定义
- 严格的类型检查
- 接口规范化

### 用户体验
- **键盘导航**: 完整的键盘快捷键支持
- **实时搜索**: 即时显示搜索结果
- **智能排序**: 相关性优先的搜索结果
- **搜索建议**: 自动完成和历史记录

## 使用方法

### 基本使用

1. **打开命令面板**:
   - 按 `Alt + Shift + K` (macOS) 或 `Ctrl + Shift + K` (Windows/Linux)

2. **搜索历史记录**:
   ```
   @history react
   ```
   - 输入 `@history` 后跟搜索关键词
   - 支持多个关键词搜索

3. **搜索书签**:
   ```
   @bookmark github
   ```
   - 输入 `@bookmark` 后跟搜索关键词
   - 按相关性排序显示结果

### 高级功能

#### 搜索选项
```typescript
interface SearchOptions {
  query: string;                    // 搜索查询
  type?: 'history' | 'bookmark';   // 搜索类型
  limit?: number;                   // 结果数量限制
  sortBy?: 'relevance' | 'time';   // 排序方式
}
```

#### 自定义搜索
```typescript
import { advancedSearch } from '../utils/searchUtils';

const results = advancedSearch(data, {
  query: 'react',
  type: 'history',
  limit: 10,
  sortBy: 'time'
});
```

## API 参考

### SearchUtils

#### `advancedSearch(data, options)`
高级搜索函数，支持多种搜索选项。

**参数**:
- `data: Action[]` - 搜索数据
- `options: SearchOptions` - 搜索选项

**返回**: `SearchResult`

#### `fuzzySearch(data, query, threshold)`
模糊搜索函数，支持相似度匹配。

**参数**:
- `data: Action[]` - 搜索数据
- `query: string` - 搜索查询
- `threshold: number` - 相似度阈值 (0-1)

**返回**: `Action[]`

#### `SearchHistoryManager`
搜索历史管理类。

**方法**:
- `getHistory()` - 获取搜索历史
- `addToHistory(query)` - 添加搜索记录
- `clearHistory()` - 清空搜索历史

### TabsContext

#### 新增方法
- `addToHistory(tab)` - 添加到历史记录
- `addToBookmarks(tab)` - 添加到书签
- `removeFromBookmarks(id)` - 从书签中移除
- `getRecentTabs(limit)` - 获取最近标签页
- `searchTabs(query)` - 搜索标签页

## 配置选项

### 搜索配置
```typescript
const searchConfig = {
  debounceDelay: 200,        // 防抖延迟 (ms)
  maxResults: 10,            // 最大结果数
  minQueryLength: 1,         // 最小查询长度
  fuzzyThreshold: 0.6,       // 模糊搜索阈值
  historyLimit: 50           // 搜索历史限制
};
```

### 快捷键配置
```typescript
const shortcuts = [
  {
    key: "Alt+Shift+K",
    action: "Open Command Palette",
    description: "快速打开命令面板"
  },
  {
    key: "Escape",
    action: "Close Command Palette",
    description: "关闭命令面板"
  },
  {
    key: "Enter",
    action: "Execute Command",
    description: "执行选中的命令"
  }
];
```

## 扩展开发

### 添加新命令

1. **定义命令类型**:
```typescript
interface CustomCommand {
  id: string;
  name: string;
  handler: (args: any) => void;
}
```

2. **注册命令**:
```typescript
const customCommands = [
  {
    id: 'custom-search',
    name: '@custom',
    handler: (query: string) => {
      // 自定义搜索逻辑
    }
  }
];
```

### 自定义数据源

```typescript
import { Action } from '../extensions/types';

const customDataSource: Action[] = [
  {
    id: 'custom-1',
    title: 'Custom Item',
    url: 'https://example.com',
    domain: 'example.com',
    action: 'custom',
    content: <CustomContent />,
    lastActiveTime: Date.now()
  }
];
```

## 故障排除

### 常见问题

1. **命令面板无法打开**
   - 检查快捷键是否被其他应用占用
   - 确认组件正确挂载

2. **搜索结果为空**
   - 检查数据源是否正确加载
   - 验证搜索查询格式

3. **性能问题**
   - 检查防抖设置
   - 优化搜索算法
   - 减少结果数量限制

### 调试模式

```typescript
// 启用搜索性能监控
import { measureSearchPerformance } from '../utils/searchUtils';

const results = await measureSearchPerformance(
  () => advancedSearch(data, options),
  'History Search'
);
```

## 更新日志

### v1.0.0
- ✅ 基础命令面板功能
- ✅ 历史记录和书签搜索
- ✅ 键盘快捷键支持
- ✅ 模拟数据集成

### v1.1.0
- ✅ 高级搜索功能
- ✅ 防抖搜索优化
- ✅ 搜索历史管理
- ✅ 类型安全增强
- ✅ 性能监控工具

## 贡献指南

1. Fork 项目
2. 创建功能分支
3. 提交更改
4. 推送到分支
5. 创建 Pull Request

## 许可证

MIT License