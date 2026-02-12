---
title: Error surface hardening
sidebar_position: 40
---

Return stable, safe error responses by default while keeping full details in
server-side logs.

## Applies to

- GraphQL servers
- Gateways and proxies
- Observability/security tooling

## Why this should be default

Accidental error leakage is common and can expose internals, credentials, query
plans, or implementation details.

## Solves

- [Error leakage](/problem/error-leakage)

## Implementing patterns

- [Error masking](/pattern/error-masking)
