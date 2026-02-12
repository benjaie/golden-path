---
title: Batching and caching (DataLoader)
---

## Summary

Collects per-field requests, batches them, and caches results within a request.

## Applies to

- GraphQL servers
- Execution engines and runtimes

## Configuration (suggested defaults)

| Parameter       | Default      | Notes                                           |
| --------------- | ------------ | ----------------------------------------------- |
| `enabled`       | `false`      | Prefer batch resolvers as the default strategy. |
| `cacheScope`    | `perRequest` | Avoid cross-request caching by default.         |
| `batchSchedule` | `microtask`  | Batch within a single tick.                     |
| `maxBatchSize`  | `100`        | Bound batch size to avoid spikes.               |

## Implementation notes

- Create a loader per request and per resource type.
- Ensure loaders are used in every resolver that can trigger N+1.
- Preserve ordering between requested keys and results.

## Cautions

- Inconsistent usage causes fragmented batches and degraded performance.
- Cross-request caches can leak data if not keyed by auth context.

## Why this is the recommended default

It generally is not. If your library can offer batch resolvers, that is the
preferred default because it removes N+1 without relying on user discipline.
DataLoader remains a useful alternative when resolver signatures cannot change.

## Why users might opt out

Users may avoid DataLoader if they cannot guarantee it is wired into every
resolver, or if they want to keep resolver code straightforward without
additional loader lifecycle concerns.

## Problems addressed

- [N+1 queries](/problem/n-plus-1)
