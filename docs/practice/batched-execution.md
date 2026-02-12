---
title: Batched execution
sidebar_position: 10
---

## What this practice is

Resolve related GraphQL field work in batches by default, so list-heavy queries
do not degrade into per-item backend calls.

## Applies to

- GraphQL servers
- Execution engines and runtimes
- Gateways that execute resolvers

## Suggested default parameters

| Parameter       | Default      | Notes                                       |
| --------------- | ------------ | ------------------------------------------- |
| `enabled`       | `true`       | Batch by default.                           |
| `batchSchedule` | `microtask`  | Coalesce work from the same execution turn. |
| `cacheScope`    | `perRequest` | Avoid cross-request leaks.                  |

## Why this should be default

N+1 is one of the most common sources of GraphQL performance failure. Batched
execution makes the safe behavior the easiest behavior.

## Problems this practice solves

- [N+1 queries](/problem/n-plus-1)

## Patterns that implement this practice

- [Batch resolvers](/pattern/batch-resolvers)
- [Batching and caching (DataLoader)](/pattern/batching-caching)
