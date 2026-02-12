---
title: Pagination limits
---

## Summary

Pagination limits enforce safe defaults and hard caps for list fields so query
cost stays bounded.

## Practices implemented

- [Pagination limits](/practice/pagination-limits)

## Applies to

- GraphQL servers
- Gateways and proxies

## Configuration (suggested defaults)

| Parameter | Default | Notes |
| --- | --- | --- |
| `defaultPageSize` | `20` | Used when list limit argument is omitted. |
| `maxPageSize` | `100` | Hard cap for list size per field. |
| `maxPaginationWindow` | `1000` | Bound the total records scanned/returned. |
| `enforcement` | `clamp` | Clamp above-limit values and emit warnings. |

## Implementation notes

- Prefer cursor pagination with explicit `first`/`last` limits.
- Apply limits uniformly across all list-returning fields.
- Include stable error metadata when rejecting over-limit requests.

## Cautions

- Too-low defaults may increase client round-trips.
- Different limits across fields can create inconsistent behavior.

## Problems addressed

- [DoS via runtime execution](/problem/runtime-dos)
- [Execution cost spikes](/problem/execution-cost)
- [Request payload size](/problem/request-payload-size)
