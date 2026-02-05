---
title: Validation timeouts
---

## Summary

Stops validation when it exceeds a time budget.

## Applies to

- GraphQL servers
- Gateways and proxies

## Configuration (suggested defaults)

| Parameter | Default | Notes |
| --- | --- | --- |
| `validationTimeoutMs` | `250` | Abort validation after a time budget. |
| `fallbackBehavior` | `reject` | Reject queries that exceed the timeout. |

## Implementation notes

- Enforce timeouts during validation, before execution starts.
- Surface clear errors that point to validation cost.
- Keep validation rules deterministic.

## Cautions

- Complex schemas may require higher timeouts.
- Timeouts can hide performance regressions if not monitored.

## Why this is the recommended default

It limits pre-execution CPU cost and reduces validation-based DoS risk.

## Why users might opt out

Teams with trusted, pre-validated queries may raise or disable validation timeouts.

## Problems addressed

- [DoS via validation](/problem/validation-dos)
