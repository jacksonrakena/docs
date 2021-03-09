---
id: auth
title: Authorization
sidebar_label: Authorization
slug: auth
---

Spotify presents the developer with several ways to authorize. Here's a table breaking down the basics:  
  
| Name | Can we access user information? | User sign-in form needed? | Implemented in SpotiNET? |
|---|---|---|---|
| Authorization code | Yes, with their permission | Yes | No |
| Client credentials | No, server-to-server only | No | Yes |
  
At the moment, only the **Client credentials flow** is implemented in SpotiNET.  
This means you'll have to use the `ClientCredentialsAuthorizer`, which is used by calling `SpotifyClient.FromClientCredentials("Client ID", "Client Secret")`.  
  
The client credentials flow lets you access Spotify resources, such as tracks, albums, and artists, without having to deal
with user authorization and state management, and is ideal for server-to-server applications like statistics applications and bots.


:::noteContributors
If you're willing to implement alternate authorization flows, implement the `ISpotifyAuthorizer` interface.
:::