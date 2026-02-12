---
title: Validation timeouts
---


Stops validation when it exceeds a time budget.

## Practices implemented

- [Operation cost controls](/practice/operation-cost-controls)

## Applies to

- GraphQL servers
- Gateways and proxies

## Configuration (suggested defaults)

| Parameter             | Default  | Notes                                   |
| --------------------- | -------- | --------------------------------------- |
| `validationTimeoutMs` | `250`    | Abort validation after a time budget.   |
| `fallbackBehavior`    | `reject` | Reject queries that exceed the timeout. |

## Implementation notes

- Enforce timeouts during validation, before execution starts.
- Surface clear errors that point to validation cost.
- Keep validation rules deterministic.

## Cautions

- Complex schemas may require higher timeouts.
- Timeouts can hide performance regressions if not monitored.

## Problems addressed

- [DoS via validation](/problem/validation-dos)
