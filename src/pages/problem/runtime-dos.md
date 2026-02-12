---
title: DoS via runtime execution
---

## What it is

Even valid queries can cause excessive runtime work through expensive resolvers
or large result sets.

## Symptoms

- High resolver time
- Excessive memory usage
- Backend saturation

## Why it matters

Runtime-based DoS is costly to recover from and difficult to diagnose in
production.

## Patterns that address this

- [Execution timeouts](/pattern/execution-timeouts)
- [Result size limits](/pattern/result-size-limits)
- [Query complexity limits](/pattern/query-complexity-limits)
