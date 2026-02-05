---
title: Error masking
---

## Summary

Normalizes errors returned to clients and hides internal details by default.

## Applies to

- GraphQL servers
- Gateways and proxies
- Observability and security tooling

## Configuration (suggested defaults)

| Parameter | Default | Notes |
| --- | --- | --- |
| `maskingEnabled` | `true` | Mask internal errors by default. |
| `exposedErrorCodes` | `[]` | Allowlist of safe error codes. |
| `includeStack` | `false` | Never include stack traces in responses. |

## Implementation notes

- Map internal errors to stable error codes and client-safe messages.
- Log full details server-side with correlation IDs.
- Ensure masked errors remain distinguishable for debugging.

## Cautions

- Over-masking can make client debugging harder.
- Inconsistent error shapes across services break tooling.

## Why this is the recommended default

It prevents accidental leakage of sensitive details while giving users a consistent error surface. This is the safest default for new deployments.

## Why users might opt out

Internal-only systems may choose to expose more details for faster debugging, but should still standardize error shapes.

## Problems addressed

- [Error leakage](/problem/error-leakage)
