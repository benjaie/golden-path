---
title: Batched execution
sidebar_position: 10
---

Resolve related GraphQL field work in batches by default, so list-heavy queries
do not degrade into per-item backend calls.

## Applies to

- GraphQL servers
- Execution engines and runtimes
- Gateways that execute resolvers

## Why this should be default

N+1 is one of the most common sources of GraphQL performance failure. Batched
execution makes the safe behavior the easiest behavior.

## Solves

- [N+1 queries](/problem/n-plus-1)

## Implementing patterns

- [Batch resolvers](/pattern/batch-resolvers)
- [Batching and caching (DataLoader)](/pattern/batching-caching)
