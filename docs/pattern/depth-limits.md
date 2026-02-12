---
title: Depth limits
---

## Summary

Depth limits cap how deep a query can nest selections to prevent runaway
traversal and pathological parsing.

## Practices implemented

- [Operation cost controls](/practice/operation-cost-controls)

## Applies to

- GraphQL servers
- Gateways and proxies
- Schema security tooling

## Configuration (suggested defaults)

| Parameter                | Default | Notes                                    |
| ------------------------ | ------- | ---------------------------------------- |
| `maxDepth`               | `12`    | Maximum selection depth per operation.   |
| `maxIntrospectionDepth`  | `6`     | Allow introspection but keep it bounded. |
| `treatFragmentsAsInline` | `true`  | Count fragment spreads toward depth.     |

## Implementation notes

- Compute depth across fragment spreads and inline fragments.
- Provide a clear error with the path and computed depth.
- Allow per-operation overrides for trusted tooling if needed.

## Cautions

- Too-low defaults can break legitimate use cases.
- Introspection depth should be separate from app queries.
- Depth limits do not replace complexity limits; use both.

## Problems addressed

- [Parse-time denial of service](/problem/parse-dos)
- [Execution cost spikes](/problem/execution-cost)
- [Excessive query depth](/problem/query-depth)
