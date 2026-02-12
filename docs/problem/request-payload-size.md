---
title: Request payload size
pagination_prev: null
pagination_next: null
---


GraphQL requests can become large due to repeated fragments or deeply nested
selections, increasing network transfer and server parsing costs.

## Symptoms

- Requests with very large payloads
- High bandwidth usage for small responses
- Slow parsing and validation

## Why it matters

Large payloads are expensive to transmit and parse, and amplify traffic spikes
or malicious inputs.

## Practices that address this

- [Trusted documents](/practice/trusted-documents)
- [Pagination limits](/practice/pagination-limits)

## Patterns that address this

- [Trusted documents (operation allowlist)](/pattern/trusted-documents)
- [Validation pagination limits](/pattern/validation-pagination-limits)
- [Resolver pagination limits](/pattern/resolver-pagination-limits)
