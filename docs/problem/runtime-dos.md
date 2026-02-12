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

- [Build-time bounded pagination](/pattern/build-time-bounded-pagination)
- [Validation-time pagination limits](/pattern/validation-time-pagination-limits)
- [Resolver-time pagination clamping](/pattern/resolver-time-pagination-clamping)
- [Result size limits](/pattern/result-size-limits)
- [Execution timeouts](/pattern/execution-timeouts)
- [Query complexity limits](/pattern/query-complexity-limits)
