---
title: Request payload size
pagination_prev: null
pagination_next: null
---

## What it is

GraphQL requests can become large due to repeated fragments or deeply nested selections, increasing network transfer and server parsing costs.

## Symptoms

- Requests with very large payloads
- High bandwidth usage for small responses
- Slow parsing and validation

## Why it matters

Large payloads are expensive to transmit and parse, and they amplify the impact of traffic spikes or malicious inputs.

## Patterns that address this

- [Trusted documents](/pattern/trusted-documents)
