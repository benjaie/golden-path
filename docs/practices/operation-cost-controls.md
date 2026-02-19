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

- [Execution cost spikes](/problem/execution-cost)
- [Excessive query complexity](/problem/query-complexity)
- [Excessive query depth](/problem/query-depth)
- [Parse-time denial of service](/problem/parse-dos)
- [DoS via validation](/problem/validation-dos)
- [DoS via runtime execution](/problem/runtime-dos)

## Implementing patterns

- [Query complexity limits](/pattern/query-complexity-limits)
- [Depth limits](/pattern/depth-limits)
- [Token limits](/pattern/token-limits)
- [Validation timeouts](/pattern/validation-timeouts)
- [Execution timeouts](/pattern/execution-timeouts)
- [Introspection controls](/pattern/introspection-controls)
