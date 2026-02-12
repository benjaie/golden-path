---
title: Execution cost spikes
pagination_prev: null
pagination_next: null
---

## What it is

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

- [Build-time bounded pagination](/pattern/build-time-bounded-pagination)
- [Validation-time pagination limits](/pattern/validation-time-pagination-limits)
- [Resolver-time pagination clamping](/pattern/resolver-time-pagination-clamping)
- [Query complexity limits](/pattern/query-complexity-limits)
- [Depth limits](/pattern/depth-limits)
