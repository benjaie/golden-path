---
title: Error surface hardening
sidebar_position: 40
---

## What this practice is

Return stable, safe error responses by default while keeping full details in
server-side logs.

## Applies to

- GraphQL servers
- Gateways and proxies
- Observability/security tooling

## Suggested default parameters

| Parameter           | Default | Notes                                 |
| ------------------- | ------- | ------------------------------------- |
| `maskingEnabled`    | `true`  | Hide sensitive internals.             |
| `includeStack`      | `false` | Never expose stack traces to clients. |
| `exposedErrorCodes` | `[]`    | Allowlist only safe codes/messages.   |

## Why this should be default

Accidental error leakage is common and can expose internals, credentials, query
plans, or implementation details.

## Problems this practice solves

- [Error leakage](/problem/error-leakage)

## Patterns that implement this practice

- [Error masking](/pattern/error-masking)
