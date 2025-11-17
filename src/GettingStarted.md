# Getting Started

## Create a Project
Intentionally omitted.

## Start from `say`!
Language is the most important and the core of a story.
Let's start from letting a character say something.
In Zeile, this can be done in a single line:

```zeile
say("Hello!", by: .soyo)
// Let Soyo Nagasaki say "Hello!"
```

That's all you need to do. This line of code is a complete script for a story.
You don't need to provide other information, such as the full name of
characters — Zeile infers them for you.

## Characters
Let's take a closer look to the line of code we've written
in the previous section. The `.soyo` means the character Soyo Nagasaki.
We can expand this statement to a full version:

```zeile
Character.soyo
```

That's easy to understand, right? We're referring `soyo` in `Character`,
so we write `Character.soyo`. Let's put it in the `say`
that we've already known before:

```zeile
say("Hello!", by: Character.soyo)
```

Both this line of code and the line of code in the previous section is valid.
Because Zeile is smart enough and knows the value after `by:` must be a
character, it infers `Character` for you and you don't need to write it
explicitly. If you're referring a character in another place that Zeile can't
infer the leading `Character`, however, you have to make it explicitly.

## Make it Alive
Let's make our story better by showing characters on the screen
and let them do some actions. First, we need a character, which have already
been talked in the previous section:

```zeile
Character.soyo
```

Then, add a action after it, we want Soyo be shown on the screen first:

```zeile
Character.soyo.show(at: .center)
```

Use a dot(.) to separate a action from the character.
By running this line of code, Soyo is now on the center of screen.

::: tip
Like `.soyo`, the `.center` is an abbreviation of `Position.center`,
Zeile can infer the `Position` here.
:::

We can then let Soyo do an action, let's continue editing our code:

```zeile
Character.soyo.show(at: .center).act("nf02")
```

This line of code means “Show Soyo on the center of screen,
then let her do the action named ‘nf02’”.
You can find a full list of actions in the Live2D Viewer in Greatdori!,
and the code completion suggests you actions available as well when typing.

::: tip Experiment
`nf02` is my favorite action, change this code to let your favorite character
do your favorite action.
:::

## The Environment
Now you've learned how to let a character say something and make it alive.
How about the environment? We can see nothing in the background
and there's no any sound. Let's add a background image first:

```zeile
Background.change(to: "scenario102/bg01021.png")
```

The "scenario102/bg01021.png" here is a *path*,
which locates a resource uniquely. We'll discuss it deeper later.
Now, you can choose an image you like from the code completion window.

To change the background music, replace the `Background` in the code above
with `BGM`, then pick another path that refers to a sound, this can also be done
by choosing a file from the code completion window.

```zeile
BGM.change(to: "04_nobiri/04_Nobiri.mp3")
```
## Custom Characters
Zeile have prepared some character presets for you,
which you've learned how to use in the *Characters* section.
Let's customize a character by your own!

First of all, a character has these three properties:

- ID
- name
- Live 2D path

Every character has an identifier, in integer.
You can find the ID of a character in her details page in Greatdori!.
For example, Soyo's ID is `39`, so we can represent her by:

```zeile
Character(id: 39)
```

How about other properties? Zeile is inferring them for you!
If the ID provided to `Character` is known (that is, it can be found
in the characters page in Greatdori!), Zeile can infer the name
and the Live 2D path for you.

::: note
The inferred name depends on your locale settings.
If you're using Zeile Editor, you can change it in the Project Navigator
→ Metadata → Locale.

The inferred Live 2D is always the first *seasonal costume* of the character.
You can find the list of seasonal costumes in the Live 2D Viewer of Greatdori!.
:::

If you want to specify a name other than the inferred one, add the name
after ID like this:

```zeile
Character(id: 39, name: "Maroon Blackhole")
```

A Live 2D path can be added then if you want to specify:

```zeile
Character(id: 39, name: "Maroon Blackhole", live2d: "039_dream_festival_3_ur")
// Or, if you like the inferred name
Character(id: 39, live2d: "039_dream_festival_3_ur")
```

Once you customized your character, you can use it in any other places
requiring a character, like `say`:

```zeile
say("Hello!", by: Character(id: 39, live2d: "039_dream_festival_3_ur"))
```

## Naming Your Value
We've customized a character in previous section, and know how to use it.
But when `say` is becoming more, it looks a little messy:

```zeile
say("Hello!", by: Character(id: 39, live2d: "039_dream_festival_3_ur"))
say("I'm Soyo Nagasaki", by: Character(id: 39, live2d: "039_dream_festival_3_ur"))
say("Nice to meet you!", by: Character(id: 39, live2d: "039_dream_festival_3_ur"))
```

We need to write too many repeating `Character`,
and the situation will become worse when we want
to change some properties in the future — we have to change the `Character`
in every line.

Use `let` to assign a name for a constant value,
then you can refer to it by the name:

```zeile
let mySoyo = Character(id: 39, live2d: "039_dream_festival_3_ur")

say("Hello!", by: mySoyo)
say("I'm Soyo Nagasaki", by: mySoyo)
say("Nice to meet you!", by: mySoyo)
```

::: note
The name of a value can be anything, even a group of emoji!
However, it can't start with a number, and can't contain punctuations.
:::

We call the name of a value a “variable”.
Note it can't be changed once defined, and you can't use a name
that is used by a variable defined previously.

Let's define more variables and make a short story!

```zeile
let anon = Character.anon
let soyo = Character.soyo
let coolSoyo = Character(id: 39, live2d: "039_live_event_289_ur")

let soyoHome = "scenario102/bg01021.png"

Background.change(to: soyoHome)
BGM.change(to: "04_nobiri/04_Nobiri.mp3") // Leisurely tune

anon.show(at: .left)
soyo.show(at: .right)

say("Anon-chan, I'm going to make a cup of black tea.", by: soyo)
soyo.act("nf03")

say("OK~ Thanks, Soyorin~", by: anon)
anon.act("nf05")

soyo.hide()
anon.move(to: .center)
```

[Download Sample Project](GettingStartedProject.zip)

::: tip
All the empty lines in the code above are optional — Zeile ignores all of them.
We're spliting different parts of code to make it easier to read.
The contents after `//` are *comments*, they're also ignored by Zeile.
:::
