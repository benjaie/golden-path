---
title: Error masking
---

## Summary

Normalizes errors returned to clients and hides internal details by default.

## Practices implemented

- [Error surface hardening](/practice/error-surface-hardening)

## Applies to

- GraphQL servers
- Gateways and proxies
- Observability and security tooling

## Configuration (suggested defaults)

| Parameter           | Default | Notes                                    |
| ------------------- | ------- | ---------------------------------------- |
| `maskingEnabled`    | `true`  | Mask internal errors by default.         |
| `exposedErrorCodes` | `[]`    | Allowlist of safe error codes.           |
| `includeStack`      | `false` | Never include stack traces in responses. |

## Implementation notes

- Map internal errors to stable error codes and client-safe messages.
- Log full details server-side with correlation IDs.
- Ensure masked errors remain distinguishable for debugging.

## Cautions

- Over-masking can make client debugging harder.
- Inconsistent error shapes across services break tooling.

## Problems addressed

- [Error leakage](/problem/error-leakage)
