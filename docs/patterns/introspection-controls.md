---
title: Introspection controls
---


Controls schema introspection behavior by profile and authorization policy.

## Practices implemented

- [Operation cost controls](/practice/operation-cost-controls)

## Applies to

- GraphQL servers
- Gateways and proxies
- Schema registries

## Configuration (suggested defaults)

| Parameter              | Default       | Notes                               |
| ---------------------- | ------------- | ----------------------------------- |
| `introspectionEnabled` | profile-based | `true` first-party, `false` third-party. |

## Implementation notes

- Gate introspection by environment or auth scope.
- Provide explicit errors when introspection is blocked.
- For third-party profiles, publish SDL/schema docs via a separate channel when
  introspection is disabled.
- Enforce introspection depth/list-depth via the depth-limits rule.

## Cautions

- Disabling introspection can break tooling and codegen.
- If disabled, provide a stable SDL or schema-doc endpoint for integrators.

## Problems addressed

- [Introspection exposure](/problem/introspection-exposure)
