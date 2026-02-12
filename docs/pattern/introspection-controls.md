---
title: Introspection controls
---

## Summary

Restricts schema introspection based on environment or authorization.

## Practices implemented

- [Operation cost controls](/practice/operation-cost-controls)

## Applies to

- GraphQL servers
- Gateways and proxies
- Schema registries

## Configuration (suggested defaults)

| Parameter                 | Default | Notes                                      |
| ------------------------- | ------- | ------------------------------------------ |
| `introspectionEnabled`    | `false` | Disable in production by default.          |
| `introspectionAllowlist`  | `[]`    | Optional list of allowed clients or roles. |
| `introspectionDepthLimit` | `6`     | Keep introspection bounded.                |

## Implementation notes

- Gate introspection by environment or auth scope.
- Provide explicit errors when introspection is blocked.
- Allow opt-in for tooling and trusted clients.

## Cautions

- Disabling introspection can break tooling and codegen.
- Be explicit about how users can enable it.

## Problems addressed

- [Introspection exposure](/problem/introspection-exposure)
