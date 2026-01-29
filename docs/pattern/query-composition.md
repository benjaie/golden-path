---
title: Query composition
---

## Summary

Query composition encourages clients to assemble operations from local, component-owned fragments so data requirements stay close to where data is used.

## Applies to

- GraphQL clients
- Client frameworks
- Code generators and linting tooling

## Configuration (suggested defaults)

| Parameter | Default | Notes |
| --- | --- | --- |
| `fragmentColocation` | `required` | Components own their fragments by default. |
| `dataMasking` | `enabled` | Prevent access to fields not requested by a fragment. |
| `compositionMode` | `automatic` | Compose queries from fragments without manual root queries. |

## Implementation notes

- Encourage fragments to live alongside the components that render the data.
- Assemble operations automatically from fragment dependencies.
- Mask fields so adding fields to a root query does not leak into components.

## Cautions

- Fragment composition must be deterministic to avoid cache churn.
- Data masking can feel restrictive; provide clear errors and tooling support.
- Ensure fragments can be statically analyzed for build-time tooling.

## Why this is the recommended default

Composition plus masking makes the correct behavior the path of least resistance: users are forced to declare local data requirements, and root-level additions do not silently change component data.

## Why users might opt out

Some teams prefer handcrafted root queries for readability or to avoid additional tooling. Others rely on server-driven composition or schema registries to assemble operations.

The risk is that data requirements drift away from usage, leading to over-fetching, fragile mega-queries, and accidental coupling between unrelated features. Query composition is the recommended default because it keeps requirements local and makes the “right” behavior the path of least resistance.

## Problems addressed

- [Over-fetching and under-fetching](/problem/overfetching-underfetching)
