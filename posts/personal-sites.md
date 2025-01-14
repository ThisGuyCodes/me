---
title: Personal Sites
date: 2025-01-10
author: Travis Johnson
tags:
  - yak shaving
---

Every engineer[^1] that goes to make a personal site gets stuck in the same trap: what technology do I use to make it?

[^1]: No? Just me?

<!-- more -->

The options are many. Static site generators such as:

- [Jekyll](https://jekyllrb.com/)
- [Hugo](https://gohugo.io/)
- [Lume](https://lume.land/)

Or a full framework like:

- [Next.js](https://nextjs.org/)
- [Rails](https://rubyonrails.org/)
- [Django](https://www.djangoproject.com/)
- [Laravel](https://laravel.com/)

Or make something more from "scratch". I am a big fan of [Golang](https://go.dev/), and wanted to explore using [Templ](https://templ.guide/).

The approaches have their own trade-offs, mostly between being "productive" (that is, actually making blog posts), and "learning" (fiddling endlessly with pieces of technology).

However, I feel like there's a third piece that's often overlooked. A personal site is not just a blog, but also a "portfolio" of sorts; for more frontend folks it's a chance to show off their design skills of course, but for the backend and systems folks it can also serve as a demonstration of their skillsets.

There's a different type of experience that's gotten from maintaining things over time (as opposed to creating things over a relatively shorter duration). And having a thing that you add complexity and features to over time can be a better than normal way to demonstrate maturity as an engineer.

But really, with these as justification, I tend to spin my wheels endlessly; either with just the decision itself, or with tinkering with things, never quite being satisfied enough to actually publish anything. But this time around I'm hoping to have broken that cycle!

I've used [Lume](https://lume.land/) as a static site generator, and I'm using [Cloudflare Pages](https://pages.cloudflare.com/) as the host. This combo was selected for a few reasons: static sites are fast, Lume is a relatively fresh project and so things are still lightweight and relatively easy to understand / extend, and Cloudflare Pages has excellent edge caching with the ability to add [custom server-side functionality](https://developers.cloudflare.com/pages/functions/) pretty easily (I'm not much of a Javascript person, but I can compile [Rust](https://www.rust-lang.org/) / [Golang](https://go.dev) to WASM if I really want!).

The whole thing is on [Github](https://github.com/thisguycodes/me), using Cloudflare's [Github integration](https://developers.cloudflare.com/pages/configuration/git-integration/#github) to automatically deploy on push, and I've integrated [Giscus](https://giscus.app/) for comments (uses Github discussions as the backend).

Fingers crossed I can actually give this thing some momentum.
