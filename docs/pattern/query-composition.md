---
title: Query composition
---

## Summary

Query composition encourages clients to assemble operations from local,
component-owned fragments so data requirements stay close to where data is used.

## Practices implemented

- [Query composition](/practice/query-composition)

## Applies to

- GraphQL clients
- Client frameworks
- Code generators and linting tooling

## Configuration (suggested defaults)

| Parameter            | Default     | Notes                                                 |
| -------------------- | ----------- | ----------------------------------------------------- |
| `fragmentColocation` | `required`  | Components own their fragments by default.            |
| `dataMasking`        | `enabled`   | Prevent access to fields not requested by a fragment. |
| `compositionMode`    | `automatic` | Compose queries from fragments without manual roots.  |

## Implementation notes

- Encourage fragments to live alongside components that render the data.
- Assemble operations automatically from fragment dependencies.
- Mask fields so root query additions do not leak into components.

## Cautions

- Composition must be deterministic to avoid cache churn.
- Data masking can feel restrictive; provide clear errors and tooling support.
- Ensure fragments can be statically analyzed for build-time tooling.

## Problems addressed

- [Over-fetching and under-fetching](/problem/overfetching-underfetching)
