---
id: chat
title: Chat
sidebar_label: Chat
slug: chat
---

<span style={{borderRadius: '5px', backgroundColor: 'blue', display: 'inline-block', padding: '5px', paddingLeft: '10px', paddingRight: '10px', margin: '5px', color: 'white', fontWeight: 'bold', fontSize: 'small'}}>
Display-only
</span>

<span style={{borderRadius: '5px', backgroundColor: 'orange', display: 'inline-block', padding: '5px', paddingLeft: '10px', paddingRight: '10px', margin: '5px', color: 'white', fontWeight: 'bold', fontSize: 'small'}}>
No authorization
</span>

Launches the Abyssalchat JavaScript browser application, providing a read-only display for the Twitch chat of a streamer.

:::warning

This route returns an HTML document with embedded JavaScript that must be rendered by a browser or JavaScript engine.
**This is not an API route.**
:::

### Route

`/api/v1/twitch/channel/{channel}/chat`

### Parameters
**Route**
- `channel` (Required)  
The Twitch channel username to view chat for.
  
**Query string**
- `blocked_keywords` (default `""`)  
A set of comma-delimited phrases to hide on screen.
- `filtering` (default `none`)  
The filtering mode to apply. If set to `numbers`, Abyssalchat will block all messages that match a number regex (which matches all numbers 1-10)
