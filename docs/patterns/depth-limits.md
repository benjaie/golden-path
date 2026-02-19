---
title: Depth limits
---


Depth limits cap how deep a query can nest selections to prevent runaway
traversal and pathological parsing. A separate list-depth limit is critical
because nested lists are where query cost often grows explosively.

## Practices implemented

- [Operation cost controls](/practice/operation-cost-controls)

## Applies to

- GraphQL servers
- Gateways and proxies
- Schema security tooling

## Configuration (suggested defaults)

| Parameter                   | Default | Notes                                         |
| --------------------------- | ------- | --------------------------------------------- |
| `maxDepth`                  | `12`    | Maximum selection depth per operation.        |
| `maxListDepth`              | `4`     | Maximum number of nested list levels.         |
| `maxIntrospectionDepth`     | `14`    | Allow introspection but keep it bounded.      |
| `maxIntrospectionListDepth` | `3`     | Nested-list bound for introspection.          |

## Implementation notes

- Compute depth based on field/list traversal only.
- Compute list depth separately from field depth.
- Treat each transition through a list type as +1 list depth.
- Provide a clear error with the path and computed depth.
- Return both computed `depth` and `listDepth` in error metadata.
- Enforce separate list/depth limits for introspection operations.
- Handle fragment-count limits with a separate rule.
- Allow per-operation overrides for trusted tooling if needed.

## Cautions

- Too-low defaults can break legitimate use cases.
- Nested lists can multiply execution and response size quickly; keep
  `maxListDepth` low (typically `2`-`3`) even when `maxDepth` is higher.
- Introspection depth and introspection list depth should be separate from app
  query limits.
- Fragment-heavy queries are common and expected in component-driven clients;
  constrain fragments with a dedicated fragment rule instead of depth limits.
- Depth limits do not replace complexity limits; use both.

## Problems addressed

- [Parse-time denial of service](/problem/parse-dos)
- [Execution cost spikes](/problem/execution-cost)
- [Excessive query depth](/problem/query-depth)
