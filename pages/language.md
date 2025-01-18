---
title: My Ideal Programming Language
menu:
  visible: false
---

As an armchair programming language design philosopher, I have a lot of opinions about programming languages. Over time I've decided what features I like, what features I don't like, sometimes with well thought out reasons, sometimes based on "vibes". I also have strong feelings on what should be in a standard library (vs ecosystem libraries, or libraries maintained by the language maintainers). Finally I also have an ever-developing philosophy on how a language's designers / implimenters should think about.

# Design Philosophy
- Optimize for _reading_ and understanding code over writing code.
    - Never underestimate the value of making things discoverable.
    - The less visual context needed to know something, the better.
    - "Once you know, you know" style things are _good_ when _enforced_, and _less good_ when by convention.
- The above _includes_ runtime stuff!
    - Take good error messaging seriously from the start
- Simplicity is a value.
    - And is distinct from terseness.

# Good Features
- Immutability to the core
    - to the level of "the language can safely assume no data in memory that is referenced ever changes"
- Static typing
- Real types
    - types with the same underlying type / data representation are _distinct_
- Duck typing
    - Go's interfaces are my favorite
    - Unsure on exposing values also (i.e. Typescript)
- Multiple return values
    - Tuples are fine
    - But we can use sugar to make tuples way better to use
- Destructuring / pattern matching
    - Gleam is so good
    - Javascript / Typescript are pretty good too
- Errors as values
- Enums
    - Option type is _way_ better than null
    - Result type is better than multiple return values (for errors)
    - Unsure about general unions
    - So far I _really_ like Gleam's implimentation
- Type inferencing
    - 100% on "return type" inferencing, i.e. Gleam, TypeScript
    - 50% on "call site" inferencing, i.e. Haskell (I think?)
- Coroutines as a primitive (fight me)
    - Unsure on Go style "fire and forget" vs erlang / elixer ownership / signaling
- `defer` from Go

# Bad Features
- Exceptions
    - Even Go's panic has me iffy
    - Maybe just for things like divide by zero?
- Goto, not even once

