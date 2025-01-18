---
title: Local First
date: 2025-01-17
author: Travis Johnson
draft: true
tags:
  - local first
---

I've been diving pretty deep on the Local First movement lately. I've been a fan of a few similar movements in the past (namely PWAs), but if I'm honestly I never really leaned this far into the local persistence ideas; for me PWAs were about performance optimization, live updates (without a refresh), and offline reading. Local First takes this to a whole other level though, talking about how the application should be totally (or mostly) usable without a server invovled at all (after initial load).

Specifically the ecosystem here leans really hard into the idea of a "sync engine" rather than making API calls. Like you don't "get" data, it's "pushed" to you whenever it changes (details of how the sync occurs aside, this "push" is from the perspective of the main application code). So long as you have a reactive data store, your application just treats all data as local (and thus, works offline, loads instantanously, etc), while the sync engine works to keep the data up to date. I think this is a wildly cool idea, and I really hope it becomes more and more the "default" (at least for applicable types of applicaitons). As well, depending on how the sync engine is implimented, this can often end up making peer-to-peer collaboration trivial to add on top. But depending on the type of application(s) you're building, it isn't enough of a whole story.

## The Write Path
