---
title: checker命令
order: 2.5
---

checker命令可以运行一个公开课项目中的练习代码自动检测程序, 并且实现了自动代码文件定位和进入下一个练习的功能

## 执行练习代码自动检测程序

以[d2ds](https://github.com/d2learn/d2ds)项目的练习代码为例

```bash
xlings checker
```

或

```bash
xlings dslings
```

> 注: 以d2ds项目举例, 命令`xlings checker`和`xlings dslings`是等价的, 其中**dslings**是d2ds项目中练习代码的代号

## 进度显示和错误提示

检测程序会一次检测练习直到最新一个没有通过的练习, 然后实时检测这个练习。当代码编写正确的时候就会显示通过并进入下一个练习

```bash
🌏Progress: [>------------------------------------------------------] 0/54

[Target: 0.dslings-0] - normal

❌ Error: Compilation/Running failed for dslings/tests/dslings.0.cpp

 The code exist some error!

---------C-Output---------
[ 50%]: cache compiling.release dslings/tests/dslings.0.cpp
error: dslings/tests/dslings.0.cpp:20:11: error: ‘MaxValue’ is not a member of ‘d2ds’
   20 |     d2ds::MaxValue mVal(2);
      |           ^~~~~~~~
In file included from dslings/tests/dslings.0.cpp:14:
dslings/tests/dslings.0.cpp:22:20: error: ‘mVal’ was not declared in this scope
   22 |     d2ds_assert_eq(mVal.get(), 2);
      |                    ^~~~
dslings/common/common.hpp:29:9: note: in definition of macro ‘d2ds_assert_eq’
   29 |     if (a != b) {\
      |         ^
  > in dslings/tests/dslings.0.cpp


AI-Tips(3):
哎呀，看来是有个大明星“MaxValue”没来参加派对呢！检查一下`d2ds`里有没有定义这个成员哦。顺便看看`mVal`是不是迷路了，没在正确的舞台上表演呢？✨

---------E-Files---------
dslings/tests/dslings.0.cpp
-------------------------

Homepage: https://github.com/d2learn/xlings

```