---
id: your-first-client
title: Your First Client
sidebar_label: Your First Client
slug: your-first-client
---
Everything in the SpotiNET library depends on `SpotifyClient`, which contains all of the code and technology requires to connect and interact with Spotify.  
  
So, let's import the library: 
```cs
using AbyssalSpotify;
```
And then create our client using the `Client Credentials` flow:
```cs
var client = SpotifyClient.FromClientCredentials("My Client Key", "My Client Secret");
```
And we're done! The client does not need to log in, as valid credentials will be checked and regenerated whenever requests are made.