# A. 代码基本概念

## 语句和表达式

<u>表达式</u>表达一个<u>值</u>。值可以是数字（例如615），可以是文本（例如Farbe），也可以是更复杂的东西（例如户山香澄）。<u>语句</u>则表达一个操作。

对于代码：

```swift
let kasumi = Character.kasumi 
say("Kirakira dokidoki!", by: kasumi)
```

`let kasumi = Character.kasumi`和`say("Kirakira dokidoki!", by: kasumi)`都是语句。其中`Character.kasumi``"Kirakira dokidoki!"``kasumi`是表达式。语句中可能经常会包含表达式，但不是必然包含。

如果你难以理解，想象你在操控你的朋友：

> 前进3步
> 说“OK”

这其中`3`和`“OK”`便是值，而`前进3步`和`说"OK"`则是操作

## 注释

你可以在你的代码里插入注释。你可以利用注释标注一些内容给自己或他人，也可以用作暂时停用某条操作的方法。
注释是面向人类的，计算机会直接跳过这部分。

```swift
let kasumi = Character.kasumi // 让香澄说话
say("Kirakira dokidoki!", by: kasumi) // 耶！
// say("Arisā", by: kasumi)
```

每一行中`//`后的部分是注释。第3行不会被执行。`让香澄说话`和`耶！`也不会被处理。



你也可以用`/*`和`*/`表达注释。这两者必须成对使用，一个标记注释开头，一个标记结尾。

```swift
say("Soyorin你看！彩虹大桥诶！", by: anon)
/* anon.act("nf01") */

/*
say("是啊", by: soyo)
soyo.act("nf05")

say("呐，小爱音，我们是彩排结束后出来买饮料的吧？", by: soyo)*/
soyo.act("angry01")
```
第2行和第4-8行都不会被执行。

## 常量

常量存储值，方便你日后使用。

常量用关键词`let`。`let kasumi = Character.kasumi`就是声明常量kasumi，其量是户山香澄。这里的kasumi可以是任何名字，甚至是中文（关键词除外）。

你也可以写：`let welcome = "你好！"``let someNumber = 42`。

常量不可以修改。（Zeile不支持变量。）

如果你难以理解：想象一个盒子，你可以把值放进盒子里，以后你直接用盒子就能代表这个值。

## 关键词

关键词帮助计算机识别你想执行什么操作。`let`就是一个关键词。

关键词是计算机语言很重要的东西，因此你不能用关键词命名你的东西。除此以外，理论上什么都可以当名字。

Zeile的关键词和Swift完全一样。（例如：`import``var``for``class``override`）

