---
title: Operation cost controls
sidebar_position: 30
---

## What this practice is

Enforce bounded operation cost before and during execution using limits and
timeouts.

## Applies to

- GraphQL servers
- Gateways and proxies
- Security tooling

## Suggested default parameters

| Parameter             | Default | Notes                              |
| --------------------- | ------- | ---------------------------------- |
| `maxComplexity`       | `1000`  | Reject expensive operations early. |
| `maxDepth`            | `12`    | Bound nesting depth.               |
| `validationTimeoutMs` | `250`   | Bound pre-execution CPU.           |
| `executionTimeoutMs`  | `3000`  | Bound runtime CPU/IO work.         |

## Why this should be default

Without explicit ceilings, valid queries can still create denial-of-service
conditions or severe latency variance.

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
- [Result size limits](/pattern/result-size-limits)
- [Introspection controls](/pattern/introspection-controls)
