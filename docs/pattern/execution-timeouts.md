---
title: Execution timeouts
---


Stops execution when it exceeds a time budget.

## Practices implemented

- [Operation cost controls](/practice/operation-cost-controls)

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

## Problems addressed

- [DoS via runtime execution](/problem/runtime-dos)
