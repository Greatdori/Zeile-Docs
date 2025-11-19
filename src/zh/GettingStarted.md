# Zeile 入门

## 创建项目
此节暂时省略

## 从 `say` 开始!
语言是故事中最重要的核心部分，让我们从让一名角色说话开始。
在 Zeile 中，这可以用一行代码实现：

```zeile
say("你好！", by: .soyo)
// 让素世说：“你好！”
```

这就完成了，这一行代码是一个故事的完整脚本。
你不需要提供其他额外信息，例如角色的全名 —— Zeile 负责推断它们。

## 角色
让我们进一步看看在上一节中写的这行代码。`.soyo` 指的是角色*长崎素世*。
我们可以把这个表达展开为更完整的版本：

```zeile
Character.soyo
```

这应该很好理解，我们在指代“角色”(*Character*)中的“素世”(*soyo*)，
所以我们写 `Character.soyo`。然后就可以把它放进前面说的 `say` 里了：

```zeile
say("你好！", by: Character.soyo)
```

这行代码和前一节中的代码都一样是有效的。因为 Zeile 足够聪明，
知道 `by:` 后面的值一定是个角色，然后为你**推断**了 `Character` 这部分，
所以你可以不用显式地把这部分写出来。
如果你在另一个 Zeile 不能推断 `Character` 前缀的地方指代一个角色，
则必须把这部分显式写出来，就像上面这样。

## 活动起来
让我们将角色显示在屏幕上并让她们做一些动作，来让我们的故事看起来更好。
首先，我们需要一名角色，这已经在上一节中提到过了：

```zeile
Character.soyo
```

接下来，在这后面添加一个操作。我们想要先让素世出现(*show*)在屏幕上：

```zeile
Character.soyo.show(at: .center)
```

使用一个点(.)来分隔角色与操作。运行这行代码后，素世现在就在屏幕的中心(*center*)了。

::: tip
类似于 `.soyo` 这样的表达，`.center` 是 `Position.center` 的缩写，
Zeile 可以推断这里的 `Position`。
:::

接下来可以让素世做个动作，让我们继续编辑代码：

```zeile
Character.soyo.show(at: .center).act("nf02")
```

这行代码的意思是“让素世出现在屏幕的中心，随后让她做名为 ‘nf02’ 的动作”。
你可以在 Greatdori! 的 Live2D 浏览器中找到动作的完整列表，
代码补全也会在你输入的时候向你推荐可用的动作。

::: tip 练习
`nf02` 是我最喜欢的动作，修改这行代码来让你最喜欢的角色做你最喜欢的动作。
:::

## 环境
现在你知道了如何让角色说点东西并让她动起来。
环境这一块怎么说？现在背景一片漆黑，也没有任何声音。
让我们先加一张背景(*Background*)图：

```zeile
Background.change(to: "scenario102/bg01021.png")
```

这里的“scenario102/bg01021.png”是一个*路径*，用于唯一地定位一个资源。
我们将在以后深入讨论这个。现在，你可以从代码补全窗口中选一张你喜欢的图片。

若要更改背景音乐，将上面代码中的 `Background` 换成 `BGM`，
然后把路径改为指向某个音频的路径就好了。这也可以通过自动补全窗口来查找。

```zeile
BGM.change(to: "04_nobiri/04_Nobiri.mp3")
```

## 自定义角色
Zeile 已经为你准备了一些角色的预设，这已经在前面的*角色*一节中说到了。
让我们自己自定义一个角色！

首先，一个角色有这三个属性：

- ID (标识符)
- 名称 (*name*)
- Live 2D 路径

每个角色都有一个整数 ID。你可以在 Greatdori! 的角色详情页中找到一名角色的 ID。
例如，素世的 ID 是 `39`，因此我们可以这样表示她：

```zeile
Character(id: 39)
```

那其他的参数呢？Zeile 在为你推断它们！如果向 `Character` 提供的 ID 是已知的
（即，可以在 Greatdori! 的角色页中找到它），则 Zeile 可以为你推断名称和 Live 2D 路径。

::: note
推断的名称基于你的地区设置。
如果你正在使用 Zeile 编辑器，你可以在*项目导航栏 → 元数据 → 地区*处更改这项设置。

推断的 Live 2D 总是角色的第一个季节服装。
你可以在 Greatdori! 的 Live 2D 浏览器中找到季节服装的列表。
:::

如果你想要指定一个与推断名称不同的名称，像这样在 ID 后面添加名称(*name*)：

```zeile
Character(id: 39, name: "栗色黑洞")
```

如果你想要指定 Live 2D 路径，在后面接着添加：

```zeile
Character(id: 39, name: "栗色黑洞", live2d: "039_dream_festival_3_ur")
// 或者，如果你想用推测的名称
Character(id: 39, live2d: "039_dream_festival_3_ur")
```

完成自定义角色后，你就可以在任何需要角色的地方使用它，比如 `say`：

```zeile
say("你好！", by: Character(id: 39, live2d: "039_dream_festival_3_ur"))
```

## 为一个值命名
我们已经在上一节中自定义了一个角色，并且知道了如何使用它。
但是随着 `say` 越来越多，这看起来就有点乱了：

```zeile
say("你好！", by: Character(id: 39, live2d: "039_dream_festival_3_ur"))
say("我是长崎素世", by: Character(id: 39, live2d: "039_dream_festival_3_ur"))
say("贵安", by: Character(id: 39, live2d: "039_dream_festival_3_ur"))
```

我们需要写一大堆重复的 `Character`，如果以后想更改一些参数就更有难了
—— 我们必须得去一个个更改每一行的 `Character`。

使用 `let` 来为一个不变的值指定一个名称，然后你就可以通过这个名称来引用它：

```zeile
let mySoyo = Character(id: 39, live2d: "039_dream_festival_3_ur")

say("你好！", by: mySoyo)
say("我是长崎素世", by: mySoyo)
say("贵安", by: mySoyo)
```

::: note
一个值的名称可以是任何文本，甚至可以是一组 Emoji！
但是，它不能以数字开始，且不能包含除了下划线(`_`)以外的标点符号。
:::

我们把一个值的名称叫做“变量”。注意它在声明后并不能被改变，
并且你不能使用前面的变量已经使用过的名字。

让我们定义更多变量并创作一个简短的故事！

```zeile
let anon = Character.anon
let soyo = Character.soyo

let soyoHome = "scenario102/bg01021.png"

Background.change(to: soyoHome)
BGM.change(to: "04_nobiri/04_Nobiri.mp3") // 悠闲的小曲

anon.show(at: .left)
soyo.show(at: .right)

say("小爱音，我去沏一杯红茶", by: soyo)
soyo.act("nf03")

say("OK~ 谢谢Soyorin~", by: anon)
anon.act("nf05")

soyo.hide()
anon.move(to: .center)
```

[下载示例项目](GettingStartedProject.zip)

::: tip
上面代码中的所有空行都是可选的 —— Zeile 会全部忽略掉。
我们这样做是为了分隔代码的不同部分来让它更有可读性。
`//` 后面的内容是*注释*，它们也全都会被 Zeile 忽略掉。
:::
