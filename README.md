# blog-v1

基于 Jekyll 的个人静态博客（v1 版）存档，本站主题派生自 [Hux Blog](https://github.com/Huxpro/huxpro.github.io)，使用 MIT 许可证。

> 本仓库为旧版博客存档，内容不再更新；新版站点见 [yenchiu.com](https://yenchiu.com/)。

## 目录结构

| 路径 | 说明 |
| --- | --- |
| `_config.yml` | 站点配置（标题、作者、链接、分页、评论等） |
| `_posts/` | 文章，Markdown，文件名格式 `YYYY-MM-DD-标题.md` |
| `_layouts/` `_includes/` | 页面布局与公共片段（head、nav、footer） |
| `1-resources.html` `2-tags.html` `3-about.html` | 资料、标签、关于页面 |
| `css/` `js/` `less/` `fonts/` `img/` | 主题样式、脚本、字体与图片资源 |
| `pwa/` `sw.js` `offline.html` | PWA 离线支持 |
| `.github/workflows/jekyll.yml` | 推送到 `master` 时构建并部署到 GitHub Pages |

## 本地预览

```bash
bundle install
bundle exec jekyll serve      # 打开 http://127.0.0.1:4000/
```

仅构建到 `_site/`：

```bash
bundle exec jekyll build
```

要求 Ruby 3.3+。Gemfile 默认使用官方源 `rubygems.org`；国内网络如需加速，可临时替换为镜像源。

## 写文章

在 `_posts/` 下新建 `YYYY-MM-DD-slug.md`，头部按现有文章的格式填写：

```yaml
---
layout:     post
title:      标题
subtitle:   副标题
date:       2026-01-01
author:     Wendell
header-img: img/the-first.png
catalog:    false
tags:
    - 标签
---
```

## License

遵循 MIT 许可证，详见 [LICENSE](https://github.com/yen-chiu/blog-v1/blob/master/LICENSE)。
