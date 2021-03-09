---
id: counters
title: Counters
sidebar_label: Counters
slug: counters
---

<span style={{borderRadius: '5px', backgroundColor: 'orange', display: 'inline-block', padding: '5px', paddingLeft: '10px', paddingRight: '10px', margin: '5px', color: 'white', fontWeight: 'bold', fontSize: 'small'}}>
No authorization
</span>

### Route

`/api/v1/creators/{creator_id}/counters[/raw]`

### Description
Produces an on-screen rendering of a creator's social media presence statistics.  
This is a paid endpoint, and as such, a creator ID must be provided.  

**Raw mode**  
If the `/raw` endpoint is added to the end of the URL, this endpoint will return JSON data, instead of a formatted HTML document.
The data returned will fit [this data structure.](#raw-mode-result-structure)

### Retention
The API server caches this data for 6 hours, and will lazily retrieve it - so requests done outside of 
the 6-hour cache period may take longer to return. Clients are instructed to cache this data.

### Authorization
This endpoint does not require authorization.

### Parameters
**Route**
- `creator_id` (Required)  
The Abyssal Live creator name.  
  
**Query string**
- `align` (default `left`)  
Whether to show the counters on the `left` or `right` side of the page.
- `showimages` (default `true`)  
Whether to render logos for each social media provider.
- `format` (default `true`)  
Whether to format each counter in the `English (New Zealand)` culture - for example, placing commas between thousands and millions.

### Raw mode result structure
This data will only be returned at the `counters/raw` endpoint.  
The available providers can be viewed at the [API health](status) endpoint, under `modules.creators.counters`.
```json
{
    "facebook": 6562,
    "twitter": 70732,
    "youtube": 624000,
    "patreon": 233,
    "reddit": 38920,
    "twitch": 423802,
    "discord": 45814,
    "tiktok": 257300
}
```