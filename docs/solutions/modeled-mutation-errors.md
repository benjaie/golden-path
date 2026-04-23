---
title: Modeled mutation errors
---

Model expected business-level mutation failures in mutation results rather than
relying only on top-level GraphQL errors.

## Implementer guidance

### Schema designer

- Represent expected domain failures in payload fields or unions/interfaces.
- Use stable, machine-readable error codes.
- Reserve GraphQL errors for exceptional/system failures.

### Client implementer

- Handle modeled mutation failures as part of normal typed control flow.
- Handle GraphQL errors in an ergonomic fashion, e.g.
  [Throw On Error](https://github.com/graphile/graphql-toe),
  [`@throwOnFieldError`](https://relay.dev/docs/guides/throw-on-field-error-directive/)
  or [`@catch`](https://relay.dev/docs/guides/catch-directive/).

### Tooling implementer

- Enforce conventions for modeled error types/codes.
- Generate strongly typed client helpers for modeled error branches.

## Problems addressed

- [Error leakage](/problems/error-leakage)
