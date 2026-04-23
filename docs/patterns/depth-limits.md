---
title: Depth limits
---

Depth limits help prevent excessively complex operations from being executed,
helping protect against denial of service.

- Selection set depth limits cap how deep a query can nest selections sets,
  thereby limiting the maximum waterfall depth.
- List depth limits cap how deep lists can be nested, since lists multiply up
  the result size and can have an exponential impact on the complexity of a
  request.
- Self-referential depth limits limit how many times a particular field can be
  nested within its own selection sets; these cycles can allow multiplying up
  how expensive an operation is with minimal effort. Self-referential nesting is
  rarely desired and can be an indicator of a malicious operation, but there are
  certain classes of self-references that are expected and desired so overrides
  on a per-field basis must be exposed.

## Practices implemented

- [Operation cost controls](/practices/operation-cost-controls)

## Applies to

- GraphQL servers
- Gateways and proxies
- Schema security tooling

## Configuration (suggested defaults)

| Parameter                              | Default | Notes                                                                                  |
| -------------------------------------- | ------- | -------------------------------------------------------------------------------------- |
| `maxDepth`                             | `12`    | Maximum selection depth per operation.                                                 |
| `maxListDepth`                         | `2`     | Maximum number of nested list levels.                                                  |
| `maxSelfReferentialDepth`              | `1`     | Maximum number of times a field may be referenced nested within its own selection set. |
| `maxIntrospectionDepth`                | `15`    | Allow introspection but keep it bounded.                                               |
| `maxIntrospectionListDepth`            | `3`     | Nested-list bound for introspection.                                                   |
| `maxIntrospectionSelfReferentialDepth` | `2`     | Maximum number of times a field may be referenced nested within its own selection set. |

We recommend the following overrides for self-referential depth to enable the
most common introspection queries whilst blocking malicious requests:

- `Query.__schema`: 1
- `Query.__type`: 1
- `__Type.fields`: 1
- `__Type.inputFields`: 1
- `__Type.interfaces`: 1
- `__Type.ofType`: 9
- `__Type.possibleTypes`: 1
- `__Field.args`: 1
- `__Field.type`: 1

## Implementation notes

- Compute depth based on field/list traversal only.
- Compute list depth separately from field depth.
- Treat each transition through a list type as +1 list depth.
- Provide a clear error with the path and computed depth.
- Once a threshold of validation errors is reached, abort validation.
- Return computed depths in error metadata to aid developers.
- Enforce separate list/depth limits for introspection operations.
- Handle fragment-count limits with a separate rule.
- Allow per-operation overrides for trusted tooling if needed.
- You may wish to implement different thresholds for different classes of users
  (e.g. anonymous users may have lower limits).

## Cautions

- Too-low defaults can break legitimate use cases, but too-high defaults may not
  provide sufficient protection. Make sure overrides are possible where
  sensible.
- Nested lists can multiply execution and response size quickly; keep
  `maxListDepth` low (typically `2`-`3`).
- Introspection depth and introspection list depth should be separate from app
  query limits.
- Fragment-heavy queries are common and expected in component-driven clients;
  constrain fragments with a dedicated fragment rule instead of depth limits.
- Depth limits do not replace complexity limits; use both.

## Problems addressed

- [Parse-time denial of service](/problems/parse-dos)
- [Execution cost](/problems/execution-cost)
- [Excessive query depth](/problems/query-depth)
