---
id: querying
title: Queries
sidebar_label: Querying
slug: querying
---
Now that we can do direct ID lookups, let's get to making some cool queries.  
  
The Spotify querying API is quite rich and powerful.   
Let's start by defining how you can query data from Spotify:
- You can query using multiple types at once. To search for a track only, use `SearchType.Track`, but to search for tracks and albums, use `SearchType.Track | SearchType.Album`. You can also use `SearchType.All`.
- You can limit your response count to say, 20. If you only want to see the most likely result, use `1`.
- You can use an offset. By default, it's `0`, which tells Spotify to return all results.
- You write your own query strings, which are sent to Spotify's query algorithm.
  - For the best results, follow the **Writing A Query - Guidelines** section of the [Spotify documentation.](https://developer.spotify.com/documentation/web-api/reference/#category-search)

:::note

An integrated query string builder will be developed in a future version of SpotiNET.

:::

Let's make a query!
```csharp
var query = await _client.SearchAsync(
    "The Tide", 
    SearchType.Track, 
    limit: 1, 
    offset: 0);
```

Now that we've downloaded the data, let's handle it. Because we can request multiple entity types from Spotify at once, the response data is wrapped in a `SpotifySearchResponse`, which contains fields like `Artists`, `Albums`, and `Tracks`.   
  
Let's get the first song that matches "The Tide":
```csharp
var track = query.Tracks.Items.FirstOrDefault();
Console.WriteLine("Found song: " + track.Name);
```
Hurray! We just searched for a song! `Tracks` and `Artists` are full Spotify objects, while the `Albums` collection is a paging response for `SpotifyAlbumReference` objects.

:::note
**What is a paging response? Why the `.Items`?**  
To save on traffic and network usage, Spotify sends back a "paging reference" whenever a client requests a collection of items.   
Each paging reference comes with a "page", which is a collection of items (this is stored in the `Items` collection).  
If you finish reading the page, and wish to request the next one, call `GetNextAsync()`, which will download and load it into the pager.
:::