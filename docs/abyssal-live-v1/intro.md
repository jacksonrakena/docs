---
id: intro
title: Introduction
sidebar_label: Introduction
slug: intro
---

The Abyssal Live API server is a network of API nodes that perform tasks associated with internet creators.  
  
This documentation index provides information on the technology that powers Abyssal Live, and how to
integrate it into your applications and streams.

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