---
home: true
title: xlings工具
icon: screwdriver-wrench

heroImage: /xlings/xlings-install.gif

heroText: xlings
tagline: 一个编程学习和课程搭建工具
actions:
  - text: 开源代码
    icon: fa-brands fa-github
    link: https://github.com/d2learn/xlings
    type: primary

  - text: 交流&反馈
    icon: fa-solid fa-comment
    link: https://forum.d2learn.org/category/9/xlings
    type: primary

features:

  - title: 软件安装和环境配置
    icon: fa-solid fa-gear
    details: 通过install命令安装常用软件, 并支持一键配置开发环境
    link: ../docs/xlings/chapter_2/chapter_2_2.md

  - title: 多编程语言支持
    icon: fa-solid fa-code
    details: 支持运行Python、C、C++代码, 自动安装依赖
    link: ../docs/xlings/chapter_2/chapter_2_3.md

  - title: 实时编译运行
    icon: fa-solid fa-spinner
    details: 对目标文件中的代码改动实时检测&编译运行显示结果
    link: ../docs/xlings/chapter_2/chapter_2_3.md

  - title: AI代码提示
    icon: fa-solid fa-robot
    details: 可自定义后端大模型和AI背景, 对代码错误进行实时提示
    link: ../docs/xlings/chapter_4.md

  - title: 课程&教学项目搭建
    icon: fa-solid fa-graduation-cap
    details: 快速构建[Book + Code + Video + X]结构的课程
    link: ../docs/xlings/chapter_3/chapter_3_1.md

  - title: 练习代码自动化检测
    icon: fa-solid fa-dumbbell
    details: 对目标文件中的代码改动实时检测&编译运行显示结果
    link: ../docs/xlings/chapter_2/chapter_2_5.md

  - title: drepo项目管理
    icon: fa-solid fa-cube
    details: 提供统一的课程项目管理, 一键下载课程项目并自动安装项目依赖
    link: ../docs/xlings/chapter_2/chapter_2_4.md

  - title: markdown在线书籍
    icon: fa-solid fa-book
    details: 使用mdbook + github-pages快速搭建在线书籍
    link: ../docs/book-template/README.md

footer: false
---

## 快速安装

> 打开命令行窗口(windows对应**PowerShell**), 然后选择对应平台, 复制并运行一键安装命令

::: code-tabs#shell

@tab windows

```bash
Invoke-Expression (Invoke-Webrequest 'https://d2learn.org/xlings-install.ps1.txt' -UseBasicParsing).Content
```

@tab linux

```bash
wget https://d2learn.org/xlings-install.sh -O - | bash
```

:::