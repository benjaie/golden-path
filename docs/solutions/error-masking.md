---
title: Error masking
---

Normalizes errors returned to clients and hides internal details by default.

## Practices implemented

- [Error hardening](/practices/error-hardening)

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

You may wish to give each error a unique identifier so it can be looked up, but
you also want to be able to see errors that are similar to each other. One way
to achieve this is to hash the error message before masking it, then to the
client you can log: `An error occurred (logged with hash: '...', id: '...')` and
on the server `Masked GraphQL error (hash: '...', id: '...'): ...`. You can
search the logs for the `id` to determine details about a specific instance of
an error, and for the `hash` to look for solutions relating to that particular
error shape.

## Cautions

- Over-masking can make client debugging harder; use a helper (e.g. `SafeError`)
  to indicate an error is safe to expose to end users.
- Inconsistent error shapes across services break tooling. Define a standard
  interface for errors and stick to it.
- Error hashes can enable users to correlate hashes with meanings.

## Problems addressed

- [Error leakage](/problems/error-leakage)
