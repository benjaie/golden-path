---
title: DoS via runtime execution
---

Even valid queries can cause excessive runtime work through expensive resolvers
or large result sets.

## Symptoms

- High resolver time
- Excessive memory usage
- Backend saturation

## Why it matters

Runtime-based DoS is costly to recover from and difficult to diagnose.

## Practices that address this

- [Pagination limits](/practices/pagination-limits)

## Solutions that address this

- [Validation pagination limits](/solutions/validation-pagination-limits)
- [Resolver pagination limits](/solutions/resolver-pagination-limits)
- [Execution timeouts](/solutions/execution-timeouts)
- [Query complexity limits](/solutions/query-complexity-limits)
