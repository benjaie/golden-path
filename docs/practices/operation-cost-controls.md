---
title: Operation cost controls
sidebar_position: 60
---

Enforce bounded operation cost before and during execution using complexity and
depth limits plus validation/execution timeouts.

## When to use this practice

Use this when your server accepts arbitrary documents from untrusted clients
(for example, third-party APIs, GraphiQL-like exploratory traffic, or
third-party integrations).

## Applies to

- GraphQL servers with open query surfaces
- Gateways and proxies with untrusted upstream traffic
- Security tooling

## Why this is conditional

If your deployment enforces trusted documents and controlled releases, you may
not need these controls in the default golden path. They remain useful as
additional defense or for mixed-trust environments.

## Solves

- [Execution cost spikes](/problems/execution-cost)
- [Excessive query complexity](/problems/query-complexity)
- [Excessive query depth](/problems/query-depth)
- [Parse-time denial of service](/problems/parse-dos)
- [DoS via validation](/problems/validation-dos)
- [DoS via runtime execution](/problems/runtime-dos)

## Implementing patterns

- [Query complexity limits](/patterns/query-complexity-limits)
- [Depth limits](/patterns/depth-limits)
- [Token limits](/patterns/token-limits)
- [Validation timeouts](/patterns/validation-timeouts)
- [Execution timeouts](/patterns/execution-timeouts)
- [Introspection controls](/patterns/introspection-controls)
