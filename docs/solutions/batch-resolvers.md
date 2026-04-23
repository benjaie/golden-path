---
title: Batch resolvers
---

Compared to traditional resolvers, which receive a single parent object and
associated arguments and return the value for that field, a batch resolver
receives a _list_ of all parent objects in that operation position (TODO: define
term). It must return a list of the same size where each entry is the value to
use for the correlated parent object. Essentially, it is the DataLoader solution
but enforced via every resolver in the schema.

Batch resolvers force the developer to address the N+1 problem head-on. If the
developer still manages to introduce an N+1 problem, it should be much more
straightforward to resolve since the entry and exit points already have the
right shape; no additional configuration (e.g. adding DataLoaders to context) is
required.

Batch resolvers implemented directly in the GraphQL engine also have the
additional benefit that the number of "promises" required is significantly
diminished as compared to traditional resolvers used with DataLoader.

## Practices implemented

- [Batched execution](/practices/batched-execution)

## Implementer guidance

### Server implementer

- Make batch resolvers the default and either forbid or require additional
  effort (ideally with suitably scary names) to opt into traditional resolvers
- Provide helpful errors when list output length does not match list input
  length.
- Return per-item null/error results instead of failing whole batches when
  possible.
- If desired, fields on the root operation types (typically named Query,
  Mutation, Subscription) may use traditional resolvers since they will only
  ever handle one value at a time. Do whatever works for the ergonomics and
  consistency of your library/framework.
- Keep request-scoped caches isolated by auth context; we recommend only
  batching within a single GraphQL request by default.

### Schema designer

- Model fields so they can be naturally loaded in sets (stable identifiers,
  explicit keys, predictable parent relationships).
- Avoid schema shapes that force one-off resolver calls for each child entity.

## Cautions

- Cross-request caches can leak data if not keyed by auth context.
- Batching on the critical path _can_ increase latency; consider allowing
  advanced users to opt out while protecting regular users from the much larger
  concern of N+1 by default.
- Backends may still need query-level guards to prevent oversized result sets.
- Consider offering "max batch size" configuration for each field; some services
  have limits or start to perform worse as batch sizes pass a critical
  threshold.

## Problems addressed

- [N+1 queries](/problems/n-plus-1)
