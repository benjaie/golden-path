---
title: Batching and caching (DataLoader)
---


Collects per-field requests, batches them, and caches results within a request.

## Practices implemented

- [Batched execution](/practice/batched-execution)

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

## Problems addressed

- [N+1 queries](/problem/n-plus-1)
