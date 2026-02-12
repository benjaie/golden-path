---
title: DoS via runtime execution
pagination_prev: null
pagination_next: null
---

## What it is

Even valid queries can cause excessive runtime work through expensive resolvers
or large result sets.

## Symptoms

- High resolver time
- Excessive memory usage
- Backend saturation

## Why it matters

Runtime-based DoS is costly to recover from and difficult to diagnose.

## Practices that address this

- [Pagination limits](/practice/pagination-limits)

## Patterns that address this

- [Build bounded pagination](/pattern/build-bounded-pagination)
- [Validation pagination limits](/pattern/validation-pagination-limits)
- [Resolver pagination clamping](/pattern/resolver-pagination-clamping)
- [Result size limits](/pattern/result-size-limits)
- [Execution timeouts](/pattern/execution-timeouts)
- [Query complexity limits](/pattern/query-complexity-limits)
