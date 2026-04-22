---
title: Validation timeouts
---

Stops validation when it exceeds a time budget.

## Practices implemented

- [Operation cost controls](/practices/operation-cost-controls)

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
- Hashing operations and storing them to a "known good" list once validated once
  can save repeated validation costs.

## Cautions

- Complex schemas may require higher timeouts.
- Timeouts can hide performance regressions if not monitored.
- Frequent validation timeouts from the same user or IP _might_ indicate a
  malicious user. Consider rate-limiting new operations.

## Problems addressed

- [DoS via validation](/problems/validation-dos)
