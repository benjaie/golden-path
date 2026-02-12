---
title: Execution timeouts
---

## Summary

Stops execution when it exceeds a time budget.

## Applies to

- GraphQL servers
- Gateways and proxies

## Configuration (suggested defaults)

| Parameter              | Default      | Notes                                |
| ---------------------- | ------------ | ------------------------------------ |
| `executionTimeoutMs`   | `3000`       | Abort execution after a time budget. |
| `cancellationStrategy` | `bestEffort` | Cancel ongoing work where possible.  |

## Implementation notes

- Apply timeouts at the operation level.
- Ensure resolvers can observe cancellation.
- Log timeout failures with trace IDs.

## Cautions

- Long-running operations may fail unexpectedly.
- Cancellation support varies across runtimes.

## Why this is the recommended default

It provides a hard ceiling on runtime cost and protects shared infrastructure
from pathological queries.

## Why users might opt out

Workflows with guaranteed long-running operations may choose to increase or
disable timeouts in controlled environments.

## Problems addressed

- [DoS via runtime execution](/problem/runtime-dos)
