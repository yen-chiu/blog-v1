# blog-v1

基于 Jekyll 的个人静态博客（v1 版）存档，主题源头是 [Hux Blog](https://github.com/Huxpro/huxpro.github.io)（MIT 许可证）。本站几经转手，过程见下文[来源与流转](#来源与流转)。

> 本仓库为旧版博客存档，内容不再更新；新版站点见 [yenchiu.com](https://yenchiu.com/)。
>
> 老站线上地址：<https://yenchiu.com/blog-v1/>（推送到 `master` 后由 GitHub Actions 自动构建并部署到 GitHub Pages）。

## 来源与流转

本站主题沿自 [Hux Blog](https://github.com/Huxpro/huxpro.github.io)（作者 [Huxpro](https://github.com/Huxpro)）；博客本身几经转手，过程如下（日期取自提交记录）：

| 时间 | 阶段 | 说明 |
| --- | --- | --- |
| 2017-02-10 | BY Blog | 首次提交 `BY Blog init`，即把 Hux Blog 改成的「BY Blog」。主题文件与 Huxpro 仓库 2017 年初的版本字节级一致（`js/hux-blog.js`、`css/hux-blog.min.css` 的 git blob 相同），`js/hux-blog.js` 里至今保留 `Hux Blog v1.6.0 · Copyright 2016 @huxpro` 字样 |
| 2019-07 – 2021-06 | 三叶语博客 | klovien 接手，henryjiang 在 2019-09 多次合并 `klovien/klovien.github.io` 的内容，文章以三叶语为主 |
| 2021-06 – 2023-03 | 停更 | 无提交 |
| 2023-03 – 2023-10 | 本站 v1 | 接手站点并继续维护，随后转为存档 |
| 2024-11 起 | 维护与迁移 | 旧内容逐步迁往新站；线上站点转到 [yenchiu.com](https://yenchiu.com/) |
| 2026-11-17 | 归档 | 内容迁入 Astro 新站，本仓库（v1）只作存档 |

两点说明：

- 这些交接都是以拷贝、推送或 PR merge 完成的，GitHub 上并不存在 fork 关系（仓库接口返回 `fork: false`），所以页面上看不到 “forked from”，痕迹只留在提交历史里。
- 历史中没有 Huxpro 本人的提交：Hux Blog 是以「被复制的主题文件」形式进入的，最早一次提交就已经是 qiubaiying 的 BY Blog。

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
header-img: img/santi/hero.jpg
catalog:    false
tags:
    - 标签
---
```

## License

遵循 MIT 许可证，详见 [LICENSE](https://github.com/yen-chiu/blog-v1/blob/master/LICENSE)。

## ⭐ Star History

[![Star History Chart](https://api.star-history.com/svg?repos=yen-chiu/blog-v1&type=Date)](https://star-history.com/#yen-chiu/blog-v1&Date)
