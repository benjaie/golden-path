---
title: Resolver pagination clamping
---

## Summary

Apply default pagination values and clamp over-limit values at resolver/data
access boundaries.

## Practices implemented

- [Pagination limits](/practice/pagination-limits)

## Applies to

- GraphQL servers
- Gateways with resolver plugins

## Configuration (suggested defaults)

| Parameter | Default | Notes |
| --- | --- | --- |
| `defaultPageSize` | `20` | Applied if absent in resolver args. |
| `maxPageSize` | `100` | Clamp values above the limit. |
| `maxPaginationWindow` | `1000` | Clamp or reject large windows. |
| `enforcement` | `clamp` | Prefer compatibility with legacy clients. |

## Implementation notes

- Enforce before database/downstream calls.
- Centralize in shared resolver wrappers or data-access layer.
- Emit warnings/metrics when clamping occurs.

## Cautions

- Silent clamping can surprise clients; document behavior clearly.
- Inconsistent wrappers across services can cause drift.

## Problems addressed

- [DoS via runtime execution](/problem/runtime-dos)
- [Execution cost spikes](/problem/execution-cost)
- [Request payload size](/problem/request-payload-size)
