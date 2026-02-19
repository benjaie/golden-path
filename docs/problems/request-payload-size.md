---
title: Request payload size
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

- [Trusted documents](/practices/trusted-documents)
- [Pagination limits](/practices/pagination-limits)

## Patterns that address this

- [Trusted documents (operation allowlist)](/patterns/trusted-documents)
- [Validation pagination limits](/patterns/validation-pagination-limits)
- [Resolver pagination limits](/patterns/resolver-pagination-limits)
