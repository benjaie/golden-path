---
title: Query complexity limits
---

## Summary

Complexity limits cap the estimated cost of a query before execution to prevent expensive operations from overwhelming systems.

## Applies to

- GraphQL servers
- Gateways and proxies
- Observability and security tooling

## Configuration (suggested defaults)

| Parameter | Default | Notes |
| --- | --- | --- |
| `maxComplexity` | `1000` | Total allowed cost per operation. |
| `complexityModel` | `fieldCount` | Use a simple model as a baseline. |
| `listMultiplier` | `pageSize` | Multiply cost by pagination argument or default. |

## Implementation notes

- Count fields, nested selections, and list multipliers deterministically.
- Treat unknown arguments conservatively by using default page sizes.
- Surface the calculated complexity in error metadata for debugging.

## Cautions

- Keep rules stable across releases to avoid breaking clients.
- Avoid leaking schema or data in error responses.
- Ensure the complexity model matches your pagination conventions.

## Why this is the recommended default

Complexity limits provide a predictable, enforceable ceiling on execution cost. They turn an implicit risk into an explicit, configurable guardrail so users are protected without having to understand every query’s performance profile.

## Why users might opt out

If all traffic is trusted and pre-registered (for example, strict trusted documents plus stable query planning), users may choose to relax complexity limits. Some teams also rely on external rate limiting and circuit breakers instead.

The risk is that a small, valid query can still trigger very expensive execution. Without a shared complexity model, defaults diverge across libraries, and users cannot reason about errors or safe limits. Complexity limits are recommended to establish predictable execution costs.

## Problems addressed

- [Execution cost spikes](/problem/execution-cost)
