import React from "react";
import type { Action } from "../extensions/types";

// 历史记录模拟数据
export const mockHistoryData: Action[] = [
  {
    id: "history-1",
    title: "React Documentation",
    url: "https://react.dev",
    domain: "react.dev",
    active: false,
    action: "history",
    content: (
      <div className="space-y-6 text-white/90 p-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold">React Documentation</h2>
        </div>
        <p className="text-lg leading-relaxed">
          The official React documentation with comprehensive guides, API reference, and best practices for building modern web applications.
        </p>
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="bg-white/5 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Quick Start</h3>
            <p className="text-sm text-white/70">Learn React fundamentals</p>
          </div>
          <div className="bg-white/5 rounded-lg p-4">
            <h3 className="font-semibold mb-2">API Reference</h3>
            <p className="text-sm text-white/70">Complete API documentation</p>
          </div>
        </div>
      </div>
    ),
    lastActiveTime: Date.now() - 60 * 1000 * 30,
    CustomIcon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
  },
  {
    id: "history-2",
    title: "TypeScript Handbook",
    url: "https://typescriptlang.org",
    domain: "typescriptlang.org",
    active: false,
    action: "history",
    content: (
      <div className="space-y-6 text-white/90 p-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">TS</span>
          </div>
          <h2 className="text-2xl font-bold">TypeScript Handbook</h2>
        </div>
        <p className="text-lg leading-relaxed">
          Learn TypeScript with comprehensive guides, examples, and advanced type system features for building scalable applications.
        </p>
        <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-4">
          <h3 className="font-semibold mb-2">Latest Features</h3>
          <ul className="text-sm text-white/70 space-y-1">
            <li>• Template Literal Types</li>
            <li>• Conditional Types</li>
            <li>• Utility Types</li>
          </ul>
        </div>
      </div>
    ),
    lastActiveTime: Date.now() - 60 * 1000 * 45,
    CustomIcon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    id: "history-3",
    title: "Next.js Documentation",
    url: "https://nextjs.org/docs",
    domain: "nextjs.org",
    active: false,
    action: "history",
    content: (
      <div className="space-y-6 text-white/90 p-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center border border-white/20">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 01-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 00-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 00-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 01-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 01-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 01.174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 004.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 002.466-2.163 11.944 11.944 0 002.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747C23.573 4.017 20.405.251 16.5.07a25.64 25.64 0 00-.524-.07C15.623.001 15.489 0 15.313 0H11.572z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold">Next.js Documentation</h2>
        </div>
        <p className="text-lg leading-relaxed">
          The React framework for production with hybrid static & server rendering, smart bundling, and route pre-fetching.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/5 rounded-lg p-4">
            <h3 className="font-semibold mb-2">App Router</h3>
            <p className="text-sm text-white/70">New routing system</p>
          </div>
          <div className="bg-white/5 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Server Components</h3>
            <p className="text-sm text-white/70">React Server Components</p>
          </div>
          <div className="bg-white/5 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Streaming</h3>
            <p className="text-sm text-white/70">Progressive rendering</p>
          </div>
        </div>
      </div>
    ),
    lastActiveTime: Date.now() - 60 * 1000 * 60,
    CustomIcon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 01-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 00-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 00-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 01-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 01-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 01.174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 004.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 002.466-2.163 11.944 11.944 0 002.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747C23.573 4.017 20.405.251 16.5.07a25.64 25.64 0 00-.524-.07C15.623.001 15.489 0 15.313 0H11.572z" />
      </svg>
    ),
  },
  {
    id: "history-4",
    title: "Tailwind CSS",
    url: "https://tailwindcss.com",
    domain: "tailwindcss.com",
    active: false,
    action: "history",
    content: (
      <div className="space-y-6 text-white/90 p-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C7.666,17.818,9.027,19.2,12.001,19.2c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
            </svg>
          </div>
          <h2 className="text-2xl font-bold">Tailwind CSS</h2>
        </div>
        <p className="text-lg leading-relaxed">
          A utility-first CSS framework for rapidly building custom user interfaces with low-level utility classes.
        </p>
        <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg p-4">
          <h3 className="font-semibold mb-2">Key Features</h3>
          <ul className="text-sm text-white/70 space-y-1">
            <li>• Utility-first approach</li>
            <li>• Responsive design</li>
            <li>• Dark mode support</li>
            <li>• JIT compilation</li>
          </ul>
        </div>
      </div>
    ),
    lastActiveTime: Date.now() - 60 * 1000 * 90,
    CustomIcon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C7.666,17.818,9.027,19.2,12.001,19.2c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
      </svg>
    ),
  },
];

// 书签模拟数据
export const mockBookmarksData: Action[] = [
  {
    id: "bookmark-1",
    title: "GitHub",
    url: "https://github.com",
    domain: "github.com",
    active: false,
    action: "bookmark",
    content: (
      <div className="space-y-6 text-white/90 p-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center border border-white/20">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold">GitHub</h2>
        </div>
        <p className="text-lg leading-relaxed">
          Where the world builds software. Millions of developers collaborate here to build, share, and maintain code.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/5 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Repositories</h3>
            <p className="text-sm text-white/70">Host and review code</p>
          </div>
          <div className="bg-white/5 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Actions</h3>
            <p className="text-sm text-white/70">Automate workflows</p>
          </div>
          <div className="bg-white/5 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Issues</h3>
            <p className="text-sm text-white/70">Track work</p>
          </div>
          <div className="bg-white/5 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Discussions</h3>
            <p className="text-sm text-white/70">Collaborate</p>
          </div>
        </div>
      </div>
    ),
    lastActiveTime: Date.now() - 60 * 1000 * 10,
    CustomIcon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    id: "bookmark-2",
    title: "Stack Overflow",
    url: "https://stackoverflow.com",
    domain: "stackoverflow.com",
    active: false,
    action: "bookmark",
    content: (
      <div className="space-y-6 text-white/90 p-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M15 21h-10v-2h10v2zm6-11.665l-1.621-9.335-1.993.346 1.62 9.335 1.994-.346zm-5.964 6.937l-9.746-.975-.186 2.016 9.755.879.177-1.92zm.538-2.587l-9.276-2.608-.526 1.954 9.306 2.5.496-1.846zm1.204-2.413l-8.297-4.864-1.029 1.743 8.298 4.865 1.028-1.744zm1.866-1.467l-5.339-7.829-1.672 1.14 5.339 7.829 1.672-1.14zm-2.644 4.195v8h-12v-8h-2v10h16v-10h-2z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold">Stack Overflow</h2>
        </div>
        <p className="text-lg leading-relaxed">
          The largest online community for programmers to learn, share knowledge, and advance their careers.
        </p>
        <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg p-4">
          <h3 className="font-semibold mb-2">Community Stats</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-white/70">Questions:</span>
              <span className="ml-2 font-semibold">22M+</span>
            </div>
            <div>
              <span className="text-white/70">Users:</span>
              <span className="ml-2 font-semibold">18M+</span>
            </div>
          </div>
        </div>
      </div>
    ),
    lastActiveTime: Date.now() - 60 * 1000 * 20,
    CustomIcon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M15 21h-10v-2h10v2zm6-11.665l-1.621-9.335-1.993.346 1.62 9.335 1.994-.346zm-5.964 6.937l-9.746-.975-.186 2.016 9.755.879.177-1.92zm.538-2.587l-9.276-2.608-.526 1.954 9.306 2.5.496-1.846zm1.204-2.413l-8.297-4.864-1.029 1.743 8.298 4.865 1.028-1.744zm1.866-1.467l-5.339-7.829-1.672 1.14 5.339 7.829 1.672-1.14zm-2.644 4.195v8h-12v-8h-2v10h16v-10h-2z" />
      </svg>
    ),
  },
  {
    id: "bookmark-3",
    title: "MDN Web Docs",
    url: "https://developer.mozilla.org",
    domain: "developer.mozilla.org",
    active: false,
    action: "bookmark",
    content: (
      <div className="space-y-6 text-white/90 p-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xs">MDN</span>
          </div>
          <h2 className="text-2xl font-bold">MDN Web Docs</h2>
        </div>
        <p className="text-lg leading-relaxed">
          Resources for developers, by developers. The most comprehensive documentation for web technologies.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/5 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Web APIs</h3>
            <p className="text-sm text-white/70">Complete API reference</p>
          </div>
          <div className="bg-white/5 rounded-lg p-4">
            <h3 className="font-semibold mb-2">CSS Reference</h3>
            <p className="text-sm text-white/70">All CSS properties</p>
          </div>
          <div className="bg-white/5 rounded-lg p-4">
            <h3 className="font-semibold mb-2">JavaScript Guide</h3>
            <p className="text-sm text-white/70">Learn JavaScript</p>
          </div>
          <div className="bg-white/5 rounded-lg p-4">
            <h3 className="font-semibold mb-2">HTML Elements</h3>
            <p className="text-sm text-white/70">HTML reference</p>
          </div>
        </div>
      </div>
    ),
    lastActiveTime: Date.now() - 60 * 1000 * 15,
    CustomIcon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
  },
  {
    id: "bookmark-4",
    title: "Vercel",
    url: "https://vercel.com",
    domain: "vercel.com",
    active: false,
    action: "bookmark",
    content: (
      <div className="space-y-6 text-white/90 p-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center border border-white/20">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 22.525H0l12-21.05 12 21.05z"/>
            </svg>
          </div>
          <h2 className="text-2xl font-bold">Vercel</h2>
        </div>
        <p className="text-lg leading-relaxed">
          The platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration.
        </p>
        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-4">
          <h3 className="font-semibold mb-2">Features</h3>
          <ul className="text-sm text-white/70 space-y-1">
            <li>• Zero-config deployments</li>
            <li>• Global CDN</li>
            <li>• Serverless functions</li>
            <li>• Real-time collaboration</li>
          </ul>
        </div>
      </div>
    ),
    lastActiveTime: Date.now() - 60 * 1000 * 5,
    CustomIcon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 22.525H0l12-21.05 12 21.05z"/>
      </svg>
    ),
  },
];

// 搜索工具函数
export const searchData = (data: Action[], query: string): Action[] => {
  if (!query.trim()) return data;
  
  const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 0);
  
  return data.filter(item => {
    const searchableText = [
      item.title,
      item.url,
      item.domain,
      item.action
    ].join(' ').toLowerCase();
    
    return searchTerms.every(term => searchableText.includes(term));
  });
};

// 按时间排序
export const sortByLastActive = (data: Action[]): Action[] => {
  return [...data].sort((a, b) => (b.lastActiveTime || 0) - (a.lastActiveTime || 0));
};

// 获取最近访问的项目
export const getRecentItems = (data: Action[], limit: number = 5): Action[] => {
  return sortByLastActive(data).slice(0, limit);
};