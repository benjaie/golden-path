---
title: Batch resolvers
---

## Summary

Batch resolvers group many field resolutions into a single call so servers avoid N+1 database or service requests while preserving GraphQL’s shape.

## Applies to

- GraphQL servers
- Execution engines and runtimes

## Configuration (suggested defaults)

| Parameter | Default | Notes |
| --- | --- | --- |
| `batchSchedule` | `microtask` | Queue batching within the same tick. |
| `cacheScope` | `perRequest` | Avoid cross-request caching by default. |

## Implementation notes

- Resolver signature should accept a list of parent objects.
- Preserve positional ordering between inputs and outputs.
- Return `null` or errors for missing items without reordering.
- Prefer request-scoped caching for de-duplication within the same operation.

## Cautions

- Cross-request caches can leak data if not keyed by auth context.
- Make batch failures granular; avoid failing the entire batch when possible.
- Batching can increase end-to-end latency by expanding the critical path, even when backend requests are more efficient.

## Why this is the recommended default

Batch resolvers remove N+1 by default and make the efficient path the path of least resistance. Users have to actively opt out to reintroduce per-item resolution, which keeps first-time integrations safer.

## Why users might opt out

Users might prefer DataLoader, query planning, or another batching strategy instead of batch resolvers. DataLoader is a suitable alternative if it is applied consistently to every field that can trigger N+1 behavior.

The main risk with alternative approaches is **batch desynchronization**: if some fields use batching and others do not, parent objects can resolve at different times, fragmenting downstream batches and reducing effectiveness. Batch resolvers keep related items aligned, which reduces the risk of fragmented downstream batching.

## Problems addressed

- [N+1 queries](/problem/n-plus-1)
