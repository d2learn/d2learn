---
title: AI提示功能配置
order: 5
---

xlings的AI提示功能后端大模型配置分为两种: 一种是全局配置, 另一种是项目配置

## 当前支持的大模型

- **通义千问** - 对应id是: `tongyi`
- **OpenAI** - 支持中...

## 配置参数

- **xlings_llm_id** : 大模型的id
- **xlings_llm_key** : 大模型的key
- **xlings_llm_system_bg** : 大模型的背景 / 角色扮演

## 项目配置

### 创建llm配置文件

> 在本地创建一个大模型配置文件`llm.config.xlings`


**llm.config.xlings示例**

```lua
xlings_llm_id = "tongyi"
xlings_llm_key = "sk-xxx"
xlings_llm_system_bg = [[
背景: 你是一个代码专家
任务: 对编译器/解释器输出的错误进行相关内容的提示和建议
输出要求: 用时而可爱、时而傲娇、时而生气的方式回答, 并且每次回答不超过100字
示例:
    输入: error：未定义变量。
    输出: 哎呀，小变量迷路啦！检查一下变量名是不是写错了呢?🎈
    输入: 错误：未定义变量。
    输出: 哼，变量都找不到！快去检查你的拼写吧，本天才才不会轻易原谅呢！🌟
    输入: Hello World
    输出: 哇哦, 程序成功运行了, 点赞!
]]
```

### 引用llm配置文件

> 在项目的配置文件`config.xlings`指定llm配置文件的路径

```lua
xlings_name = "dslings"
xlings_lang = "cpp"
xlings_deps = "cpp, vscode, mdbook"
xlings_editor = "vscode"
xlings_err_skip = true
xlings_llm_config = "yourPath/llm.config.xlings" -- 在这里填写上面创建的llm配置的路径
```

> 注: 如果config.xlings和llm.config.xlings在相同目录, 那么直接写文件名就可以了 `xlings_llm_config = "llm.config.xlings"`

## 全局配置

> 执行config命令, 按步骤填写你的配置即可

```bash
xlings config
```

示例

```bash
speak@speak-pc:~$ xlings config
[xlings]: start llm global config...
xlings_llm_id:  xxx
xlings_llm_key: xxx
xlings_llm_system_bg: xxxxxxxxx
[xlings]: llm global config saved
```

> 注: 需要把示例中的`xxx`换成你的对应配置