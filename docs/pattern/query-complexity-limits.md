---
title: Query complexity limits
---

## Summary

Complexity limits cap the estimated cost of a query before execution to prevent
expensive operations from overwhelming systems.

## Practices implemented

- [Operation cost controls](/practice/operation-cost-controls)

## Applies to

- GraphQL servers
- Gateways and proxies
- Observability and security tooling

## Configuration (suggested defaults)

| Parameter         | Default      | Notes                                            |
| ----------------- | ------------ | ------------------------------------------------ |
| `maxComplexity`   | `1000`       | Total allowed cost per operation.                |
| `complexityModel` | `fieldCount` | Use a simple model as a baseline.                |
| `listMultiplier`  | `pageSize`   | Multiply cost by pagination argument or default. |

## Implementation notes

- Count fields, nested selections, and list multipliers deterministically.
- Treat unknown arguments conservatively by using default page sizes.
- Surface calculated complexity in error metadata for debugging.

## Cautions

- Keep rules stable across releases to avoid breaking clients.
- Avoid leaking schema or data in error responses.
- Ensure the model matches your pagination conventions.

## Problems addressed

- [Execution cost spikes](/problem/execution-cost)
- [Excessive query complexity](/problem/query-complexity)
- [DoS via runtime execution](/problem/runtime-dos)
