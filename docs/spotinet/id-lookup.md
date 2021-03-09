---
id: id-lookup
title: Taking Names And Making Requests
sidebar_label: Entities by ID
slug: id-lookup
---
Now that we have our Spotify client, let's start by making requests using a Spotify entity ID.  
  
Spotify entity IDs look like `254bXAqt3zP6P50BdQvEsq`, while URIs look like `spotify:track:254bXAqt3zP6P50BdQvEsq`.

:::note
For the purposes of these examples, the following entities will be used:
- Track: `254bXAqt3zP6P50BdQvEsq` (*Everywhere - 2017 Remaster*, Fleetwood Mac)
- Album: `4AsXQ17Arq1cUVoa9dKJ3F` (*Tango In The Night (Deluxe Edition)*, Fleetwood Mac)
- Artist: `08GQAI4eElDnROBrJRGE0X` (*Fleetwood Mac*)
:::

Let's request a Spotify track by ID:
```csharp
var track = await client.GetTrackAsync("254bXAqt3zP6P50BdQvEsq");

Console.WriteLine($"Found song {track.Name}.");
// Prints: "Found song Everywhere - 2017 Remaster."
```

Success! We can make requests. SpotiNET will automatically refresh credentials as they expire.  
  
To save data, the `SpotifyTrack.Album` property is actually a `SpotifyAlbumReference`, which has only brief data
about the underlying album. We can call the `GetFullEntityAsync` method to download all data on the album:
```csharp
var album = await track.Album.GetFullEntityAsync();
```
For example, a full `SpotifyAlbum` object contains a pager with `SpotifyTrackReference` objects, representing references to all the tracks in that album.