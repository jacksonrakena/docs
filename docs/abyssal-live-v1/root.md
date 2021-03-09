---
id: status
title: Status
sidebar_label: Status
slug: status
---

### Routes

`/api/v1/health`  
`/api/v1/status`  
`/api/v1`

### Description
Provides a general view of the status of the Abyssal Live API server.

### Response structure
An example response.
```json
{
    "status": "ok", // Status - ok, stressed, overloaded, failed
    "serverTimeMilliseconds": 1615266141750, // Server local time in UNIX milliseconds
    "uptimeMilliseconds": 463845000.3543, // Server uptime in UNIX milliseconds
    "modules": {
        "creators": { // see Counters route
            "count": 4, // number of creators loaded on this node
            "counters": [ // a list of all registered providers
                "facebook",
                "twitter",
                "youtube",
                "patreon",
                "reddit",
                "instagram",
                "twitch",
                "discord",
                "tiktok"
            ]
        }
    },
    "versions": {
        "runtime": "5.0.3", // .NET runtime version
        "system": "Unix 5.10.19.200", // System
        "serviceCore": "3.1.1", // Live version
        "worldcast": "2.18", // RWorldcast
        "pixie": "1.1.2" // Abyssal Pixie
    },
    "identifiers": {
        "serviceCoreNodeId": 4, // Live node ID
        "nodeName": "abyssal-arctic-4D1F", // Live node name
        "machineName": "arctic-f33" // Machine name 
    },
    "request": {
        "threadId": 48, // Process thread ID
        "requestId": "33b0765a-3f08-45a0-b55b-11ec0005b9f8" // Request ID
    }
}
```