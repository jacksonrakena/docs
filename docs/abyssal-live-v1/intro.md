---
id: intro
title: Intro & Reference
sidebar_label: Intro & Reference
slug: intro
---

The Abyssal Live API server is a network of API nodes that perform tasks associated with internet creators.  
  
This documentation index provides information on the technology that powers Abyssal Live, and how to
integrate it into your applications and streams.

___
## Transport security
All Abyssal Live requests are made over HTTPS to `https://live.abyssal.gg` with **no exceptions.**    
  
The SSL certificate for `live.abyssal.gg` is issued to `sni.cloudflaressl.com`, validated on all major certificate chains.  
  
For security purposes, the certificate for `docs.abyssal.gg` is different to the certificate for `live.abyssal.gg`.  
  
If the certificate is not approved, you **must** close the request.

___
## Versioning
The current API version is **v1**/**v2**.  
Routes that are on each version will be indicated on the route detail page.  
All routes begin with the following URL prefix (the *"API URL Base"*):
```
https://live.abyssal.gg/v{version}/
```
For example, v1 routes start with:
```
https://live.abyssal.gg/v1/
```
___

## Authorization
Authorization is handled in Live in two types: **public**, and **private**.
  
### Public
Public authorization is just identifying data - for example, viewing public statistics
about a creator or topic. Usually the identifier is passed as a URL part. For example, to view public statistics about `abyssalnz`, the following
route is called:
```
https://live.abyssal.gg/api/v1/creators/abyssalnz/counters
```
Where `abyssalnz` is the creator identifier - which are available on request.

### Private
Private authorization is used when accessing sensitive or private information, or updating records.
Private authorization uses a permanent **Abyssal Live Secret Key**, which is a 32-byte-long Base64-encoded string, sent as a header.
Here's an example:
```headers
Authorization: Basic hg2n0dHQyNrQGahIlMpQod5sGhqDr9OSFZ5RWlz4BGc
```
(some legacy clients marked with **Auth-Legacy** require it sent with header key `X-Abyssal-Live-Token`, and without the `Basic`)

___

## Data formats
| Data type | Format type | Example 
|-|-|-|
| Dates & times | `YYYY-MM-DDTHH:MM:SS` | `2021-03-09T20:45:30` |