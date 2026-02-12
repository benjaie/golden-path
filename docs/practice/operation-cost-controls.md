---
title: Operation cost controls
sidebar_position: 60
---

## What this practice is

Enforce bounded operation cost before and during execution using complexity and
depth limits plus validation/execution timeouts.

## When to use this practice

Use this when your server accepts arbitrary documents from untrusted clients
(for example, public APIs, GraphiQL-like exploratory traffic, or third-party
integrations).

## Applies to

- GraphQL servers with open query surfaces
- Gateways and proxies with untrusted upstream traffic
- Security tooling

## Suggested default parameters

| Parameter | Default | Notes |
| --- | --- | --- |
| `maxComplexity` | `1000` | Reject expensive operations early. |
| `maxDepth` | `12` | Bound nesting depth. |
| `validationTimeoutMs` | `250` | Bound pre-execution CPU. |
| `executionTimeoutMs` | `3000` | Bound runtime CPU/IO work. |

## Why this is conditional

If your deployment enforces trusted documents and controlled releases, you may
not need these controls in the default golden path. They remain useful as
additional defense or for mixed-trust environments.

## Problems this practice solves

- [Execution cost spikes](/problem/execution-cost)
- [Excessive query complexity](/problem/query-complexity)
- [Excessive query depth](/problem/query-depth)
- [Parse-time denial of service](/problem/parse-dos)
- [DoS via validation](/problem/validation-dos)
- [DoS via runtime execution](/problem/runtime-dos)

## Patterns that implement this practice

- [Query complexity limits](/pattern/query-complexity-limits)
- [Depth limits](/pattern/depth-limits)
- [Validation timeouts](/pattern/validation-timeouts)
- [Execution timeouts](/pattern/execution-timeouts)
- [Introspection controls](/pattern/introspection-controls)
