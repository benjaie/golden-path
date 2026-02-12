---
title: Pagination limits
sidebar_position: 30
---

## What this practice is

Enforce bounded page sizes and pagination windows by default so list queries
cannot request unbounded result sets.

## Applies to

- GraphQL servers
- Gateways and proxies

## Suggested default parameters

| Parameter | Default | Notes |
| --- | --- | --- |
| `defaultPageSize` | `20` | Applied when client does not provide a limit. |
| `maxPageSize` | `100` | Hard cap for a single page request. |
| `maxPaginationWindow` | `1000` | Bound total window per query path. |

## Why this should be default

Trusted documents reduce untrusted query risk, but trusted operations can still
request too much data unless pagination is bounded.

## Problems this practice solves

- [DoS via runtime execution](/problem/runtime-dos)
- [Execution cost spikes](/problem/execution-cost)
- [Request payload size](/problem/request-payload-size)

## Patterns that implement this practice

- [Validation pagination limits](/pattern/validation-pagination-limits)
- [Resolver pagination clamping](/pattern/resolver-pagination-clamping)
- [Result size limits](/pattern/result-size-limits)
