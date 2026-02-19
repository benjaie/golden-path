---
title: Batch resolvers
---


Batch resolvers group many field resolutions into a single call so servers avoid
N+1 database or service requests while preserving GraphQL’s shape.

## Practices implemented

- [Batched execution](/practice/batched-execution)

## Applies to

- GraphQL servers
- Execution engines and runtimes

## Configuration (suggested defaults)

| Parameter       | Default      | Notes                                   |
| --------------- | ------------ | --------------------------------------- |
| `batchSchedule` | `microtask`  | Queue batching within the same tick.    |
| `cacheScope`    | `perRequest` | Avoid cross-request caching by default. |

## Implementation notes

- Resolver signature should accept a list of parent objects.
- Preserve positional ordering between inputs and outputs.
- Return `null` or errors for missing items without reordering.
- Prefer request-scoped caching for de-duplication within the same operation.

## Cautions

- Cross-request caches can leak data if not keyed by auth context.
- Make batch failures granular; avoid failing the entire batch when possible.
- Batching can increase end-to-end latency by expanding the critical path.

## Problems addressed

- [N+1 queries](/problem/n-plus-1)
