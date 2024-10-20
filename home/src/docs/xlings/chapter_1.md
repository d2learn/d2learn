---
title: 快速安装
order: 2
---

# 快速安装

## 方式一: 命令行安装

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

## 方式二: 下载zip包安装

**下载压缩包** -> [xlings.zip](https://github.com/d2learn/xlings/archive/refs/heads/main.zip)

**解压zip并运行安装脚本**

- windows: 双击解压后 tools目录中的`install.win.bat`进行安装
- linux: 鼠标右键点击 tools目录中的`install.unix.sh`选择**运行程序选项**进行安装