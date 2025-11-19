# The Type System
Learn the core idea with values in Zeile — types.

In Zeile, every value has a type. Variables are representations of values,
so they also have types.

## Basic Types
There're four basic types in Zeile:

- `Int`: Integers, such as `0`, `42`, `-100`.
- `Float`: Numbers with fractional component,
    also known as *floating-point numbers*, such as `3.14159`, `-0.1`, `3.0`.
- `String`: Texts, such as `"Hello!"`, `"123"`, `"😋"`.
- `Bool`: Boolean, which is either `false` or `true`.

A variable's type is its initial value's type.
For example:

```zeile
let hello = "Hello!"
// The variable “hello” has the type “String”

let myNumber = 42
// The variable “myNumber” has the type “Int”
```

## Other Types
Beside the basic types, other types can represent more information.
For example, `Character` is also a type.

```
let kasumi = Character.kasumi
// The variable “kasumi” has the type “Character”

let coolSoyo = Character(id: 39, live2d: "039_live_event_289_ur")
// The variable “coolSoyo” also has the type “Character”
```

## Using Types
Let's start from calling `say`. We call clauses that perform specific tasks
a *function*. A function may take some inputs, we call them *arguments*.
For example, in this code:

```zeile
say("Hello!", by: .soyo)
```

We're calling a function named `say`, `"Hello!"` and `.soyo` are arguments
passed into the function. `by` is the *label* of the second argument.

A function always takes arguments with specific types in order.
Different functions may have the same name, but there argument count,
type, or label are different. We use a expression like this to uniquely
refer to a function:

```zeile
say(_: String, by: Character)
```

In this expression, `say` is the name of the function.
The first argument should be a `String`, and has no argument label,
we use an underscore(`_`) to represent this.
The second argument should be a `Character`, and has an argument label `by`.

The value you passed into a function as an argument must match the
type defination. This line of code below is **invalid**:

```zeile
say(1, by: .soyo) // Cannot convert value of type 'Int' to expected argument type 'String'
```

## Creating Values from Types
When you're writting something like “calling a type”,
you're actually calling a special function that creates a value of this type.
We call this kind of functions *initializers*.

```zeile
Character(id: 39)
```

This line of code calls an initializer of the type `Character`,
which creates a value of this type. This is actually an abbreviation,
we're omitting the `.init` in this call.

```zeile
Character.init(id: 39)
```

This line of code does the exactly same thing as the previous code.

When Zeile is inferring the type for you, you have to type the `.init`
explicitly:

```zeile
say("Hello!", by: .init(id: 39))
// Or, if you don't like this abbreviation
say("Hello!", by: Character(id: 39))
```
