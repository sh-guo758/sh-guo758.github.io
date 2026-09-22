# 郭思航 · 个人作品集网站

动画美术 / 动画制片方向学生的个人作品集网站，包含首页（关于我）与作品集两大板块，部署于 GitHub Pages。

## 快速开始

### 环境要求
- Node.js 18+ 与 npm

### 安装与运行
```bash
# 安装依赖
npm install

# 本地开发
npm run dev

# 生产构建
npm run build

# 本地预览构建产物
npm run preview
```

### 部署到 GitHub Pages
推送到 `main` 分支后，`.github/workflows/deploy.yml` 会自动构建并部署。
部署完成后访问：`https://<你的用户名>.github.io`

## 目录结构
```
├── .github/workflows/deploy.yml   # GitHub Pages 自动部署
├── public/portfolio/              # 作品图片资源（WebP）
└── src/
    ├── data/portfolio.ts          # 个人信息与作品数据
    ├── components/                # 导航 / 页脚 / 动画组件
    └── pages/                     # 首页、作品集页面
```

## 技术栈
- Vite + React 18 + TypeScript
- Tailwind CSS
- Framer Motion（页面与滚动动画）
- React Router
