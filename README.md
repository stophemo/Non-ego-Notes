# Woo / 无我笔记 (Non-ego-Notes)

Woo（无我笔记）是一款专注写作的 Markdown 桌面笔记软件。

## 特性

- 简洁的 Markdown 编辑体验
- Git 版本管理支持
- 思维导图与大纲视图
- AI 辅助写作能力（规划中）

## 技术栈

- **前端**: Vue 3 + TypeScript
- **桌面端**: Electron + Vite
- **状态管理**: Pinia

## 开发指南

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 构建应用

```bash
# 构建生产版本
npm run build

# 构建 Electron 应用
npm run electron:build
```

## 项目结构

```
Non-ego-Notes/
├── electron/               # Electron 主进程和预加载脚本
├── src/                    # Vue 3 前端源码
│   ├── components/         # Vue 组件
│   ├── config/             # 配置文件（如菜单配置）
│   ├── types/              # TypeScript 类型定义
│   ├── App.vue             # 主应用组件
│   ├── main.ts             # 应用入口
│   └── style.css           # 全局样式
├── docs/                   # 项目文档
├── dist/                   # 构建输出目录
├── dist-electron/          # Electron 构建输出目录
└── package.json            # 项目配置和依赖管理
```

## 贡献

欢迎提交 Issue 和 Pull Request 来改进项目。

## 许可证

本项目采用 [LICENSE](LICENSE) 许可证。
