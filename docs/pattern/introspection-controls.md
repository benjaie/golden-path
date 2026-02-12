---
title: Introspection controls
---

## Summary

Restricts schema introspection based on environment or authorization.

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

## Why this is the recommended default

It reduces schema exposure in production while still allowing controlled access
for trusted tooling.

## Why users might opt out

Teams with private APIs or internal-only usage may keep introspection enabled to
simplify tooling.

## Problems addressed

- [Introspection exposure](/problem/introspection-exposure)
