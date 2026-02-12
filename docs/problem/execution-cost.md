---
title: Execution cost spikes
pagination_prev: null
pagination_next: null
---


Queries that are valid and small can still trigger expensive execution, such as
large fan-out, expensive joins, or heavy computation.

## Symptoms

- Slow requests despite small payloads
- Resource exhaustion during execution
- High variance in latency for similar queries

## Why it matters

Without predictable execution costs, default limits and SLOs become guesswork.

## Practices that address this

- [Pagination limits](/practice/pagination-limits)

## Patterns that address this

- [Validation pagination limits](/pattern/validation-pagination-limits)
- [Resolver pagination clamping](/pattern/resolver-pagination-clamping)
- [Query complexity limits](/pattern/query-complexity-limits)
- [Depth limits](/pattern/depth-limits)
