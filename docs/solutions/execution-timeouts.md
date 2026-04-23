---
title: Execution timeouts
---

Stops execution when it exceeds a time budget.

## Practices implemented

- [Operation cost controls](/practices/operation-cost-controls)

## Applies to

- GraphQL servers
- Gateways and proxies

## Configuration (suggested defaults)

| Parameter                      | Default | Notes                                          |
| ------------------------------ | ------- | ---------------------------------------------- |
| `queryTimeoutMs`               | `15000` | Queries should be fast.                        |
| `mutationTimeoutMs`            | `60000` | Mutations may take longer.                     |
| `subscriptionPayloadTimeoutMs` | `15000` | Subscriptions are ongoing, limit each payload. |

## Implementation notes

- Apply timeouts at the operation level.
- Ensure resolvers can observe cancellation.
- Subscriptions should not have timeouts (they are expected to run
  indefinitely), but each event should have a timeout in production. Failure to
  meet this timeout should cancel the entire subscription.
- Log timeout failures with trace IDs.

## Cautions

- Long-running operations may fail unexpectedly.
- Cancellation support varies across runtimes.
- Beware thundering herd when many operations are canceled around the same time.

## Problems addressed

- [DoS via runtime execution](/problems/runtime-dos)
